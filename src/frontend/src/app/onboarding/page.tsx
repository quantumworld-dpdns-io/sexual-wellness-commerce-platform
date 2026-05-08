export default function OnboardingPage() {
  return (
    <main className="panel page">
      <h1>Anonymous Onboarding</h1>
      <p>
        Create a private profile using proof-oriented identity linking. This onboarding flow is designed to separate
        personal identity from preference-level commerce interactions.
      </p>

      <section className="feature-list" aria-label="Onboarding capabilities">
        <div className="feature-item">
          <strong>ZK Identity Link:</strong> Bind a private credential without leaking source attributes.
        </div>
        <div className="feature-item">
          <strong>Preference Vaulting:</strong> Encrypt preference metadata for controlled downstream access.
        </div>
        <div className="feature-item">
          <strong>Policy Checkpoint:</strong> Gate onboarding completion through compliance-safe policy rules.
        </div>
      </section>

      <p className="status">Scaffold state: ready for API contract wiring.</p>
    </main>
  );
}
