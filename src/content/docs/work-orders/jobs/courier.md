---
title: "Courier"
description: "Set a pickup and a drop-off and the Courier hauls between them: 16 items a trip, filter-aware, and nothing ever lost in transit."
---

The Courier is the hauling job: give it a pickup and a drop-off and it walks items between them for as long as there is work. Where a hopper line needs a trench and a stack of iron, one of the copper folk needs a route and something to carry.

## Setting the route

1. Craft a Courier Work Order <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/paper.png" alt="Work Order" width="22"> (a hopper <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/hopper.png" alt="Hopper" width="22"> sits at the heart of the [recipe](/work-orders/recipes/)) and right-click your copper golem while holding it. The order is consumed and the nameplate reads "✦ Courier".
2. Within 30 seconds, tap (right-click) the container it should take from. That is the pickup.
3. Tap the container it should deliver to. That is the drop-off. The action bar guides each step.

Both containers must be within 48 blocks of the golem (your server may adjust this) and in the same world. Chests, barrels, furnaces, brewing stands and hoppers all count.

## How it thinks

| Habit | Detail |
|---|---|
| Trip size | Up to 16 items per trip (server-configurable) |
| Cargo | One item type at a time, carried visibly in hand |
| Filter | An empty filter moves everything |
| Leftovers | Whatever the drop-off can't take goes back to the pickup |

Every trip is a real move: items are never duplicated, never voided. To narrow what it hauls, give it a [filter](/work-orders/routes-and-filters/) of up to 7 item types, whitelist or blacklist.

:::caution
Open the filter editor by sneak + right-clicking the golem while holding another Courier Work Order. A plain right-click with that order re-assigns the job and wipes the route.
:::

## Build ideas

- **Mob farm to storage.** Pickup on the farm's collection chest, drop-off in your storage room. Add a [Sorter](/work-orders/jobs/sorter/) at the far end and the loot files itself.
- **Furnace output to storage.** Pickup on the furnace, drop-off on a barrel. Pair it with a [Stoker](/work-orders/jobs/stoker/) feeding that same furnace and the smeltery runs hands-free.
- **Brewing supply line.** Pickup on your supply chest, drop-off on a brewing stand. Blaze powder <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/blaze_powder.png" alt="Blaze Powder" width="22"> lands in the fuel slot. (The Stoker won't serve brewing stands; this is Courier work.)

## If it stops moving

Right-click the golem empty-handed to read its status. "drop-off full" means it is holding the cargo and retrying until space opens. "stuck - can't reach" means the path is blocked. "needs a route" means a bound container was broken; hand it a matching Work Order to reopen the route setup.

:::note
More fixes, including hibernation (golems pause when no player is within 64 blocks of them or their containers), live in the [FAQ](/work-orders/faq/).
:::
