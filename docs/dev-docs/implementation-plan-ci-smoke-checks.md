# Implementation Plan: CI and Smoke Checks (Token-Optimized)

## Objective
Replace placeholder CI with lightweight validation gates that verify scaffold integrity without heavy downloads.

## Scope
- CI workflow shell checks for required files.
- SQL migration presence validation.
- Documentation presence validation.
- Shell-based smoke tests in `tests/`.

## Deliverables
- Updated `.github/workflows/ci.yml`
- `tests/smoke_scaffold.sh`
- Optional helper script(s) for repeatable checks.

## Execution Method
1. Use POSIX shell checks (`test`, `grep`, `find`) only.
2. Keep CI runtime short and deterministic.
3. Avoid language-specific dependency installs in pipeline.

## Validation
- CI workflow passes locally via script execution where possible.
- Smoke script exits non-zero on missing critical scaffold files.

## Out of Scope
- Full lint/test/build for Node, Go, Rust, Python.
- E2E browser testing.
