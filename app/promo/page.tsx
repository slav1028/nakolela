// promo.tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";

const PromoPage = () => {
  const promoOptions = [
    {
      title: "VIP обява",
      description: "Показва се на началната страница и най-отгоре в търсенията",
      price: "9.99 лв.",
      color: "#f39c12",
    },
    {
      title: "BEST обява",
      description: "Специален златен таг 'BEST' и повече видимост",
      price: "6.99 лв.",
      color: "gold",
    },
    {
      title: "TOP обява",
      description: "Излиза над обикновените обяви в списъците",
      price: "4.99 лв.",
      color: "#3498db",
    },
  ];

  return (
    <>
      <Head>
        <title>Промоции | NaKolela</title>
      </Head>

      <header className="header">
        <h1>Промо опции</h1>
        <nav>
          <Link href="/">Начало</Link> |{" "}
          <Link href="/listings">Обяви</Link> |{" "}
          <Link href="/promo">Промо</Link> |{" "}
          <Link href="/contacts">Контакти</Link>
        </nav>
      </header>

      <main className="container">
        <section className="promo-options">
          {promoOptions.map((promo, index) => (
            <div
              key={index}
              className="promo-card"
              style={{ borderColor: promo.color }}
            >
              <h2 style={{ color: promo.color }}>{promo.title}</h2>
              <p>{promo.description}</p>
              <strong>{promo.price}</strong>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default PromoPage;
