# K-Bunsik — Website

Custom, branded marketing site for **K-Bunsik**, a Korean street food spot in Walnut Grove Town Centre, Langley BC.

- **Stack:** Plain HTML / CSS / JS (zero build step)
- **Hosting:** Vercel (ready to deploy)
- **Pages:** Home, Menu, 404

The site is fully static, so everything in this folder can be pushed straight to GitHub and connected to Vercel — no framework, no package install.

## Folder structure

```
K-Bunsik Website/
├── assets/                 Brand assets extracted from menu-board photos
│   ├── mascot.png
│   ├── food-adult-kimbap.jpg
│   ├── food-kimbap-roll.jpg
│   ├── food-triangle.jpg
│   └── food-lineup.jpg
├── index.html              Home: hero, signature items, story, special, location
├── menu.html               Full menu with category filters
├── 404.html                Branded not-found page
├── styles.css              Brand system + page styles
├── main.js                 Nav, scroll reveal, menu filter, today-highlight
├── vercel.json             Clean URLs + cache/security headers
└── .gitignore
```

## Preview locally

From this folder, run any static server:

```bash
# Python (no install required)
python3 -m http.server 5173

# or with Node
npx serve .
```

Then open [http://localhost:5173](http://localhost:5173).

## Deploy

### Option A — GitHub + Vercel (recommended)

1. Create a new GitHub repo and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial K-Bunsik site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/k-bunsik.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Other**. Build command: leave blank. Output directory: `./`.
4. Click **Deploy**. Done — every push to `main` re-deploys automatically.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

## Customizing

- **Colors / fonts** — all brand tokens live at the top of `styles.css` under `:root`.
- **Menu items** — edit `menu.html`. Each item is a `.menu-item` block.
- **Hours / address / phone** — `index.html` (location section + nav + footer).
- **Photos** — drop new files into `assets/` and update the `<img src="…">` references.

## Notes on assets

The mascot and food photos were extracted from the restaurant's physical menu-board
photos. They're authentic to K-Bunsik — not stock imagery. If the restaurant later
commissions high-resolution studio shots, swap them into `assets/` with the same
filenames for a drop-in upgrade.

---

Built for K-Bunsik · 20999 88 Ave #203, Langley Twp, BC · (604) 977-5353
