# NeuroNet Academy

An interactive engineering education platform. This repository currently ships
the **Deep Learning Foundation** module, built from source lecture material
and transformed into interactive lessons — not slide reproductions.

## What's actually in this repo right now

- Full Astro + TypeScript site scaffold, design system, and reusable component library.
- Two fully-realized lessons (of six planned for this module):
  1. **Biological Neurons, the Perceptron & the MLP**
  2. **Forward Propagation & Backpropagation via Gradient Descent** (full worked numeric example)
- The remaining four lessons in the module syllabus are defined in
  `src/data/deepLearningCourse.ts` and marked `in-progress` — they render on
  the course page as a visible roadmap, not as dead links.

This is intentionally scoped: two lessons built to full production depth,
rather than fifteen built shallow. Once this bar is confirmed, the same
pattern (Objectives → Theory → Math → Interactive Diagram → Code in
Python/TensorFlow/PyTorch → Quiz → Interview Qs → Case Study →
Troubleshooting → References → Summary) scales to the rest of the syllabus,
and to the other 20+ courses in the long-term roadmap (Networking, Cloud,
Security, MLOps, Agentic AI, etc.).

## Tech stack

- **Astro** + **TypeScript** (static output)
- Vanilla component-scoped CSS using a token system (`src/styles/global.css`) — no Tailwind, no Bootstrap component classes
- **MathJax** for LaTeX rendering, **Prism** for syntax highlighting
- Zero client-side framework runtime — interactivity (quiz scoring, code tabs, diagram toggles) is plain TypeScript, shipped only where needed

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321
```

```bash
npm run build      # type-checks with `astro check`, then builds to ./dist
npm run preview    # serve the production build locally
```

## Deployment

This is configured to deploy as a **GitHub Pages project site** — repo
name `neuronet-academy`, separate from `pravinmisrha.github.io` (which is
reserved for your GitHub profile README). Project sites are served under
a subpath: `https://pravinmisrha.github.io/neuronet-academy/`.

**To publish it:**
1. Create a GitHub repo named `neuronet-academy` (empty — no README/license/gitignore).
2. From this project folder:
   ```bash
   npm install
   git init
   git add .
   git commit -m "Initial NeuroNet Academy site"
   git branch -M main
   git remote add origin https://github.com/pravinmisrha/neuronet-academy.git
   git push -u origin main
   ```
3. In that repo: **Settings → Pages → Source → GitHub Actions**.
4. `.github/workflows/deploy.yml` builds and deploys automatically. Site goes live at `https://pravinmisrha.github.io/neuronet-academy/`.

- **Docker** (for local/other hosting, unrelated to GitHub Pages): `docker build -t neuronet-academy . && docker run -p 8080:80 neuronet-academy`

## Project structure

```
src/
├── components/       # GlassCard, CodeTabs, Quiz, PerceptronDiagram, ForwardPassDiagram
├── data/             # deepLearningCourse.ts — single source of truth for the syllabus
├── layouts/          # BaseLayout.astro — nav, fonts, MathJax/Prism loading
├── pages/
│   ├── index.astro
│   └── courses/deep-learning/
│       ├── index.astro
│       ├── perceptron-and-neurons.astro
│       └── forward-and-backpropagation.astro
└── styles/global.css # design tokens: color, type, spacing, glass surfaces
```

Adding a lesson: add an entry to `deepLearningCourse.ts`, create the matching
`.astro` page under `pages/courses/deep-learning/`, and it appears
automatically on both the homepage and the course index.

## Design system

Theme: **"Signal & Structure"** — dark, blue-black base (`#0a0e14`), teal/indigo
signal accents, `Space Grotesk` display type paired with `Inter` body text and
`JetBrains Mono` for code and data. Glassmorphism is used sparingly (nav,
cards) rather than applied everywhere. Full token list in
`src/styles/global.css`.

## Roadmap

- [ ] Remaining 4 lessons in Deep Learning Foundation (activation/cost/loss, weight init, overfitting/training dynamics, computational graphs + Keras)
- [ ] Capstone project for this module
- [ ] Next course module (candidates: Python for ML, Linear Algebra for Deep Learning, or Network Automation — see main scope doc)
- [ ] FastAPI backend for quiz persistence / progress tracking
- [ ] Search
