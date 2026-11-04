# Hitoiki website

Read PRODUCT.md and DESIGN.md before editing. Keep the page compact and the
copy plain and technically exact. The public name is Hitoiki; the app's local
checkout still uses Issoku. Do not change or publish the app during site work.

Publish only `public/`. Keep credentials, process records, and local preview
artifacts out of that directory and out of Git. Never fabricate an app download
or purchase destination. Use browser-local sample data for the preview and do
not execute shell commands supplied through the website.

Run `npm run check` and `git diff --check` before publishing. Inspect desktop
and mobile when browser access is available; report unavailable visual checks.
