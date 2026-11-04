"""Validate local assets, fragments, and basic page structure before publication."""

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1] / "public"


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.links = []
        self.headings = 0
        self.language = None

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if "id" in attrs:
            assert attrs["id"] not in self.ids, f"Duplicate id: {attrs['id']}"
            self.ids.add(attrs["id"])
        if tag == "html":
            self.language = attrs.get("lang")
        if tag == "h1":
            self.headings += 1
        if tag == "img":
            assert "alt" in attrs, "Image missing alt attribute"
        for name in ("href", "src"):
            if name in attrs:
                self.links.append(attrs[name])


pages = {}
for path in ROOT.rglob("*.html"):
    page = Page()
    page.feed(path.read_text())
    assert page.language == "en", f"Missing language: {path}"
    assert page.headings == 1, f"Expected one h1: {path}"
    pages[path] = page

for path, page in pages.items():
    for link in page.links:
        url = urlsplit(link)
        if url.scheme or url.netloc:
            assert url.scheme == "https", f"Non-HTTPS external URL: {link}"
            continue
        target = ROOT / url.path.lstrip("/") if url.path.startswith("/") else path.parent / url.path
        if not url.path:
            target = path
        elif target.is_dir():
            target /= "index.html"
        assert target.is_file(), f"Missing local target: {link} in {path.name}"
        if url.fragment:
            assert target in pages and url.fragment in pages[target].ids, f"Missing fragment: {link}"

for path in ROOT.rglob("*.svg"):
    ET.parse(path)
ET.parse(ROOT / "sitemap.xml")
print(f"Checked {len(pages)} pages, local links, image descriptions, SVG, and sitemap.")
