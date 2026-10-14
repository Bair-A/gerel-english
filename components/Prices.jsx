import { mainPrice, priceList } from "../data/content";

export default function Prices() {
  return (
    <section id="formats" className="section section-dark">
      <div className="container stack">
        <h2>Форматы и цены</h2>
        <div className="prices">
          <div className="price-main">
            <div className="price-label">{mainPrice.label}</div>
            <div className="price-value">{mainPrice.price}</div>
            <div className="price-per">{mainPrice.per}</div>
            <div className="price-note">{mainPrice.note}</div>
          </div>
          <div className="price-list">
            {priceList.map((item) => (
              <div key={item.name} className="price-row">
                <div>{item.name}</div>
                <div className="bold">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
