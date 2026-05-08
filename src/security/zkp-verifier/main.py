from fastapi import FastAPI

app = FastAPI()


@app.get("/health")
def health():
    return {"status": "ok", "service": "zkp-verifier"}


@app.post("/verify")
def verify(payload: dict):
    # Scaffold placeholder for Noir/RISC0 verification orchestration.
    return {"verified": True, "engine": payload.get("engine", "stub")}
