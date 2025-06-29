
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial', padding: '1.5rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src="/logo.svg" alt="Nakolela Logo" width="160" />
        <nav>
          <Link href="/">Категории</Link> | <Link href="/">Промоции</Link> | <Link href="/">Контакти</Link>
        </nav>
      </header>
      <section style={{ marginTop: '2rem' }}>
        <h1 style={{ color: '#2e7d32' }}>Добре дошъл в nakolela!</h1>
        <p>Открий мотоциклети, тротинетки и велосипеди – всичко на едно място.</p>
      </section>
    </main>
  );
}
