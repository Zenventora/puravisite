# Puravigal Website Audit & Correction Log

Last updated: 2026-10-10
Repository: https://github.com/Zenventora/puravisite
Preview: https://zenventora.github.io/puravisite/
Canonical site: https://www.puravigal.com/

This is the running audit record. Add every newly reported correction here and keep status current; do not mark an item complete until the relevant page(s) have been checked after the change.

## Page inventory

### Main site
- [ ] `/` — homepage
- [ ] `/about-us.html`
- [ ] `/business-types.html`
- [ ] `/careers.html`
- [ ] `/contact.html`
- [ ] `/privacy-policy.html`
- [ ] `/terms-and-conditions.html`
- [ ] `/login.html`
- [ ] `/signup.html`
- [x] `/404.html` — custom 404 page exists; fixed asset/navigation paths to support GitHub Pages preview and custom domain.

### Puravigal POS
- [ ] `/pos/` — overview
- [ ] `/pos/features.html`
- [ ] `/pos/pricing.html`
- [ ] `/pos/resources.html`
- [ ] `/pos/industries/`
- [ ] `/pos/industries/retail.html`
- [ ] `/pos/industries/restaurant.html`
- [ ] `/pos/industries/cafe.html`
- [ ] `/pos/industries/mobile-shop.html`
- [ ] `/pos/industries/supermarket.html`
- [ ] `/pos/industries/grocery.html`
- [ ] `/pos/resources/choose-pos-software.html`
- [ ] `/pos/resources/retail-billing-inventory-checklist.html`
- [ ] `/pos/resources/restaurant-cafe-pos-checklist.html`
- [ ] `/pos/login.html`
- [ ] `/pos/signup.html`

## User-reported audit requirements

- [ ] Confirm missing URLs return a real 404 status on the deployed host (a GitHub Pages custom 404 file alone may still be served with a soft-404; verify live response).
- [ ] Main homepage FAQ container width/alignment matches the shared content grid.
- [ ] POS FAQ design: consistent spacing, accordion states, focus treatment, and responsive layout across all POS pages.
- [ ] Social icons visible and consistent in main site and POS footers; retain existing verified links.
- [ ] Wait for user-provided official LinkedIn, WhatsApp and YouTube URLs before linking those icons to real profiles. Never use generic placeholder destinations.
- [ ] Verify older social URLs/assets are retained where valid.
- [ ] Audit every header/footer label, spelling, grammar, destination, active-nav state, and duplicate footer/social blocks.
- [ ] Unify section styles and left/right content patterns with the homepage's “The Puravigal idea” visual system.
- [ ] Review POS palette: retain product distinction but align emphasis/gradient with Puravigal's blue-pink brand gradient.
- [ ] Fix broken image/media paths and missing icons.
- [ ] Verify all internal links, section anchors, CTA paths, sitemap URLs, canonical URLs and redirects.
- [ ] Verify all pages at mobile, tablet and desktop sizes; keyboard and screen-reader accessibility.
- [ ] Validate SEO metadata, structured data, crawlability, page performance, Core Web Vitals and tracking.

## Changes made in this audit pass

1. **404 page:** made its stylesheet, favicon, logo and navigation paths adapt to GitHub Pages project preview (`/puravisite/`) and the custom domain root (`/`). Commit: `8d632965c1e16b082dd06764d0a85f5f31e313ab`.
2. **POS session-aware CTA:** common `js/site.js` checks `https://pos.puravigal.com/api/auth/status` with `credentials: include`. Authenticated response shows “Access Now”; otherwise shows “Get Started Free”. API/network failures keep the signup CTA visible. Commit: `32b8751eea2bd8ab0db57d47479d4ab8a9ad9dcb`.
3. **Navigation accessibility:** menu button expanded state is synchronized; current navigation links receive `aria-current="page"`; pricing toggle buttons expose `aria-pressed`. Same `js/site.js` commit above.

## Known social links

- Facebook: https://www.facebook.com/puravigal
- Instagram: https://instagram.com/puravigal/
- X / Twitter: https://twitter.com/puravigal
- Threads: https://www.threads.net/@puravigal
- LinkedIn: pending official URL from user
- WhatsApp: pending official URL from user
- YouTube: pending official URL from user

## Important verification caveats

- Source code inspection is not the same as deployed browser testing.
- Confirm the auth-status endpoint returns `{ "authenticated": true }` for a signed-in session and supports credentialed CORS from both the preview and custom domain.
- Confirm GitHub Pages/custom-domain DNS and actual HTTP 404 status separately.
- Do not claim a page has passed performance/accessibility or live broken-link checks until those checks are run and their results recorded.
