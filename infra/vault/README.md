# Vault Dev Setup

This setup runs Vault in **dev mode** for local scaffolding only.

## Defaults
- Address: `http://localhost:8200`
- Root token: `root`
- Secret engine: `kv-v2` at `kv/`

## Policies provisioned by `vault-init`
- `backend-policy` for `kv/data/backend/*`
- `security-policy` for `kv/data/security/*`

## Start
```bash
docker compose up -d vault vault-init
```

## Full stack
```bash
docker compose up -d
```

## Security note
Do not use this dev-mode Vault configuration in production.
