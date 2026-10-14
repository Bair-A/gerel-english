import { steps } from "../data/content";

export default function Steps() {
  return (
    <section className="section section-white">
      <div className="container stack">
        <h2>Как начать</h2>
        <div className="grid grid-260 grid-gap-lg">
          {steps.map((step, i) => (
            <div key={step.title} className="feature">
              <div className="step-number">{i + 1}</div>
              <div className="feature-title">{step.title}</div>
              <div className="muted">{step.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
