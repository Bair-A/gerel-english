import { contacts } from "../data/content";
import { asset } from "../lib/asset";

export default function Hero() {
  return (
    <section className="container hero">
      <div className="hero-text">
        <div className="chips">
          <span className="chip chip-accent">Cambridge C1 Advanced · Grade A, уровень C2</span>
          <span className="chip">Преподаю с 2021 года</span>
          <span className="chip">Онлайн</span>
        </div>
        <h1>Английский с&nbsp;Герел: интересно, в&nbsp;вашем темпе и&nbsp;без страха ошибок</h1>
        <p className="lead">
          Уроки по британским учебникам Oxford и Cambridge на интерактивной доске, с играми для
          запоминания слов и живыми материалами — сериалами, подкастами, статьями.
        </p>
        <div className="actions">
          <a href="#contact" className="btn btn-dark">
            Записаться на пробный урок
          </a>
          <a href={contacts.profiUrl} className="btn btn-outline">
            Мой профиль на Profi.ru
          </a>
        </div>
      </div>
      <div className="hero-photo">
        <img src={asset("/assets/gerel.jpg")} alt="Герел, репетитор английского" />
      </div>
    </section>
  );
}
