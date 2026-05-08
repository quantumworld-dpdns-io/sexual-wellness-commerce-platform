export default function HomePage() {
  return (
    <>
      <section className="hero">
        <article className="panel hero-main">
          <span className="eyebrow">Discreet Care Infrastructure</span>
          <h1 className="title">Confidence, Privacy, and Precision in Wellness.</h1>
          <p className="subtitle">
            A private-first commerce and education experience built around verified credentials, policy-aware safety,
            and trusted checkout orchestration.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="/onboarding">
              Begin Onboarding
            </a>
            <a className="btn btn-secondary" href="/marketplace">
              Explore Marketplace
            </a>
          </div>
        </article>

        <aside className="panel hero-side">
          <div className="stat-grid">
            <div className="stat">
              <h3>Credential Privacy</h3>
              <p>Zero-knowledge verification without exposing sensitive preference data.</p>
            </div>
            <div className="stat">
              <h3>Policy Safety</h3>
              <p>Dedicated safety and policy services for runtime decision enforcement.</p>
            </div>
            <div className="stat">
              <h3>Checkout Integrity</h3>
              <p>UCP-oriented transactional flows with auditable backend controls.</p>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
