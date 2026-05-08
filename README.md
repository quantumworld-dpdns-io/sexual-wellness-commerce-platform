# sexual-wellness-commerce-platform

> **Sexual Wellness Prescription-Like Commerce Platform**: A specialized marketplace for health and education utilizing private preference credentials and advanced safety modules to ensure user anonymity and data integrity.

## Overview

This platform serves as a secure bridge between wellness providers and consumers, focusing on "prescription-like" precision in commerce. It leverages cutting-edge technologies including Zero-Knowledge Proofs (ZKP) and Quantum Computing to handle sensitive preference data.

## Project Structure & Tech Stack

### Frontend

- **Framework**: [Next.js](https://nextjs.org/) (TypeScript)
- **State Management**: React Context / TanStack Query
- **Styling**: Vanilla CSS / Tailwind CSS

### Backend (Microservices Architecture)

- **Go**: High-performance core services and API gateway.
- **Rust**: Safety-critical modules and Wasm-based execution using **Fermyon Spin** and **Wasmtime**.
- **Python**: AI/ML research panels and orchestration using **LangGraph** & **CrewAI**.
- **Quantum**: Quantum-resistant algorithms and circuit simulation using **Qiskit** and **NVIDIA CUDA-Q** (QASM).

### Data & Security

- **Primary Database**: [Supabase](https://supabase.com/) (PostgreSQL + Auth + Storage)
- **Private Credentials**: **Zero-Knowledge Proofs** implemented via **Noir** and **RISC Zero**.
- **Security**: Post-Quantum Cryptography (**PQC Libraries**) and **Cilium Tetragon** for runtime security.

### Tools & Protocols
- **Commerce**: **Google Universal Commerce Protocol (UCP)** for interoperable marketplace logic.
- **Observability**: **OpenTelemetry** and **Arize Phoenix** for LLM/Agent monitoring.

## Implementation Progress
The project has been scaffolded based on detailed technical plans and expanded via token-optimized parallel execution.

### Completed Foundations
- **Frontend (`src/frontend`)**: Next.js core application plus runnable App Router root files (`layout.tsx`, root `page.tsx`, `tsconfig.json`, `next-env.d.ts`, `next.config.mjs`) and feature routes for onboarding, marketplace, and education.
- **Backend Microservices (`src/backend`)**: Scaffolding for Go (Gateway), Rust (Safety), Python (Research), and QASM (Quantum).
- **Security (`src/security`)**: Zero-Knowledge Proof stubs, including Noir circuit and RISC Zero crate-level scaffolding.
- **Commerce (`src/commerce`)**: Supabase SQL migrations with strict RLS and Google UCP checkout stub.

### Parallel Implementation Plans Added
- `docs/dev-docs/implementation-plan-runnable-foundation.md`
- `docs/dev-docs/implementation-plan-ci-smoke-checks.md`
- `docs/dev-docs/implementation-plan-tools-operationalization.md`
- `docs/dev-docs/tools-adoption-matrix.md`
- `docs/dev-docs/tools-module-mapping.md`

### Quality Gates
- Lightweight CI quality gates are active in `.github/workflows/ci.yml`.
- Token-efficient smoke checks are available under `tests/smoke/*.sh` and validate frontend/backend/security/commerce/docs scaffolds without heavy dependency installation.

## Getting Started

```bash
# Clone the repo
git clone https://github.com/quantumworld-dpdns-io/sexual-wellness-commerce-platform.git
cd sexual-wellness-commerce-platform
```

## Project Layout

```
.
├── src/          # Application source code
├── docs/         # Architecture decisions, API specs, runbooks
├── tests/        # Unit / integration / e2e tests
└── .github/
    └── workflows/ # CI/CD pipelines
```

## Contributing

Please read [CONTRIBUTING.md](docs/CONTRIBUTING.md) before opening a pull request.

## License

[MIT](LICENSE)
