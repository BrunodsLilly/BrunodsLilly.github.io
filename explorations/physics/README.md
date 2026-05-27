# Physics Simulation

A particle-based physics simulation built with vanilla JS and Canvas.

## Current state

Scaffolding. Nothing renders yet.

Next step: render a static ball on a canvas.

## Intended progression

1. Render a static ball
2. Apply velocity — ball moves
3. Bounce off screen edges
4. Introduce a second ball
5. Configurable timestep (dt)
6. Stress test — many balls, find where things break
7. Observe breakdown, improve integrator
8. Explore further based on what the simulation reveals

## How to run

_Not yet runnable. Will live at `web/apps/physics/index.html`._

## Design decisions

- **Canvas 2D** — WebGL deferred, perf not the point
- **Euler integration** first — feel it break, then improve
- **Logic/rendering split** — integrator in `web/lib/`, renderer in `web/apps/physics/`
- **Linear algebra from scratch** — Vec2 written here, not imported

## Dependencies

- `web/lib/Vec2.mjs` — to be written
- `web/lib/Physics.mjs` — to be written
