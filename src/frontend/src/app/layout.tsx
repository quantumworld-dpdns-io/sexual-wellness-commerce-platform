import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sexual Wellness Platform",
  description: "Private, elegant, and secure wellness commerce"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <header className="topbar">
            <a className="brand" href="/">
              <span className="brand-mark">SW</span>
              <span className="brand-word">Sexual Wellness Platform</span>
            </a>
            <nav className="topnav" aria-label="Primary navigation">
              <a href="/onboarding">Onboarding</a>
              <a href="/marketplace">Marketplace</a>
              <a href="/education">Education</a>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
