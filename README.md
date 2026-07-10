# Sunday Market Wiki — retired prototype

> **⚠️ This repository is retired. It is not the live wiki.**
>
> The live Sunday Market player wiki is **https://marketsunday.com/wiki**, served
> by the Next.js / Fumadocs site in the **`sundaymarket-website`** repo
> (`content/wiki/`). This Astro Starlight project was an early prototype and was
> **never deployed** to marketsunday.com, despite older notes here claiming so.
>
> In July 2026 its content was rebuilt from the live server and merged into the
> Fumadocs wiki. Make all wiki edits in `sundaymarket-website/content/wiki/`, not
> here. This repo is kept for reference and history only.

---

*Prototype notes (for reference):*

Built with [Astro Starlight](https://starlight.astro.build). Every page was a
Markdown file under `src/content/docs/`. The comprehensive, server-accurate
build lived on the `feat/full-server-wiki` branch before the content moved to
the live Fumadocs wiki.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
```

Requires Node 22+.
