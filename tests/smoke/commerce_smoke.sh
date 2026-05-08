#!/usr/bin/env sh
set -eu

required_files="
src/commerce/supabase/migrations/01_initial_schema.sql
src/commerce/ucp/checkout.ts
"

for f in $required_files; do
  [ -f "$f" ] || { echo "missing required commerce file: $f"; exit 1; }
done

grep -qi 'create table' src/commerce/supabase/migrations/01_initial_schema.sql || {
  echo "initial schema migration missing CREATE TABLE statements"
  exit 1
}

echo "commerce smoke checks passed"
