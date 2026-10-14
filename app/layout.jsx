import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";

// next/font скачивает шрифты во время сборки и кладёт их рядом с сайтом,
// поэтому посетители не обращаются к серверам Google.
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Герел — репетитор английского онлайн",
  description:
    "Онлайн-уроки английского с Герел: Cambridge C1 Advanced (Grade A, уровень C2), опыт с 2021 года. Общий и разговорный английский, английский для школьников. 1300 ₽ за 60 минут.",
  openGraph: {
    title: "Герел — репетитор английского онлайн",
    description:
      "Cambridge C1 Advanced, Grade A (C2). Уроки по учебникам Oxford и Cambridge, интерактивная доска, живой английский.",
    locale: "ru_RU",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${unbounded.variable}`}>
      <body>{children}</body>
    </html>
  );
}
