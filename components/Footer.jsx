import { contacts } from "../data/content";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="container footer">
      <div>© 2026 Герел, репетитор английского</div>
      <div className="footer-links">
        <a href={contacts.telegramUrl} className="footer-tg">
          <Icon name="telegram" size={18} />
          Telegram
        </a>
        <span aria-hidden="true">·</span>
        <a href={contacts.profiUrl}>Profi.ru</a>
      </div>
    </footer>
  );
}
