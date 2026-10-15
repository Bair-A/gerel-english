import { asset } from "../lib/asset";

const facts = [
  { text: "Cambridge C1 Advanced · Grade A, уровень\u00a0C2", accent: true },
  { text: "Преподаю с 2021 года" },
  { text: "Онлайн" },
];

export default function Hero() {
  return (
    <section className="container hero">
      <div className="hero-text">
        <ul className="chips">
          {facts.map((fact) => (
            <li key={fact.text} className={fact.accent ? "chip chip-accent" : "chip"}>
              {fact.text}
            </li>
          ))}
        </ul>
        <h1>Английский без страха ошибок и&nbsp;скучной зубрёжки</h1>
        <p className="lead">
          Уроки по британским учебникам Oxford и Cambridge на интерактивной доске, с играми для
          запоминания слов и живыми материалами — сериалами, подкастами, статьями.
        </p>
        <div className="actions">
          <a href="#contact" className="btn btn-outline">
            Записаться на пробный урок
          </a>
        </div>
      </div>
      <div className="hero-photo">
        <img src={asset("/assets/gerel.jpg")} alt="Герел, репетитор английского" />
      </div>
    </section>
  );
}
