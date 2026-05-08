FROM golang:1.22-alpine AS build
WORKDIR /app

COPY go.mod ./
COPY main.go ./
RUN go mod download || true
RUN go build -o gateway main.go

FROM alpine:3.20
WORKDIR /app
COPY --from=build /app/gateway /app/gateway
EXPOSE 3000
CMD ["/app/gateway"]
