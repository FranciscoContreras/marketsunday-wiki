---
title: "Sorter"
description: "Teach the Sorter where things belong with one seeded item, and it files a messy drop-off chest into a whole hall of labeled storage."
---

The Sorter is the warehouse job. You dump everything into one chest; the Sorter carries each item off to the chest where it belongs. The only trick is teaching it what "belongs" means — and that takes exactly one item.

## At a glance

| | |
|---|---|
| Work Order tool | <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/comparator.png" alt="Comparator" width="22"> Comparator |
| Source | One chest or barrel |
| Destinations | As many chests as you like |
| Carries | Up to 16 items per trip, one type at a time |
| Reach | Containers within 48 blocks of the golem |

## Giving out the job

1. Craft a Sorter Work Order — <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/paper.png" alt="Paper" width="22"> paper folded up with copper and a comparator (see [Recipes](/work-orders/recipes/)).
2. Right-click a copper golem while holding it. The order is consumed, and the golem's nameplate flips to "✦ Sorter".

## Setting the route

A 30-second bind window opens, and the golem's own action-bar messages walk you through each tap:

1. Tap (right-click) the **source** — the chest everything gets dumped into.
2. Tap **each destination** chest, as many as you like.
3. Tap the **golem** with an empty hand to finish.

If one of its chests is ever broken, the golem forgets that stop and waits with "needs a route" — hand it a fresh Sorter Work Order to reopen the route setup. More detail in [Routes & Filters](/work-orders/routes-and-filters/).

## Seed the chest

The Sorter never guesses. It only picks up an item when some destination **already contains that item type**, and that is exactly where it delivers it. Anything with no home simply stays in the source — nothing gets misfiled, nothing gets lost.

:::tip[Teaching takes one item]
Walk your row of destination chests and place a single item of each type in the chest where that type belongs. One cobblestone in the stone chest, one oak log in the wood chest. From then on, the Sorter files everything that matches.
:::

:::caution[Use a plain chest as the source]
Make the source a regular chest or barrel — not a copper chest. Copper chests are what *vanilla* copper golems fight over, and you want your drop-off left alone.
:::

## Build idea: the chest hall

Put one drop-off chest by your base entrance and a hall of seeded chests behind it — ores here, food there, redstone down the end. Come home, empty your whole inventory into the one chest, and let the copper folk do the filing. A [Janitor](/work-orders/jobs/janitor/) banking into that same source chest turns it into a lost-and-found for anything dropped nearby. Keep every chest within 48 blocks of the golem, and remember it only works while someone is close by — see [Golem Care](/work-orders/golem-care/).
