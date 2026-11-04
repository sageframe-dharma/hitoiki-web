# Hitoiki website

Source for <https://hitoiki.sageframe.net>. A static home page, full documentation
at `/docs/`, CSS, and a small browser-only command preview. No framework,
build step, or runtime dependencies.

## Preview and checks

Requires Node.js 22 or later and Python 3.

```sh
npm run dev
npm run check
```

Open <http://127.0.0.1:4173>. Publish only `public/`; the design and product
records stay outside the public site. The preview uses illustrative data and
cannot run local commands or contact a remote host.

## Content and assets

PRODUCT.md records product truth and release limits. DESIGN.md records the
accepted visual direction. The original icon is in `design/hitoiki-icon.svg`;
the website derivative in `public/assets/` adds a squircle clip. No application
code, repository names, or release state are changed by this site.

The practitioner requested release-oriented copy. The site describes the
application in the present tense and includes a Run/Spotlight comparison and
FAQ. The Hitoiki GitHub release and Payhip product destinations still need to be
provided before the download and purchase actions can be wired. Never reuse
m4Bookmaker's product URL for Hitoiki.

## Publication

The Cloudflare Pages project is `hitoiki`, with production branch
`main` and custom domain `hitoiki.sageframe.net`. The workflow publishes only
`public/` after the checks pass. Store the Pages API token as the repository
secret `CLOUDFLARE_API_TOKEN` and account ID as `CLOUDFLARE_ACCOUNT_ID`.

For manual publication from the intended commit, set those environment
variables through the existing credential mechanism, then run `npm run deploy`.
Never put credentials in the repository or public assets.

The custom domain is associated with the Pages project. DNS must contain a
proxied CNAME for `hitoiki.sageframe.net` targeting `hitoiki.pages.dev`. The
existing Pages API tokens and local Wrangler OAuth credentials cannot edit DNS;
domain activation remains pending until that record is configured.
