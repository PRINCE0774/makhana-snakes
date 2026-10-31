# WebPulse Media

A responsive Vite + React + Tailwind CSS v3 marketing site for a digital agency offering React web development and Meta Ads services.

## Run locally

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

## Tests

```bash
npm test
```

## Deploy

The GitHub Actions workflow at `.github/workflows/deploy.yml` builds on every push to `main` and publishes `dist` to GitHub Pages. Enable GitHub Pages with the `gh-pages` branch as its deployment source. The `public/404.html` fallback preserves deep links for root-based deployments (custom domains and user sites), while the app restores the original route before rendering. For a project site, update `base` in `vite.config.js` to `'/repo-name/'` and the redirect base path in `public/404.html` to match the repository path.

## SEO and next steps

Page-specific titles and descriptions are included with React Helmet Async; keep them concise and unique as content evolves. Before launch, convert any production photography to optimized WebP, add final social sharing metadata and connect analytics. Replace the placeholder Razorpay URLs in `src/pages/Pricing.jsx` with live checkout links. The contact form is client-side only and does not transmit leads; connect a secure form service or backend before collecting real submissions. A future headless CMS can power service details, case studies and campaign insights without changing the page layout.
