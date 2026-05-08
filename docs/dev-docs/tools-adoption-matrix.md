# Tools Adoption Matrix

## Now
| Tool | Why Now | Target Path | Owner | Success Signal |
|---|---|---|---|---|
| Supabase | Core commerce data plane already scaffolded | `src/commerce/supabase` | TBD | Migration files present and versioned |
| Noir | ZKP age verification scaffold exists | `src/security/noir/age_verification` | TBD | `Nargo.toml` + circuit file present |
| RISC0 | ZK execution stub exists | `src/security/risc0` | TBD | Cargo manifest + stub compile path defined |
| Google UCP | Checkout flow scaffold exists | `src/commerce/ucp` | TBD | Typed checkout stub and interface docs |

## Later
| Tool | Why Later | Target Path | Owner | Success Signal |
|---|---|---|---|---|
| OpenTelemetry | Requires cross-service wiring | `src/backend/*` | TBD | Trace IDs propagated across services |
| Arize Phoenix | Needs telemetry baseline first | `src/backend/research` | TBD | Traces visible for research workflows |
| LangGraph/CrewAI | Research service currently scaffold-only | `src/backend/research` | TBD | At least one runnable agent graph |

## Parked
| Tool | Why Parked | Revisit Trigger |
|---|---|---|
| CUDA-Q | Premature before baseline quantum API is stable | Quantum service API contract finalized |
| Teaclave | Additional complexity before core services mature | Need for TEE-backed workloads |
