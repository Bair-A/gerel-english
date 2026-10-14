import { methods } from "../data/content";
import { asset } from "../lib/asset";
import Icon from "./Icon";

export default function Method() {
  return (
    <section id="method" className="section">
      <div className="container stack">
        <h2>Как я веду уроки</h2>
        <div className="grid grid-240 grid-gap-lg">
          {methods.map((m) => (
            <div key={m.title} className="feature">
              <div className="icon-box">
                <Icon name={m.icon} />
              </div>
              <div className="feature-title">{m.title}</div>
              <div className="muted">{m.text}</div>
            </div>
          ))}
        </div>
        <figure className="figure">
          <img
            src={asset("/assets/miro-lessons.jpg")}
            alt="Две доски уроков в Miro: «Possessive ’s» с семейным деревом и «Possessive adjectives» с фотографиями на пробковой доске"
            className="rounded-image"
          />
          <figcaption className="caption">
            Так выглядят мои уроки в Miro: правило, упражнения и игры — на одной доске.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
