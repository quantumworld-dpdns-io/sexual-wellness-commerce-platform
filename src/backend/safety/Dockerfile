FROM rust:1.78-alpine
WORKDIR /app

COPY Cargo.toml ./Cargo.toml
COPY src ./src
COPY spin.toml ./spin.toml

EXPOSE 7000
CMD ["sh", "-c", "echo 'Safety service scaffold container running'; tail -f /dev/null"]
