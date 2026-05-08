#!/usr/bin/env sh
set -eu

required_files="
src/security/noir/age_verification/src/main.nr
src/security/risc0/stub.rs
"

for f in $required_files; do
  [ -f "$f" ] || { echo "missing required security file: $f"; exit 1; }
done

grep -q 'fn main' src/security/noir/age_verification/src/main.nr || {
  echo "noir circuit main function not found"
  exit 1
}

grep -q 'fn main' src/security/risc0/stub.rs || {
  echo "risc0 stub main function not found"
  exit 1
}

echo "security smoke checks passed"
