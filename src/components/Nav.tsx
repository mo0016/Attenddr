import LogoMark from "./LogoMark";

export default function Nav() {
  const links = [
    { href: "#how", label: "How it works" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <div className="announce">
        Now onboarding for the new term — free 30-day pilot on one campus 🎉
      </div>
      <header className="nav">
        <div className="nav-inner">
          <a className="logo" href="#top">
            <LogoMark size={27} />
            Attenddr
          </a>
          <nav className="nav-links" aria-label="Main">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a
            className="btn btn-mint nav-cta"
            href="mailto:hello@attenddr.com?subject=Book%20a%2020-minute%20demo"
          >
            Book a demo
          </a>
        </div>
      </header>
    </>
  );
}
