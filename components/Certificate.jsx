import { certificate } from "../data/content";
import { asset } from "../lib/asset";

export default function Certificate() {
  const scan = asset("/assets/certificate.jpg");

  return (
    <section className="section-tight">
      <div className="container">
        <div className="certificate">
          <div className="certificate-text">
            <div className="fact-label">Международный экзамен Cambridge English · сентябрь 2023</div>
            <h3>C1 Advanced сдан на Grade A — это уровень C2</h3>
            <p className="muted">
              Общий балл {certificate.overall} по шкале Cambridge English. Grade A присуждается за
              200–210 баллов и подтверждает владение языком на уровне C2 — высшем по европейской
              шкале CEFR.
            </p>
            <div className="scores">
              {certificate.scores.map((s) => (
                <div key={s.name} className={s.highlight ? "score score-accent" : "score"}>
                  <div className="score-value">{s.value}</div>
                  <div className="score-name">{s.name}</div>
                </div>
              ))}
            </div>
            <p className="caption">
              Результат можно проверить на сайте Cambridge:{" "}
              <a href={certificate.verifyUrl}>cambridgeenglish.org/verifiers</a>
            </p>
          </div>
          <figure className="certificate-scan">
            <a href={scan}>
              <img
                src={scan}
                alt="Скан результатов экзамена Cambridge C1 Advanced: Gerel Aveeva, Pass at Grade A, 201 балл, уровень C2, сентябрь 2023"
              />
            </a>
            <figcaption className="caption center">Нажмите, чтобы открыть в полном размере</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
