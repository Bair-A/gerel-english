"use client";

import { useRef, useState } from "react";
import { asset } from "../lib/asset";

// Карусель слайдов: листается стрелками, точками и свайпом (на телефоне).
export default function Carousel({ slides, label }) {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  // Слайд, к которому едет прокрутка: чтобы быстрые клики по стрелке не терялись во время анимации
  const targetRef = useRef(0);
  const settleTimer = useRef(null);

  function goTo(index) {
    const track = trackRef.current;
    const i = Math.max(0, Math.min(slides.length - 1, index));
    targetRef.current = i;
    setCurrent(i);
    track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
  }

  function onScroll() {
    // Когда прокрутка остановилась (например, после свайпа), запоминаем, где оказались
    clearTimeout(settleTimer.current);
    settleTimer.current = setTimeout(() => {
      const track = trackRef.current;
      const i = Math.round(track.scrollLeft / track.clientWidth);
      targetRef.current = i;
      setCurrent(i);
    }, 120);
  }

  return (
    <div className="carousel" role="region" aria-roledescription="карусель" aria-label={label}>
      <div className="carousel-track" ref={trackRef} onScroll={onScroll}>
        {slides.map((slide, i) => (
          <figure
            key={slide.image}
            className="carousel-slide"
            role="group"
            aria-roledescription="слайд"
            aria-label={`${i + 1} из ${slides.length}`}
          >
            <img src={asset(slide.image)} alt={slide.alt} className="carousel-image" loading="lazy" />
            <figcaption className="carousel-caption">
              <div className="feature-title">{slide.title}</div>
              <div className="muted">{slide.text}</div>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-arrow"
          onClick={() => goTo(targetRef.current - 1)}
          disabled={current === 0}
          aria-label="Предыдущий слайд"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="carousel-dots">
          {slides.map((slide, i) => (
            <button
              key={slide.image}
              type="button"
              className={i === current ? "carousel-dot is-active" : "carousel-dot"}
              onClick={() => goTo(i)}
              aria-label={`Слайд ${i + 1}: ${slide.title}`}
              aria-current={i === current ? "true" : undefined}
            />
          ))}
        </div>
        <button
          type="button"
          className="carousel-arrow"
          onClick={() => goTo(targetRef.current + 1)}
          disabled={current === slides.length - 1}
          aria-label="Следующий слайд"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
