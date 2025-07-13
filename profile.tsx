// profile.tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";

const ProfilePage = () => {
  const seller = {
    name: "Иван Петров",
    avatar: "/1.jpg",
    location: "София",
    rating: 4.8,
    listingsCount: 12,
  };

  const listings = [
    {
      id: 1,
      title: "Yamaha MT-07",
      price: "8 700 лв.",
      image: "/1.jpg",
    },
    {
      id: 2,
      title: "Cube Attention 29\"",
      price: "1 100 лв.",
      image: "/2.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Профил на продавач | NaKolela</title>
      </Head>

      <header className="header">
        <h1>Профил на продавач</h1>
        <nav>
          <Link href="/">Начало</Link> |{" "}
          <Link href="/listings">Обяви</Link> |{" "}
          <Link href="/promo">Промо</Link> |{" "}
          <Link href="/contacts">Контакти</Link>
        </nav>
      </header>

      <main className="container">
        <section className="profile-info">
          <img src={seller.avatar} alt={seller.name} className="avatar" />
          <div>
            <h2>{seller.name}</h2>
            <p>Град: {seller.location}</p>
            <p>Рейтинг: ⭐ {seller.rating}</p>
            <p>Обяви: {seller.listingsCount}</p>
          </div>
        </section>

        <section>
          <h3>Обяви на продавача</h3>
          <div className="grid">
            {listings.map((ad) => (
              <div key={ad.id} className="listing">
                <img src={ad.image} alt={ad.title} />
                <h4>{ad.title}</h4>
                <p className="price">{ad.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ProfilePage;
