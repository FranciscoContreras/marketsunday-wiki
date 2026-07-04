---
title: "Restocker"
description: "Keep any chest topped up to a target amount — the Restocker counts what's there and hauls only the shortfall, never a stack more."
---

The Restocker is the top-it-up job. Give it a supply chest and a chest you want kept full, and it holds that second chest at a target amount — a full stack of 64 of the filtered items by default (your server can change the number). It counts what's already there and pulls only the difference, so it never overshoots. Perfect for anything the whole server dips into.

## Give a golem the job

1. Craft a Restocker Work Order <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/paper.png" alt="Work Order" width="22"> — see [Recipes](/work-orders/recipes/).
2. Right-click a copper golem while holding it. The order is consumed, and the nameplate flips to "✦ Restocker".
3. You have 30 seconds to set the route: tap the **supply chest** first (the pickup), then tap the **chest to keep stocked** (the drop-off). The action bar walks you through it.

Both containers must be within 48 blocks of the golem and in the same world.

## How it tops up

On every pass the golem counts the filtered items in the drop-off. At or above the target, it does nothing. Below it, it fetches only the shortfall from the supply — up to 16 items per trip — until the count sits at the target again. The rest of the supply stays put, so a generous donation never floods the barrel.

## What counts: the filter

The filter decides what the Restocker counts and carries. **Sneak + right-click** the golem while holding another Restocker Work Order to open the filter panel: up to 7 item types, a whitelist/blacklist toggle, ghost copies only — nothing is taken from you. Details in [Routes & Filters](/work-orders/routes-and-filters/).

An empty filter matches everything, which is fine for a single-purpose barrel. For mixed chests, set at least one item so the golem knows what "full" means.

:::caution
Hold that Work Order **without** sneaking and you'll re-assign the job instead — which clears the route. Sneak first.
:::

## Build ideas

| Build | Route |
|---|---|
| Shop stock | Back-room chest → display chest, filtered to what you sell |
| Community bread barrel <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/bread.png" alt="Bread" width="22"> | Bakery output → barrel by spawn, filtered to bread |
| Archery range chest <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/arrow.png" alt="Arrow" width="22"> | Fletching supply → chest at the range, filtered to arrows |

:::note
If a bound chest gets broken, the golem forgets that stop and waits with "needs a route" — hand it a matching Work Order to reopen the route setup. And like all the copper folk, it only works while a player is within 64 blocks of it or its chests.
:::

Want a golem that simply moves everything from A to B instead? That's the [Courier](/work-orders/jobs/courier/).
