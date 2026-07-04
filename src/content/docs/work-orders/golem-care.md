---
title: "Golem Care"
description: "Keep your copper workers bright and biddable: oxidation and waxing, the whistle, heel mode, trust, and what happens if a golem dies on the job."
---

Copper folk are sturdy hires, but they still weather, wander out of sight, and answer to whoever first put them to work. This page covers the upkeep side: reading a golem, managing oxidation, calling workers back, and deciding who may boss them around.

## Checking on a golem

Right-click a golem with an empty hand and the action bar shows its readout: **Job │ status │ oxidation**. Status comes in plain words: "hauling", "tidying up", "tending crops", "idle", "needs a route", "drop-off full", or "stuck - can't reach" (that last one appears after about three failed tries to path somewhere, so go look for the missing bridge). [Routes & Filters](/work-orders/routes-and-filters/) explains how to repair a broken route; the [FAQ](/work-orders/faq/) covers the odder statuses.

A working golem wears a floating copper nameplate such as ✦ Courier instead of holding a tool. Rename it with a <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/name_tag.png" alt="Name Tag" width="22"> name tag and the name folds in: "Clank · ✦ Courier".

## Oxidation

Golems weather like any copper: unaffected, then exposed, then weathered, then oxidized. A fully oxidized golem freezes into a statue, per vanilla. Work Orders makes frozen golems glow, so a worker that seized up behind the wheat field is easy to find and revive.

Two tools keep the patina in check:

- <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/honeycomb.png" alt="Honeycomb" width="22"> **Wax.** Right-click with a honeycomb to stop oxidation for good. By default anyone on the server can wax a golem, owner or not.
- <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/iron_axe.png" alt="Axe" width="22"> **Scrape.** An axe removes oxidation one stage at a time, same as any copper block.

:::tip
Wax a golem the day you hire it and oxidation never crosses your mind again.
:::

:::note
Servers can turn on a rule that slows weathered workers: an exposed golem works every 2nd cycle, a weathered one every 3rd. This is off by default, so on most servers a green golem works at full speed right up until it freezes.
:::

## Calling workers back

### Heel, for one golem

Sneak and right-click a golem with an empty hand to toggle follow. It trails you, stopping about 3 blocks away; if you leave it more than about 18 blocks behind, it slips to a spot behind you and walks the rest. Following pauses its job, so sneak-click again to send it back to work.

### The whistle, for all of them

Hold a <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/copper_ingot.png" alt="Copper Ingot" width="22"> copper ingot, sneak, and right-click the air. Every golem you own within 48 blocks glows for a few seconds and comes to heel. Whistle again and they all return to their jobs. Good for headcounts, moving day, and clearing the floor before you rebuild the sorting hall.

## Ownership and trust

The first player to give a golem a job owns it. By default only the owner and trusted players can re-task or manage it; admins bypass ownership.

To trust a friend, hold that player's head and right-click the golem. The same gesture removes trust again.

## When a golem dies

Whatever it was carrying drops on the ground where it fell. The plugin never duplicates or voids items, so a fallen courier's cargo is on the floor waiting for you, not gone.

## The flower

After finishing a big batch of work, a golem sometimes brings its owner a flower. No buff attached. It is a gift; take the flower.

## Vanilla habits that still work

Managed golems are still vanilla mobs, so the familiar tools behave:

| Item | On a working golem |
| --- | --- |
| <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/name_tag.png" alt="Name Tag" width="22"> Name tag | Names it; the name folds into the job nameplate |
| <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/lead.png" alt="Lead" width="22"> Lead | Works as usual; a leashed golem pauses its work |
| <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/honeycomb.png" alt="Honeycomb" width="22"> Honeycomb | Waxes it; oxidation stops for good |
| <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/iron_axe.png" alt="Axe" width="22"> Axe | Scrapes off one oxidation stage |
| <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/shears.png" alt="Shears" width="22"> Shears | Vanilla behavior, unchanged |

A golem riding in a boat or minecart also pauses its work until you let it out.
