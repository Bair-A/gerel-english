import { lessonSlides } from "../data/content";
import Carousel from "./Carousel";

export default function Method() {
  return (
    <section id="method" className="section">
      <div className="container stack">
        <h2>Как я веду уроки</h2>
        <Carousel slides={lessonSlides} label="Как я веду уроки" />
      </div>
    </section>
  );
}
