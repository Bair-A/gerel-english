export default function Header() {
  return (
    <header className="container header">
      <div className="logo">Герел · English</div>
      <nav className="nav" aria-label="Разделы сайта">
        <a href="#method">Как я учу</a>
        <a href="#formats">Цены</a>
        <a href="#about">Обо мне</a>
        <a href="#reviews">Отзывы</a>
      </nav>
    </header>
  );
}
