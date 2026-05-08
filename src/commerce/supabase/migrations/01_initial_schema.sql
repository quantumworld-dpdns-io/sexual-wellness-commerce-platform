-- Public Schema: Basic product info
CREATE TABLE public.products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT
);

-- Private Schema: Encrypted user metadata linked via ZK hashes
CREATE SCHEMA private;
CREATE TABLE private.user_metadata (
    zk_hash TEXT PRIMARY KEY,
    encrypted_preferences TEXT NOT NULL
);

-- Commerce Schema: Orders and transactions
CREATE SCHEMA commerce;
CREATE TABLE commerce.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    zk_hash TEXT REFERENCES private.user_metadata(zk_hash),
    product_id UUID REFERENCES public.products(id),
    status TEXT NOT NULL
);

-- Row Level Security (RLS)
ALTER TABLE private.user_metadata ENABLE ROW LEVEL SECURITY;
ALTER TABLE commerce.orders ENABLE ROW LEVEL SECURITY;
