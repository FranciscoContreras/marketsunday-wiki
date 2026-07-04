---
title: "Farmhand"
description: "Meet the Farmhand: a copper golem that harvests ripe crops and replants them on the spot, no chests required."
---

The Farmhand is the crop-tending job. Hand this order to a copper golem and it patrols the field around it, harvesting each crop the moment it ripens and replanting the same crop on the spot. It is the only job that needs no containers at all.

## Hiring a Farmhand

1. Craft a **Farmhand Work Order**: copper ingots, paper, and an iron hoe <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/iron_hoe.png" alt="Iron Hoe" width="22">. The full grid is on the [Recipes](/work-orders/recipes/) page.
2. Right-click a copper golem while holding the order. The golem takes it and a copper nameplate appears: "✦ Farmhand". It carries no visible hoe; the nameplate is its uniform.
3. Walk away. Other jobs ask you to tap chests for a route; the Farmhand binds nothing and works the land where it stands.

## How it tends

| Fact | Detail |
| --- | --- |
| Working radius | 8 blocks (your server can raise it, up to 48) |
| At radius 24 | one golem covers about a 49×49 field |
| Containers to bind | none |
| Status while working | "tending crops" |

The golem harvests mature crops and replants the same crop in the same motion, so the soil never sits bare. The produce drops on the ground as if you had broken the crop yourself, and the Farmhand leaves it lying there.

Right-click the golem with an empty hand to check on it. "tending crops" means all is well. "stuck - can't reach" means fences, trenches, or a missing bridge stand between it and a crop; clear a path and it carries on.

## Collecting the harvest

Something has to pick those drops up:

- A [Janitor](/work-orders/jobs/janitor/) parked in the field vacuums nearby drops and banks them in its chest. Two golems, one hands-off farm.
- Plain hoppers work too, if you would rather not hire a second pair of hands.

## Build idea: the self-running wheat farm

1. **Farmhand** in the middle of the wheat field <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/wheat.png" alt="Wheat" width="22">. It harvests and replants.
2. **[Janitor](/work-orders/jobs/janitor/)** beside it, bound to a collection chest. It sweeps the wheat off the ground.
3. **[Restocker](/work-orders/jobs/restocker/)** from that chest to the bakery barrel, [filtered](/work-orders/routes-and-filters/) to wheat. It keeps the barrel topped up to 64.

Bread for the whole village, and all you did was hire three of the copper folk.

:::note
Golems work only while a player is within 64 blocks. With nobody around, the farm pauses. There is no offline harvest.
:::

:::tip
A Farmhand stands in the weather all day. Wax it with a honeycomb <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/honeycomb.png" alt="Honeycomb" width="22"> so it never freezes into a statue mid-field. More in [Golem Care](/work-orders/golem-care/).
:::
