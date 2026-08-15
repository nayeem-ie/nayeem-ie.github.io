# moddassir-site

A four-page academic site — plain HTML/CSS/JS, no build step, deploys straight to GitHub Pages.

## Files

- `index.html` — Home (hero with photo, about, research)
- `publications.html` — full publication list
- `teaching.html` — courses taught, teaching experience, mentoring
- `experience.html` — academic timeline, research experience, honors, service
- `styles.css` — shared styling for all pages
- `script.js` — mobile nav toggle + active-page highlighting + footer year
- `headshot.jpg` — your photo, used in the Home hero
- `cv.pdf` — **you need to add this** (see below)

## Before you publish

- Add your CV PDF to this folder, named exactly `cv.pdf` — every page's footer links to it. If you'd rather not host the CV, either remove that link from the footer on all four pages or point it elsewhere.
- Your CV lists a phone number; it's not on the site. Add it to the footer yourself if you want it public.

## Publish it on GitHub Pages

1. Create a new repository on GitHub — name it `<your-username>.github.io` for a root domain (e.g. `moddassir.github.io`), or any name for a `/repo-name/` path.
2. Upload all the files above (including `headshot.jpg` and your `cv.pdf`) to the repository root.
3. In the repo, go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
5. GitHub gives you a live URL within a minute or two.

### If you'd rather use git from the command line

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then do steps 3–5 above.

## Making edits later

Everything is plain HTML/CSS — open the relevant page in any text editor and edit the text directly. The navigation and footer are repeated at the top/bottom of each page (there's no shared template in a no-build site), so if you rename or reorder pages, update the `<nav>` and `<footer>` blocks in all four files to match.
