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
// app/profile/[id]/page.tsx
'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

interface Ad {
  id: number
  title: string
  price: string
  image: string
  userId: number
}

export default function ProfilePage() {
  const { id } = useParams()
  const [ads, setAds] = useState<Ad[]>([])

  useEffect(() => {
    fetch('/ads.json')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter((ad: Ad) => ad.userId === parseInt(id as string))
        setAds(filtered)
      })
  }, [id])

  return (
    <div style={{ padding: '24px' }}>
      <h1>Профил на потребител #{id}</h1>
      <h2>Неговите обяви:</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
        {ads.map(ad => (
          <div key={ad.id}>
            <img src={ad.image} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{ad.title}</h3>
            <p style={{ color: '#2ecc71', fontWeight: 'bold' }}>{ad.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
