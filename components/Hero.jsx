import { asset } from "../lib/asset";

export default function Hero() {
  return (
    <section className="container hero">
      <div className="hero-text">
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
