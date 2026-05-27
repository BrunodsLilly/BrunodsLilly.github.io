# Principles

## What this is

A playground, a journal, and a launchpad.

Physics simulations, diffeq solvers, DSA implementations, data visualisations,
ML experiments — anything worth programming goes here first. When a project earns
it, it gets its own repo and its own page. This site stays thin.

It is also an empirical record. The code here reflects what I actually understand,
not what a tool produced on my behalf.

---

## The empirical wager

I'm skeptical that AI can write quality code on my behalf without cost.

Not skeptical that it *can* produce code — it clearly can. Skeptical that the
result is actually cheaper than writing it myself once you account for:

- Time spent prompting, correcting, re-prompting
- Reading code you didn't write and building a mental model from scratch
- The gap between a passing test suite and actual comprehension
- Cognitive debt that compounds every time you extend the system

Maybe there's a sweet spot. This repo is partly the experiment that finds it.

---

## Attention is the constraint

I am the runtime. My understanding is the program.

Human attention is the bottleneck for quality code — not syntax, not compute, not
time. A codebase I don't fully understand is a liability regardless of test
coverage. Tests verify behaviour. They don't verify comprehension.

The feeling of reporting work as done without understanding it — even with passing
tests — is a signal that something went wrong upstream.

For throwaway projects, parallel subagents are a reasonable trade. For anything I
have to maintain, extend, or think from, the cost of not understanding it is too
high. Attention spent recovering lost understanding is attention not spent building.

---

## Code as spec

A well-named function with a clear interface needs no accompanying document.
If the code requires a detailed spec to be understood, the code has failed first.

Naming conventions carry the spec:

- Names are imperative and complete: `Physics.Body.applyForce()`, not `apply()`
- The interface describes *what*, the implementation describes *how*
- A reader should understand the contract from the exported surface alone

No comments that restate what the code already says. Comments explain *why*,
not *what*. If the *what* needs explanation, rename it.

---

## JS philosophy

**Namespacing.** No bare names. Every module exposes a namespace:
`DiffEq.euler()`, `Vec2.add()`, `DSA.DynArray.create()`. Names compose and
stay readable at call sites.

**Explicit lifecycle.** Every stateful object has a `create` and a `destroy`.
No hidden allocations inside operations. Ownership is always clear.

**Interfaces before implementations.** Define what a thing *does* before how it
does it. A `Vec2` interface should be satisfiable by a Float32Array, two plain
numbers, or a plain object — the simulation shouldn't care.

**Separate logic from rendering.** A diffeq solver is pure math. A canvas
renderer consumes it. These are different things and live in different files.
Pure logic can be tested in Node. Renderers are tested by looking at them.

**No hidden state.** A function's behaviour should be visible in its signature.
Side effects are explicit. Global state is a bug waiting to be filed.

**No frameworks.** Vanilla JS, CSS, HTML. Frameworks abstract away the medium.
The medium is part of what's being learned here.

---

## On libraries

Write the interesting code yourself. Use a library only when it's the medium,
not the answer.

A linear algebra library would rob you of the interesting part. ThreeJS or p5.js
are rendering runtimes — the canvas is not the point, what runs on it is.
These are reasonable exceptions. A physics engine would not be.

---

## On complexity

JS performance is not the point. DSA is.

When implementing a data structure or algorithm, time and space complexity matter.
Think before coding. Know the complexity of what you're writing before you write it.
A correct O(n²) solution is fine to ship clearly labelled. Pretending it's
O(n log n) is not.

Physics and simulations: correctness before elegance, elegance before performance.

---

## Testing

Pure logic — diffeq solvers, data structures, math utilities — is tested with
Node's built-in test runner. No test framework, no dependencies:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('euler step moves in correct direction', () => {
  // ...
});
```

Run with `make test`. Tests run in CI before every deploy.
If tests fail, nothing ships.

Rendering code is not unit tested. It is tested by looking at it.

---

## The graduation model

Projects start here. The bar for getting your own repo:

- The project has scope that doesn't belong in a playground
- It needs its own build, dependencies, or deployment story
- It's something worth maintaining independently

Until then it lives here as a client-side JS app under its own namespace.
Other repos are linked in — not absorbed.

---

## On AI

AI is a reference, not an author.

Appropriate uses:
- Explaining a concept
- Reviewing code I wrote
- Designing a spec together — I implement it
- Replacing a search engine

Not appropriate:
- Writing implementation code I have to maintain
- Producing anything I couldn't have written myself given enough time
- Substituting for understanding I haven't built yet

This repo was bootstrapped with AI assistance. That was a pragmatic starting
point, not a template for how it grows.
