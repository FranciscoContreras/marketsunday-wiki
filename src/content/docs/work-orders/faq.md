---
title: "FAQ & Troubleshooting"
description: "What every golem status means and how to fix it, plus quick answers on hibernation, item safety, ownership, and stuck or stubborn golems."
---

Right-click a golem with an empty hand and the action bar answers back: job, status, and oxidation stage. This page decodes each status word, then answers the questions we hear most.

## Status glossary

| Status | What it means | What to do |
|---|---|---|
| `hauling` | Carrying cargo between its pickup and drop-off. | Nothing. It is on the job. |
| `tidying up` | A Janitor is sweeping up drops or banking them in its chest. | Nothing. |
| `tending crops` | A Farmhand is harvesting and replanting around itself. | Nothing. |
| `stuck - can't reach` | About 3 failed attempts to walk to a target, usually a blocked doorway or a missing bridge. | Clear the path. The golem retries on its own. |
| `drop-off full` | The destination has no room, so the golem holds the cargo and retries. | Make space in the drop-off container. |
| `needs a route` | A bound container was broken; the golem forgot that stop and is waiting. | Hand it a matching Work Order to reopen the route setup. |
| `idle` | No work at the moment: empty pickup, clean floor, or no ripe crops. | Nothing, unless you expected work. Then check the pickup. |

## Frequently asked questions

### Why did my golem stop working?

Check four things, in order:

1. **Is anyone nearby?** A golem only works while a player is within 64 blocks of it or of its bound containers. No player nearby means it hibernates; that is not a bug.
2. **Has it oxidized?** A fully oxidized golem is a frozen statue, same as vanilla. The plugin makes frozen golems glow so you can find them. Scrape with an axe, then wax with a honeycomb <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/honeycomb.png" alt="Honeycomb" width="22">. See [Golem Care](/work-orders/golem-care/).
3. **Is it on a lead or in a boat?** Leashed and riding golems pause their work.
4. **Did a chest break?** Inspect it. `needs a route` means a bound container is gone; hand the golem a matching Work Order to reopen the route setup.

### Does it work while I'm offline?

No, by design. A golem needs a player within 64 blocks of it or its containers, so when the last player logs off, the copper folk down tools too. Nobody gets an all-night head start on their neighbors, and the server spends nothing on empty chunks.

### Are my items safe?

Yes. Every transfer is a real move: items are never duplicated and never voided. If the drop-off is full, the golem keeps holding the cargo and retries. While hauling, whatever does not fit goes back to the pickup. If a golem dies mid-carry, the items drop on the ground where it fell.

### Why won't my Sorter pick things up?

A Sorter only lifts an item when some destination chest already contains that item type. Seed the chests: place one of each item where it belongs, and the Sorter treats that as the address. Anything with no home stays in the source. Details on the [Sorter page](/work-orders/jobs/sorter/).

### Why won't my Stoker take this?

The [Stoker](/work-orders/jobs/stoker/) takes from the pickup only what its furnace can use: fuel for the fuel slot, smeltable items for the input slot. If it leaves something behind, that furnace, blast furnace, or smoker has no use for it. It will never cram the wrong item in.

### Who can change my golem's job?

The first player to give a golem a job owns it, and by default only the owner and trusted players can re-task or manage it. To trust a friend, the owner right-clicks the golem while holding that player's head; the same gesture turns trust off again. Admins bypass ownership.

:::caution
Handing a working golem a Work Order re-assigns its job and clears its route. To open the filter editor instead, **sneak** while holding a Work Order of the same job. See [Routes & Filters](/work-orders/routes-and-filters/).
:::

### Can I rename my golem?

Yes, with an ordinary name tag <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/name_tag.png" alt="Name Tag" width="22">. The name folds into the floating nameplate, so "✦ Courier" becomes "Beatriz · ✦ Courier". Golems never hold a visible job tool; the nameplate is the uniform.

### My golem says it's stuck

`stuck - can't reach` appears after about 3 failed attempts to walk to a target. Walk the route yourself and look for a shut door or a gap in the walkway. Once the path is open, the golem resumes on its own.

### How do I move a golem far away?

1. **Follow mode.** Sneak + right-click the golem with an empty hand. It trails about 3 blocks behind you and quietly teleports to catch up if it falls more than 18 blocks back. Toggle again to send it back to work.
2. **Whistle.** Sneak + right-click the air while holding a copper ingot <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/copper_ingot.png" alt="Copper Ingot" width="22">. All your golems within 48 blocks glow for a few seconds and come to heel. Whistle again to send them back.
3. **A lead** works too, though a leashed golem pauses its job until you unclip it.

### It's ignoring items on the ground

Ground pickup belongs to the [Janitor](/work-orders/jobs/janitor/) alone. On working golems the plugin disables native item pickup, so a Courier walks past dropped cobblestone instead of wandering off with it. If you want the floor swept, hire a Janitor.

:::tip
Pair a Farmhand with a Janitor: the Farmhand's harvest drops on the ground like a player's would, and the Janitor banks it in a chest.
:::
