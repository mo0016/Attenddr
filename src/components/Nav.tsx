export default function Nav() {
  const links = [
    { href: "#how", label: "How it works" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="logo" href="#top">
          <span className="logo-mark" aria-hidden="true">
            <svg
              viewBox="0 0 32 32"
              width="15"
              height="15"
              fill="none"
              stroke="#004540"
              strokeWidth="4.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8.5 24.5 16 5 23.5 24.5" />
              <path d="m11.5 16 3.4 4 6.9-8.4" />
            </svg>
          </span>
          Attenddr
        </a>
        <nav className="nav-links" aria-label="Main">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary" href="#cta">
          Book a demo
        </a>
      </div>
    </header>
  );
}