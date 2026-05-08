# Implementation Plan: Runnable Foundation (Token-Optimized)

## Objective
Convert current scaffolds into minimally runnable project units without heavy dependency installation.

## Scope
- Frontend: add minimal Next.js root files so App Router structure is complete.
- Backend safety: align Rust manifests with code references.
- Security ZKP: add missing project manifests for Noir and RISC0 stubs.

## Deliverables
- `src/frontend/tsconfig.json`
- `src/frontend/next-env.d.ts`
- `src/frontend/next.config.mjs`
- `src/frontend/src/app/layout.tsx`
- `src/frontend/src/app/page.tsx`
- `src/backend/safety/spin.toml`
- `src/backend/safety/Cargo.toml` dependency alignment
- `src/security/noir/age_verification/Nargo.toml`
- `src/security/risc0/Cargo.toml`

## Execution Method
1. Add only the minimum files needed for structural correctness.
2. Avoid package installation and binary compilation in this phase.
3. Preserve existing scaffold routes and stubs.

## Validation
- File existence checks for all deliverables.
- Basic static content sanity checks (non-empty files).

## Out of Scope
- `npm install`, `cargo build`, `go mod tidy`, `pip install`.
- Production hardening and performance tuning.
