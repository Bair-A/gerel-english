import { contacts, reviews } from "../data/content";

export default function Reviews() {
  return (
    <section id="reviews" className="section section-white">
      <div className="container stack">
        <div className="section-head">
          <h2>Отзывы учеников</h2>
          <a href={contacts.profiUrl} className="bold">
            Все отзывы на Profi.ru →
          </a>
        </div>
        <div className="grid grid-300">
          {reviews.map((r) => (
            <figure key={r.author + r.date} className="review">
              <blockquote>{r.text}</blockquote>
              <figcaption className="bold">
                {r.author} · {r.date}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
