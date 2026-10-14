import { contacts } from "../data/content";
import Icon from "./Icon";

export default function Contact() {
  return (
    <section id="contact" className="section-tight">
      <div className="container">
        <div className="contact">
          <div className="contact-text">
            <h2>Запишитесь на пробный урок</h2>
            <p>Напишите мне в Telegram — расскажите о цели, и подберём удобное время для пробного урока.</p>
          </div>
          <div className="contact-actions">
            <a href={contacts.telegramUrl} className="btn btn-dark btn-lg">
              <Icon name="telegram" size={22} />
              Написать в Telegram
            </a>
            <a href={contacts.profiUrl} className="btn btn-outline">
              Записаться через Profi.ru
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
