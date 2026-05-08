#!/usr/bin/env sh
set -eu

VAULT_ADDR="${VAULT_ADDR:-http://vault:8200}"
VAULT_TOKEN="${VAULT_TOKEN:-root}"

export VAULT_ADDR VAULT_TOKEN

echo "Waiting for Vault API..."
until vault status >/dev/null 2>&1; do
  sleep 2
done

echo "Enabling KV v2 at kv/ if needed..."
if ! vault secrets list -format=json | grep -q '"kv/"'; then
  vault secrets enable -path=kv kv-v2
fi

echo "Writing policies..."
vault policy write backend-policy /vault/config/policies/backend-policy.hcl
vault policy write security-policy /vault/config/policies/security-policy.hcl

echo "Seeding scaffold secrets..."
vault kv put kv/backend/gateway PORT=3000 SERVICE_NAME=gateway
vault kv put kv/backend/research PORT=8000 SERVICE_NAME=research
vault kv put kv/backend/quantum PORT=8001 SERVICE_NAME=quantum
vault kv put kv/security/zkp-verifier PORT=8100 SERVICE_NAME=zkp-verifier
vault kv put kv/security/policy-engine PORT=8101 SERVICE_NAME=policy-engine

echo "Vault dev bootstrap complete."
