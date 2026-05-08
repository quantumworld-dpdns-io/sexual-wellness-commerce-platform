#!/usr/bin/env sh
set -eu

required_files="
src/backend/gateway/main.go
src/backend/gateway/go.mod
src/backend/safety/Cargo.toml
src/backend/safety/src/main.rs
src/backend/research/main.py
src/backend/research/requirements.txt
src/backend/quantum/main.py
"

for f in $required_files; do
  [ -f "$f" ] || { echo "missing required backend file: $f"; exit 1; }
done

grep -q '^module ' src/backend/gateway/go.mod || {
  echo "gateway go.mod missing module declaration"
  exit 1
}

grep -q '^\[package\]' src/backend/safety/Cargo.toml || {
  echo "safety Cargo.toml missing [package] section"
  exit 1
}

echo "backend smoke checks passed"
