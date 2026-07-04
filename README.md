# Sunday Market Wiki

Player guides and almanacs for the Sunday Market Minecraft community — starting
with [Work Orders](https://modrinth.com/plugin/work-orders-golems), the
copper-golem jobs plugin. Live at **[marketsunday.com](https://marketsunday.com)**.

Built with [Astro Starlight](https://starlight.astro.build). Git is the CMS:
every page is a Markdown file under `src/content/docs/` — commit and push to
publish.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
```

Requires Node 22+.

## Structure

```
src/content/docs/
  index.mdx                 # landing page (splash)
  work-orders/              # one directory per plugin — add more as they ship
    index.md                # overview
    getting-started.md
    recipes.mdx             # uses <CraftingGrid>
    jobs/*.md               # one page per job
    ...
src/components/CraftingGrid.astro   # 3x3 crafting-table figure
src/styles/theme.css                # the "Copper Almanac" brand theme
```

New pages must be added to the `sidebar` in `astro.config.mjs`.

## Deploy

Deployed on the briccs Coolify hub as a Dockerfile app (static build served by
nginx). Push to `main`, then trigger a deploy:

```bash
ssh briccs 'curl -s -X POST -H "Authorization: Bearer $(cat ~/.coolify-deploy-token)" \
  "http://localhost:8000/api/v1/deploy?uuid=<app-uuid>"'
```

Content accuracy note: mechanics documented here are verified against the
Work Orders plugin source (`work-orders` repo) and its default `config.yml` —
keep it that way when editing.
