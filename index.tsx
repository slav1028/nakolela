
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>NaKolela - Обяви за двуколесни</title>
      </Head>
      <header>
        <img src="/logo.svg" alt="NaKolela Logo" width="120" />
        <nav>
          <Link href="/listings">Обяви</Link> | <Link href="/promo">Промо</Link> | <Link href="/contacts">Контакти</Link> | <Link href="/profile">Профил</Link>
        </nav>
      </header>
      <main>
        <h1>Добре дошъл в NaKolela!</h1>
        <p>Платформа за мотори, велосипеди, тротинетки и други двуколесни превозни средства.</p>
        <div>
          <h2>Категории</h2>
          <ul>
            <li>🏍️ Мотори</li>
            <li>🚲 Велосипеди</li>
            <li>🛴 Тротинетки</li>
            <li>🛵 Скутери</li>
          </ul>
        </div>
      </main>
      <footer>
        <p>&copy; 2025 NaKolela. Всички права запазени.</p>
      </footer>
    </>
  );
}
