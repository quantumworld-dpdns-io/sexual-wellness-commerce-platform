from fastapi import FastAPI
import uvicorn
# import qiskit
# import cudaq

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Quantum Service Running"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)
