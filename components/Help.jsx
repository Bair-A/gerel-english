import { helpCards } from "../data/content";

export default function Help() {
  return (
    <section className="section section-white">
      <div className="container stack">
        <h2>С чем помогу</h2>
        <div className="grid grid-240">
          {helpCards.map((card) => (
            <div key={card.title} className="card-outline">
              <div className="card-title">{card.title}</div>
              <div className="muted">{card.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
