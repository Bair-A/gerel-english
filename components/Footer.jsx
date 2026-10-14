import { contacts } from "../data/content";

export default function Footer() {
  return (
    <footer className="container footer">
      <div>© 2026 Герел, репетитор английского</div>
      <div>
        <a href={contacts.telegramUrl}>Telegram @{contacts.telegramUser}</a> ·{" "}
        <a href={contacts.profiUrl}>Profi.ru</a>
      </div>
    </footer>
  );
}
