# Tool-to-Module Mapping

## Security
- Noir -> `src/security/noir/age_verification`
- RISC0 -> `src/security/risc0`
- PQC libraries (future) -> `src/security/pqc` (planned)

## Commerce
- Supabase -> `src/commerce/supabase`
- Google UCP -> `src/commerce/ucp`

## Backend
- LangGraph/CrewAI -> `src/backend/research`
- OpenTelemetry (planned) -> `src/backend/gateway`, `src/backend/research`, `src/backend/quantum`

## Runtime
- Spin/Wasmtime -> `src/backend/safety`

## Validation Signals
- Each mapped module must include: manifest/config + one executable entry point + one smoke check.
