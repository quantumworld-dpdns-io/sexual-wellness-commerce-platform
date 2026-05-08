export default function OnboardingPage() {
  return (
    <main className="panel page">
      <span className="eyebrow">Step 01</span>
      <h1>Anonymous Onboarding</h1>
      <p>
        Begin with a discreet intake experience that protects identity while capturing preferences for tasteful,
        consent-based recommendations.
      </p>

      <section className="feature-list" aria-label="Onboarding capabilities">
        <div className="feature-item">
          <strong>Identity Boundary:</strong> Proof-based verification without exposing unnecessary personal data.
        </div>
        <div className="feature-item">
          <strong>Desire Mapping:</strong> Structured preference capture for intimate but safe personalization.
        </div>
        <div className="feature-item">
          <strong>Access Tiering:</strong> Gradual unlock model for services and education pathways.
        </div>
      </section>

      <p className="status">Ready for credential API integration.</p>
    </main>
  );
}
