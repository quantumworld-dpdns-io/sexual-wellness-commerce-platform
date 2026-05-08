from fastapi import FastAPI

app = FastAPI()


@app.get("/health")
def health():
    return {"status": "ok", "service": "policy-engine"}


@app.post("/authorize")
def authorize(payload: dict):
    # Scaffold placeholder for commerce/risk policy decisions.
    return {"allow": True, "reason": "scaffold-default", "input": payload}
