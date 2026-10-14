import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about-head">
          <h2>Обо мне</h2>
          <div className="about-name">{about.fullName}</div>
        </div>
        <div className="grid grid-240 about-facts">
          {about.facts.map((fact) => (
            <div key={fact.label} className="fact">
              <div className="fact-label">{fact.label}</div>
              <div className="fact-text">{fact.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
