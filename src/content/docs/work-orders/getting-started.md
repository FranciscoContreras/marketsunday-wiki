---
title: "Getting Started"
description: "Turn a copper golem into your first Courier: craft a Work Order, tap two chests, and watch it haul. A five-minute first-job tutorial."
---

One golem, two chests, about five minutes. By the end of this page your first copper golem will be hauling items across your base while you stand back and watch. You'll use the Courier, the plainest of the [six jobs](/work-orders/jobs/courier/) and the best one to learn on.

## What you'll need

| Gather this | For |
|---|---|
| A block of copper and a carved pumpkin <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/block/carved_pumpkin.png" alt="Carved Pumpkin" width="22"> | Building the golem |
| 5 copper ingots <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/copper_ingot.png" alt="Copper Ingot" width="22">, 1 paper <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/paper.png" alt="Paper" width="22">, 1 hopper <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/hopper.png" alt="Hopper" width="22"> | Crafting the Courier Work Order |
| Two chests, placed where you want the route | The pickup and the drop-off |

## Your first Courier

### 1. Build the golem

Place a carved pumpkin on a block of copper. That part is vanilla Minecraft; the little worker that hops out is a copper golem, and the plugin is about to give it a career.

### 2. Craft a Courier Work Order

A Work Order is a special piece of paper that carries a job. For the Courier, arrange copper ingots as a frame around a sheet of paper and a hopper. The exact grid, and the orders for the other five jobs, live on the [Recipes](/work-orders/recipes/) page.

### 3. Hand it over

Hold the order and right-click your golem. The golem accepts the job, the paper vanishes from your hand, and a floating copper nameplate appears over its head: **✦ Courier**. Golems never hold a visible tool for their job; the nameplate is the uniform. Name one with a name tag and the plate folds it in, reading "Clank · ✦ Courier".

If nothing happens, your server may restrict certain jobs; ask a staff member.

### 4. Tap out the route

Accepting a job opens a 30-second window for setting the route. A tap is a right-click:

1. Tap the chest the golem should take items **from**. That's the pickup.
2. Tap the chest it should carry them **to**. That's the drop-off.

The golem talks you through both steps in the action bar, in its own voice. Chests, barrels, furnaces, hoppers and the like all count as containers; each must sit in the same world and within 48 blocks of the golem on a default server.

Missed the window? The golem waits with "needs a route". Hand it another Courier Work Order to reopen the route setup.

### 5. Watch it work

Drop a few stacks in the pickup chest and step back. The Courier walks over, scoops up to 16 items of one type, carries them in hand for all to see, and delivers them to the drop-off. Then it turns around and does it again.

Every transfer is a real move: the plugin never duplicates an item and never voids one. If the drop-off fills up, the golem holds its cargo and retries; on a haul, anything that doesn't fit goes back to the pickup.

:::note
Golems work while a player is within 64 blocks of them or their containers. Wander off and yours will pause until somebody returns. No items move while the area is empty.
:::

### 6. Check in

Right-click the golem with an empty hand. The action bar answers with **Job │ status │ oxidation**. "hauling" means all is well. "drop-off full" means empty that chest. "stuck - can't reach" means it failed to path a few times; look for a blocked walkway or a missing bridge.

:::tip
Copper golems oxidize like any copper, and a fully oxidized golem freezes into a statue. Wax yours with a honeycomb <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/honeycomb.png" alt="Honeycomb" width="22"> to stop oxidation for good. More in [Golem Care](/work-orders/golem-care/).
:::

## Level up

- **Filters.** Teach your Courier to carry some items and ignore the rest: sneak + right-click it while holding another Courier order to open the filter editor. Sneaking matters here; a plain right-click with an order re-assigns the job and clears the route. Details in [Routes & Filters](/work-orders/routes-and-filters/).
- **More jobs.** The [Stoker](/work-orders/jobs/stoker/) feeds furnaces, the [Restocker](/work-orders/jobs/restocker/) keeps a chest topped up, the [Janitor](/work-orders/jobs/janitor/) sweeps up drops, the [Sorter](/work-orders/jobs/sorter/) files one chest into many, and the [Farmhand](/work-orders/jobs/farmhand/) tends crops.
- **The whistle.** Sneak + right-click the air while holding a copper ingot <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/copper_ingot.png" alt="Copper Ingot" width="22"> and all your copper folk within 48 blocks glow and come to heel. Whistle again to send them back to work. See [Golem Care](/work-orders/golem-care/).
