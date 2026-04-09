export default function Header() {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="logo-btn" aria-label="ARoom">
          <svg className="logo-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4L4 16v16l20 12 20-12V16L24 4z" fill="currentColor" opacity="0.15"/>
            <path d="M4 16l20 12 20-12" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
            <path d="M24 28v16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M4 16l20-12 20 12" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
            <path d="M4 16v16l20 12" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
            <path d="M44 16v16l-20 12" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
          </svg>
          <span className="logo-text">ARoom</span>
        </div>
      </div>
    </header>
  );
}
