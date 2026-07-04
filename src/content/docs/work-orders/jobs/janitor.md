---
title: "Janitor"
description: "The tidy-up job: bind one chest and your copper golem vacuums dropped items off mob farm floors, wheat fields, and spawn plazas."
---

Arrows under the mob grinder, seeds scattered across the field, cobble somebody dropped at spawn. The Janitor is the job for all of it. Alone among the six jobs, it watches the ground instead of a container: it vacuums up dropped items near itself and banks them in the one chest you bind.

## What it does

| Trait | Detail |
|-------|--------|
| Watches | Dropped items within 8 blocks of itself (your server can raise this as high as 48) |
| Carries | One dropped stack at a time, visible in its hands |
| Route | A single chest, drop-off only |
| Nameplate | ✦ Janitor |

If the chest is full, the golem keeps holding its load and shows "drop-off full" until space opens up. Items are never voided and never duplicated; if the golem dies while carrying, the cargo drops where it fell.

## Give a golem the job

1. Craft a Janitor Work Order, the one with the <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/brush.png" alt="Brush" width="22"> brush. See [Recipes](/work-orders/recipes/).
2. Hold it and right-click a copper golem. The golem accepts the job and the order is consumed.
3. A 30-second bind window opens. Tap (right-click) the chest where it should bank its finds. That completes the route: unlike a [Courier](/work-orders/jobs/courier/), there is no pickup to bind. The ground is the pickup.

The chest must be within 48 blocks of the golem and in the same world. If the chest is ever broken, the golem forgets that stop and waits with "needs a route". Hand it a matching Work Order to reopen the route setup. More on binding lives in [Routes & Filters](/work-orders/routes-and-filters/).

## Build ideas

- **Mob farm floor.** Park a Janitor at the kill spot, bind a chest around the corner, and it sweeps the loot into storage before anything despawns.
- **Farmhand's partner.** A [Farmhand](/work-orders/jobs/farmhand/)'s harvest drops on the ground exactly like a player harvest. Stand a Janitor in the same field and the wheat lands in a chest instead of the dirt.
- **Spawn plaza.** One tidy soul among the copper folk, keeping the market square clear of dropped junk.

:::tip
Right-click the golem with an empty hand to check on it. "tidying up" means all is well; "stuck - can't reach" means something is blocking its path to the chest.
:::

:::note
A Janitor only works while a player is within about 64 blocks of it or its chest. With nobody around it pauses, so it adds no lag, and there is no offline vacuuming.
:::
