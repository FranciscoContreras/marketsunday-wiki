---
title: "Routes & Filters"
description: "How to bind a golem's pickup and drop-off in the 30-second window, plus the item filters that Couriers and Restockers obey."
---

A Work Order gives a golem its job. The route tells it where the goods flow, and a filter, for the two jobs that use one, narrows what it will carry. Both take seconds to set up, and both reward doing it right the first time.

## Setting a route

The moment a golem accepts a [Work Order](/work-orders/recipes/) <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/paper.png" alt="Work Order" width="22">, a 30-second bind window opens. The copper folk are polite about it: the action bar walks you through each step in the golem's own voice.

For most jobs, binding takes two taps:

1. **Tap the pickup.** Right-click the container the golem should draw from.
2. **Tap the drop-off.** Right-click the container it should deliver to.

### Stops by job

The two-tap pattern covers three of the six jobs. The rest bend it:

| Job | Taps | How it goes |
|-----|------|-------------|
| <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/hopper.png" alt="Hopper" width="22"> [Courier](/work-orders/jobs/courier/) | Two | Pickup, then drop-off |
| <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/block/furnace_front.png" alt="Furnace" width="22"> [Stoker](/work-orders/jobs/stoker/) | Two | Pickup, then a furnace, blast furnace, or smoker |
| <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/block/barrel_side.png" alt="Barrel" width="22"> [Restocker](/work-orders/jobs/restocker/) | Two | Pickup, then the chest it keeps stocked |
| <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/brush.png" alt="Brush" width="22"> [Janitor](/work-orders/jobs/janitor/) | One | Only the chest where it banks what it collects |
| <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/comparator.png" alt="Comparator" width="22"> [Sorter](/work-orders/jobs/sorter/) | One, then many | Source chest first, then each destination chest (as many as you like), then tap the golem with an empty hand to finish |
| <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/iron_hoe.png" alt="Iron Hoe" width="22"> [Farmhand](/work-orders/jobs/farmhand/) | None | Binds nothing; it works the land around itself |

### Range and what counts

Each stop must sit within 48 blocks of the golem and in the same world. Servers can tune the range, up to a hard cap of 64. Chests, barrels, furnaces, brewing stands, hoppers, and similar blocks all count as containers.

### Lost routes

Break a bound container and the golem forgets that stop; run out the bind window and it never had one. Either way it waits with the status "needs a route". Hand it a matching Work Order to reopen the route setup, then tap fresh stops.

:::note
You can check any golem with an empty-hand right-click. The action bar answers with "Job │ status │ oxidation".
:::

## Filters (Courier and Restocker)

A filter tells a golem which item types to move. Two jobs use one: the [Courier](/work-orders/jobs/courier/), which otherwise hauls whatever the pickup holds, and the [Restocker](/work-orders/jobs/restocker/), whose filter defines which items count toward the amount it keeps topped up. The other four jobs choose their own cargo.

### Opening the editor

Hold a Work Order <img src="https://cdn.jsdelivr.net/gh/misode/mcmeta@assets/assets/minecraft/textures/item/paper.png" alt="Work Order" width="22"> that matches the golem's current job (a Courier order for a Courier), then sneak and right-click the golem.

:::caution
Sneak first. A plain right-click while holding a Work Order re-assigns the job and clears the route you set.
:::

### Inside the editor

The editor is a nine-slot panel: seven filter slots, a whitelist/blacklist toggle, and a Done button. A filter holds up to seven item types.

- **Add a type.** Click an item in your own inventory. The golem takes nothing; the slot fills with a ghost copy.
- **Remove a type.** Click the filled filter slot.
- **Save.** Close the panel, or press Done. Either way, your changes stick.

### Whitelist, blacklist, or nothing at all

| Filter mode | What the golem moves |
|-------------|----------------------|
| Whitelist | Only the listed types |
| Blacklist | Everything except the listed types |
| Empty filter | Everything |

An empty filter is the default, so a fresh Courier hauls anything it can reach. Fill a whitelist when you want one kind of order pulled out of a messy pickup; flip to blacklist when almost everything should flow through and a few types (cobblestone, say) should stay put.

With a route bound and a filter saved, the golem handles the rest of the shift. For what it does once the hauling starts, see its [job page](/work-orders/), and for keeping it shiny and awake, see [Golem Care](/work-orders/golem-care/).
