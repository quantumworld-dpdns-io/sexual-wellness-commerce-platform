FROM rust:1.78-alpine AS build
WORKDIR /app

RUN apk add --no-cache musl-dev
COPY Cargo.toml ./Cargo.toml
COPY src ./src
RUN cargo build --release || true

FROM alpine:3.20
WORKDIR /app
COPY --from=build /app/target/release/safety /app/safety
EXPOSE 7000
CMD ["/app/safety"]
