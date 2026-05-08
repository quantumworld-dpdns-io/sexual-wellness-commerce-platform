path "kv/data/security/*" {
  capabilities = ["create", "read", "update", "delete", "list"]
}

path "kv/metadata/security/*" {
  capabilities = ["list", "read"]
}
