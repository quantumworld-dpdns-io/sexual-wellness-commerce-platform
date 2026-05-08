#!/usr/bin/env sh
set -eu

required_docs="
README.md
docs/dev-docs/progress.md
docs/dev-docs/frontend.md
docs/dev-docs/backend-microservices.md
docs/dev-docs/security-zkp.md
docs/dev-docs/commerce-supabase.md
"

for f in $required_docs; do
  [ -f "$f" ] || { echo "missing required documentation file: $f"; exit 1; }
done

echo "documentation smoke checks passed"
