export default function Closing() {
  return (
    <section className="closing" id="cta">
      <div className="wrap">
        <h2>Bring Attenddr to your school</h2>
        <p>
          A 20-minute demo, or a free 30-day pilot on one campus. Either way,
          see it working before you decide.
        </p>
        <div className="ctas">
          <a
            className="btn btn-primary"
            href="mailto:hello@attenddr.com?subject=Book%20a%2020-minute%20demo"
          >
            Book a 20-minute demo
          </a>
          <a
            className="btn btn-ghost"
            href="mailto:hello@attenddr.com?subject=Start%20a%20free%2030-day%20pilot"
          >
            Start a free 30-day pilot
          </a>
        </div>
      </div>
    </section>
  );
}