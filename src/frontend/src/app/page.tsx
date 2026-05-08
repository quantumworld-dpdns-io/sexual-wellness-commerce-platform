export default function HomePage() {
  return (
    <>
      <section className="hero hero-club">
        <article className="panel hero-main">
          <span className="eyebrow">Private Members Atmosphere</span>
          <h1 className="title">Luxury Wellness Lounge</h1>
          <p className="subtitle">
            Discreet, elegant, and consent-first experiences for modern sexual wellness. Verified access, premium care,
            and total privacy by design.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="/onboarding">
              Reserve Access
            </a>
            <a className="btn btn-secondary" href="/marketplace">
              Discover Experiences
            </a>
          </div>
        </article>

        <aside className="panel hero-side">
          <div className="stat-grid">
            <div className="stat">
              <h3>Dress Code</h3>
              <p>Elegant, respectful, and confidence-forward environment.</p>
            </div>
            <div className="stat">
              <h3>Privacy Standard</h3>
              <p>Credentialed entry with encrypted identity boundaries.</p>
            </div>
            <div className="stat">
              <h3>Opening Rhythm</h3>
              <p>Late-evening hospitality with curated daytime education.</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="split-section">
        <article className="panel page">
          <h2>Welcome to the House</h2>
          <p>
            A premium space where intimacy, health, and education intersect. Our platform creates a tasteful and safe
            route from onboarding to personalized recommendations and secure checkout.
          </p>
          <ul className="bullet-list">
            <li>Consent-based design and policy-aware safety controls</li>
            <li>Private credential flows with zero-knowledge friendly architecture</li>
            <li>Hospitality-grade guidance across products and education</li>
          </ul>
        </article>

        <article className="panel page">
          <h2>Special Offers</h2>
          <p>
            Seasonal bundles, expert-led care paths, and member-only recommendations designed for confidence,
            comfort, and refined pleasure.
          </p>
          <div className="feature-list">
            <div className="feature-item">
              <strong>First Visit Ritual:</strong> Guided onboarding and preference profiling package.
            </div>
            <div className="feature-item">
              <strong>Couples Collection:</strong> Curated bundles for communication and shared exploration.
            </div>
            <div className="feature-item">
              <strong>Aftercare Edit:</strong> Recovery and wellness essentials with discreet fulfillment.
            </div>
          </div>
        </article>
      </section>

      <section className="split-section">
        <article className="panel page">
          <h2>Find Us</h2>
          <p>
            Hybrid digital + concierge model. Start privately online, then continue through tailored consultations and
            premium service channels.
          </p>
          <div className="contact-grid">
            <div>
              <h3>Address</h3>
              <p>Discreet Service Network, Taipei / Berlin / Remote</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>concierge@wellness.example</p>
            </div>
            <div>
              <h3>Hours</h3>
              <p>Daily 12:00 - 02:00 (local partner time)</p>
            </div>
          </div>
        </article>

        <article className="panel page">
          <h2>Quick Navigation</h2>
          <div className="feature-list">
            <a className="feature-link" href="/onboarding">
              Anonymous Onboarding
            </a>
            <a className="feature-link" href="/marketplace">
              Marketplace & Checkout
            </a>
            <a className="feature-link" href="/education">
              Education & Guidance
            </a>
          </div>
          <p className="status">Scaffold state: visual direction aligned, service wiring pending.</p>
        </article>
      </section>
    </>
  );
}
