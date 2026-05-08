path "kv/data/backend/*" {
  capabilities = ["create", "read", "update", "delete", "list"]
}

path "kv/metadata/backend/*" {
  capabilities = ["list", "read"]
}
