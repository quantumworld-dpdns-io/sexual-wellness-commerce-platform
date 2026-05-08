#!/usr/bin/env sh
set -eu

required_files="
src/frontend/package.json
src/frontend/src/app/onboarding/page.tsx
src/frontend/src/app/marketplace/page.tsx
src/frontend/src/app/education/page.tsx
"

for f in $required_files; do
  [ -f "$f" ] || { echo "missing required frontend file: $f"; exit 1; }
done

grep -q '"next"' src/frontend/package.json || {
  echo "frontend package.json missing next dependency reference"
  exit 1
}

echo "frontend smoke checks passed"
