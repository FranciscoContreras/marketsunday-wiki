---
title: "Stoker"
description: "Bind a Stoker between a supply chest and any furnace — it feeds fuel and smeltables into the right slots, and never jams the wrong item."
---

The Stoker is the furnace-feeder among the copper folk. Bind one between a supply chest and a furnace, and it keeps the fire going — fuel into the fuel slot, smeltables into the input, up to 16 items a trip.

## What a Stoker does

A Stoker's drop-off must be a **furnace**, **blast furnace**, or **smoker** — nothing else counts. From its pickup it takes only what that particular furnace can use, so a Stoker bound to a smoker leaves the iron ore in the chest, and one bound to a blast furnace ignores the raw chicken. It never crams the wrong item into a furnace.

There's no filter to set on a Stoker — the furnace itself decides what moves.

| Drop-off | The Stoker feeds it |
|---|---|
| <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/block/furnace_front.png" alt="Furnace" width="22"> Furnace | any smeltable, plus fuel |
| <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/block/blast_furnace_front.png" alt="Blast Furnace" width="22"> Blast furnace | ores and metal gear, plus fuel |
| <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/block/smoker_front.png" alt="Smoker" width="22"> Smoker | raw food, plus fuel |

## Setting the route

1. Craft a **Stoker Work Order** — copper ingots, paper, and a furnace ([recipes](/work-orders/recipes/)).
2. Right-click your copper golem while holding it. The order is consumed.
3. Within 30 seconds, tap your supply chest to set the **pickup**, then tap the furnace to set the **drop-off**. The action bar walks you through each step. Both stops must be within 48 blocks of the golem, in the same world.

If the chest or furnace is ever broken, the golem forgets that stop and waits with "needs a route" — hand it a matching Work Order to reopen the route setup.

:::note
Brewing stands are **not** a Stoker target. A [Courier](/work-orders/jobs/courier/) can deliver to one, though — blaze powder lands in the fuel slot.
:::

## Build ideas

**Super-smelter bank.** One big chest of <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/coal.png" alt="Coal" width="22"> coal and <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/raw_iron.png" alt="Raw Iron" width="22"> raw ore, a row of furnaces, and one Stoker per furnace — all sharing that same chest. Each golem pulls exactly what its own furnace needs.

**Smoker kitchen.** A chest of raw food and fuel beside a smoker keeps dinner rolling. A [Farmhand](/work-orders/jobs/farmhand/) and [Janitor](/work-orders/jobs/janitor/) upstream can fill that chest for you.

## Getting the goods out

A Stoker only feeds the furnace — it never pulls the finished ingots and steaks. That's a Courier's job: bind a Courier **from** the furnace to an output chest, and the two golems make a complete smelting line.

:::tip
Nothing is ever lost along the way. If the furnace can't take more, the Stoker holds its cargo and retries; whatever doesn't fit goes back to the pickup.
:::
