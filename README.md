# Portfolio Website

This repository contains a static portfolio website designed for deployment on GitHub Pages.

## Files

- `index.html` — homepage and site markup
- `styles.css` — responsive styling and layout
- `script.js` — mobile navigation toggle
- `CNAME` — custom domain configuration for GitHub Pages

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project.
2. Enable GitHub Pages in repository settings.
   - Choose branch `main` or `gh-pages`
   - Set folder to `/ (root)`
3. GitHub will publish the site at `https://<username>.github.io/<repository>/`.

## Connect a custom domain

1. Replace the domain in `CNAME` with your custom domain:
   ```
   parag.fit
   ```
2. Add DNS records at your domain registrar:
   - `A` record -> `185.199.108.153`
   - `A` record -> `185.199.109.153`
   - `A` record -> `185.199.110.153`
   - `A` record -> `185.199.111.153`
   - Optional `CNAME` record for `www` -> `username.github.io`
3. Wait for DNS propagation, then visit your custom domain.

## Notes

- If you want the site to use `www`, add a `www` CNAME record and update the `CNAME` file accordingly.
- `CNAME` is required for GitHub Pages to associate the site with a custom domain.
