import { faq } from "../data/content";

export default function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container container-narrow stack">
        <h2>Частые вопросы</h2>
        <div className="faq">
          {faq.map((item) => (
            <div key={item.q} className="faq-item">
              <div className="faq-q">{item.q}</div>
              <div className="muted">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
