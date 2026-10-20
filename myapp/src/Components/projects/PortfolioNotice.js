
import "../../Styles/Projects/PortfolioNotice.scss";

export default function PortfolioNotice() {
  return (
    <div className="portfolio-notice">
      <span className="notice-indicator" aria-hidden="true" />

      <p>
        <span className="notice-label">Portfolio in progress</span>
        <span className="notice-divider" aria-hidden="true">
          —
        </span>
        <span>More projects are being added soon.</span>
      </p>
    </div>
  );
}
