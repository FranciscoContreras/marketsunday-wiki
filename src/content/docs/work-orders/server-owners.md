---
title: "For Server Owners"
description: "Install Work Orders in one drop, then tune radii, recipes, permissions, and performance from a single config.yml."
---

Work Orders is deliberately boring to run: one jar, one config file, one admin
command, no database. This page is the operator's tour — everything players do
is covered in the rest of the [Work Orders guides](/work-orders/).

## Installation

1. Drop `WorkOrders-<version>.jar` into `plugins/` and restart.
2. That's it. The plugin targets **Paper or Purpur 1.21.11+** (listed compatible
   through 26.1.x) and is **server-side only** — players install nothing.
3. Optional soft-dependencies, used only if present: **PlaceholderAPI** and **Vault**.

## The admin command

One command, `/workorders` (alias `/wo`), behind `workorders.admin` (default: op):

| Subcommand | What it does |
|---|---|
| `reload` | Re-reads `config.yml` and `messages.yml` and re-registers the Work Order recipes — cost changes apply live. |
| `status` | Reports tracked golems, tick timing, active radii, and the native-sort suppression mode. |
| `spike` | Dumps a nearby golem's native AI goals to the console — a diagnostic for the vanilla sorting brain (see below). |

## Permissions

| Node | Default | Grants |
|---|---|---|
| `workorders.job.courier` … `.stoker` `.restocker` `.janitor` `.sorter` `.farmhand` | `true` | Assigning that job |
| `workorders.admin` | op | Everything: bypasses ownership and job gating |

Per-job gating is controlled by `gating.require-permission` (default `true`).
Map the job nodes to ranks in your permissions plugin, or set the flag to
`false` to open all six jobs to everyone.

## config.yml walkthrough

All numeric values are clamped to safe ranges at load — a bad value logs a
warning and falls back rather than failing the boot.

### settings — the work scheduler

| Key | Default | Meaning |
|---|---|---|
| `service-interval-ticks` | `10` | How often the scheduler fires (10 = twice a second). |
| `slices` | `4` | Golems are processed in this many rotating groups — per-tick cost stays flat as the workforce grows. |
| `active-radius` | `64.0` | A golem works only while a player is within this many blocks of it **or its bound containers**; otherwise it hibernates. This is both the performance lever and the economy guard: no offline item flow. |
| `range-cap` | `48.0` | Max golem-to-container binding distance (hard-capped at 64). |
| `move-speed` | `1.0` | Pathfinding speed multiplier. |
| `pull-batch` | `16` | Items carried per trip (vanilla golem cadence is 16). |
| `path-fail-grace` | `3` | Failed pathing attempts before a golem reports "stuck". |
| `bind-session-ttl-ticks` | `600` | How long the tap-to-route window stays open (600 = 30s). |

### ownership — who may do what

| Key | Default | Meaning |
|---|---|---|
| `trusted-only-retask` | `true` | Only the owner (first tasker) and their trusted players may re-task a golem. |
| `wax-anyone` | `true` | Anyone may honeycomb-wax a golem, mirroring vanilla. |
| `whistle-enabled` / `whistle-item` / `whistle-radius` / `whistle-glow-seconds` | `true` / `COPPER_INGOT` / `48.0` / `4` | The group recall gesture (sneak + right-click air). |
| `follow-max-distance` / `follow-stop-distance` | `18.0` / `3.0` | Heel behavior; a golem past max quietly teleports behind its owner and walks in. |
| `consume-role-item` | `false` | Applies **only** to the optional plain-item mapping under `roles:` below — crafted Work Orders are always consumed on assignment. |

### native-ai — the important one

`suppress-native-sort: auto` (default) disables native item pickup on managed
golems. The vanilla copper-golem sorting brain **cannot be removed through the
API** — so Work Orders starves it instead. This keeps working golems from
wandering off to copper chests mid-route and closes the item-duplication path
that a held item near copper chests can open. Set `off` to leave vanilla
pickup fully alone. `/workorders spike` shows you the goal list if you want the
ground truth on your build.

### roles — the no-crafting escape hatch

`roles: {}` ships empty. It optionally maps plain vanilla items to jobs
(e.g. `courier: [HOPPER_MINECART]`) for testing or servers that want
assignment without crafting. Crafted Work Orders are the intended path.

### work-orders — recipe costs

Every Work Order is a **shaped recipe you fully control**: up to three shape
rows, an ingredient map per symbol, and an optional `model`
(`custom_model_data`) for resource-pack textures. The default frame is
`" C " / "CPC" / "CTC"` — five copper ingots and a paper around the job's tool
(hopper, furnace, barrel, brush, comparator, iron hoe). Edit costs freely and
`/workorders reload` — the recipe book updates live.

### Per-job tunables

| Key | Default | Notes |
|---|---|---|
| `restocker.default-threshold` | `64` | "Top up to N" when a Restocker has no explicit threshold. |
| `janitor.radius` | `8` | Vacuum radius, capped at 48. The Janitor is the **only** job that scans entities. |
| `farmhand.radius` | `8` | Crop radius, capped at 48 — radius 24 covers roughly a 49×49 field. |
| `oxidation.efficiency-scales-with-oxidation` | `false` | When on: exposed golems work every 2nd cycle, weathered every 3rd. |

### feedback — how loud the plugin is

`intensity: off | subtle | normal | lively` scales all particles and sounds
(`off` silences the plugin entirely). Individual switches: `sounds`,
`actionbar` (+ `actionbar-hold-seconds`, default 4 — the line is re-sent each
tick so mob-health plugins can't stomp it), `nameplate` (the floating
"✦ Courier"), `frozen-glow` (marks fully-oxidized statues), `sluggish-fx`, and
`bring-flower` (the occasional gift to the owner).

## Performance notes

The plugin is designed to be a rounding error on your timings:

- Work is **sliced** across rotating golem groups — cost per tick stays bounded regardless of golem count.
- **Hibernation** gates everything on player proximity (`active-radius`); unloaded or unobserved golems cost nothing and move nothing.
- The **Janitor** is the only job that scans entities, in a small capped radius, and only when players are near.
- The **Farmhand** caches its crop target instead of rescanning the field while walking.

## Data model

A golem's job, route, owner, and filter ride on the golem entity itself — no
database, no flat files, nothing to back up separately. Capture a golem with a
spawn egg and release it elsewhere: it remembers its job. Kill it and any
carried items drop where it stood.

## Rebranding

Every player-facing string lives in `messages.yml` as editable MiniMessage —
the red ✦, the copper gradient, the golem's first-person voice are all yours
to restyle for your server.
