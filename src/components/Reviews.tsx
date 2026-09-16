const reviews = [
  {
    title: "Roll call is gone",
    text: "Attendance that used to take ten minutes per class now happens as students walk in. The register is already done before the teacher says a word.",
    name: "Vice Principal",
    role: "Pilot campus, Lagos",
  },
  {
    title: "Parents hear it the same morning",
    text: "The WhatsApp alert goes out the moment a student misses check-in. Parents stopped finding out about absences weeks later.",
    name: "School administrator",
    role: "Multi-campus group",
  },
];

function Star() {
  return (
    <span className="star" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
      >
        <path d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.3 1.3-6.6L2.5 9.5l6.6-.8L12 2.5Z" />
      </svg>
    </span>
  );
}

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <div className="section-head center">
          <div className="tag">Reviews</div>
          <h2>Rated excellent by pilot schools</h2>
          <p>
            Feedback from the campuses testing Attenddr on their gates and
            classroom doors.
          </p>
        </div>

        <div className="reviews-card">
          <div className="rating-box">
            <span className="rating-word">Excellent</span>
            <div className="stars" aria-label="5 out of 5 stars">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <span className="rating-sub">
              From schools on the 30-day pilot
            </span>
            <span className="rating-brand">✦ Attenddr pilots</span>
          </div>

          <div className="review-grid">
            {reviews.map((review) => (
              <div className="review-card" key={review.title}>
                <div className="stars" aria-label="5 out of 5 stars">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <h4>{review.title}</h4>
                <p>{review.text}</p>
                <div className="review-who">
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-cta">
          <a
            className="btn btn-primary"
            href="mailto:hello@attenddr.com?subject=Book%20a%2020-minute%20demo"
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}
