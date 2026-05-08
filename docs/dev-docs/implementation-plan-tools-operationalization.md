# Implementation Plan: Tools Operationalization

## Objective
Convert `.ignore/software-tools` from a reference catalog into an actionable implementation map.

## Scope
- Add decision matrix (`Now / Later / Parked`).
- Add tool-to-module mapping aligned to current repo structure.
- Define measurable adoption checkpoints per selected tool.

## Deliverables
- `docs/dev-docs/tools-adoption-matrix.md`
- `docs/dev-docs/tools-module-mapping.md`

## Execution Method
1. Prioritize tools already reflected in scaffolds (Noir, RISC0, Supabase, UCP, observability stack).
2. Assign each selected tool an owner placeholder, target path, and validation signal.
3. Keep entries concise and implementation-oriented.

## Validation
- Every `Now` tool maps to at least one concrete path in `src/`.
- Each mapping has a success signal that can be verified in CI or smoke checks.

## Out of Scope
- Immediate integration of all catalog tools.
- Vendor lock-in decisions during scaffold phase.
