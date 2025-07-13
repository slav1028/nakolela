import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>NaKolela – Начало</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={styles.header}>
        <div style={styles.logo}>NaKolela</div>
        <nav style={styles.nav}>
          <Link href="/">Начало</Link>
          <Link href="/listings">Обяви</Link>
          <Link href="/promo">Промо</Link>
          <Link href="/contacts">Контакти</Link>
        </nav>
      </header>

      <main style={styles.main}>
        <h1 style={styles.title}>Открий идеалното си двуколесно превозно средство</h1>

        {/* Категории */}
        <section style={styles.grid}>
          {[
            { name: "Велосипеди", icon: "🚲", href: "/listings?category=bikes" },
            { name: "Тротинетки", icon: "🛴", href: "/listings?category=scooters" },
            { name: "Мотоциклети", icon: "🏍️", href: "/listings?category=motorcycles" },
            { name: "Аксесоари и Части", icon: "🧰", href: "/listings?category=parts" },
          ].map((cat) => (
            <Link key={cat.name} href={cat.href} style={styles.categoryCard}>
              <span style={{ fontSize: "2rem" }}>{cat.icon}</span>
              <div>{cat.name}</div>
            </Link>
          ))}
        </section>

        {/* Промо обяви */}
        <section style={{ marginTop: "40px", width: "100%" }}>
          <h2 style={{ color: "#2c3e50" }}>🔥 Промо обяви</h2>
          <div style={styles.promos}>
            <div style={styles.listingCard}>
              <span style={styles.tag}>BEST</span>
              <img src="/1.jpg" alt="Yamaha" style={styles.image} />
              <h3>Yamaha MT-07</h3>
              <p style={styles.price}>8 700 лв.</p>
            </div>
            <div style={styles.listingCard}>
              <span style={{ ...styles.tag, backgroundColor: "#f39c12" }}>TOP</span>
              <img src="/2.jpg" alt="Bike" style={styles.image} />
              <h3>Cube Attention 29"</h3>
              <p style={styles.price}>1 100 лв.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    backgroundColor: "#2ecc71",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "24px",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  main: {
    padding: "24px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "32px",
    color: "#2c3e50",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    gap: "20px",
  },
  categoryCard: {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    textDecoration: "none",
    color: "#2c3e50",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
  },
  promos: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  listingCard: {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "280px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  tag: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "gold",
    color: "black",
    padding: "4px 8px",
    fontSize: "12px",
    fontWeight: "bold",
    borderRadius: "4px",
  },
  price: {
    color: "#27ae60",
    fontWeight: "bold",
    padding: "12px",
  },
};
