'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import './style.css';

interface Ad {
  id: number;
  title: string;
  price: string;
  image: string;
  tag?: string;
}

export default function Listings() {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    fetch('/ads.json')
      .then((res) => res.json())
      .then((data) => setAds(data));
  }, []);

  return (
    <div>
      <header className="site-header">
        <div className="logo">NaKolela</div>
        <nav>
          <Link href="/">Начало</Link>
          <Link href="/listings">Обяви</Link>
          <Link href="/promo">Промо</Link>
          <Link href="/contacts">Контакти</Link>
        </nav>
      </header>

      <main className="container">
        <h1>Обяви</h1>
        <div className="grid">
          {ads.map((ad) => (
            <div className="listing" key={ad.id}>
              <div className="listing-card">
                {ad.tag && <span className="tag">{ad.tag}</span>}
                <img src={ad.image} alt={ad.title} />
              </div>
              <div className="listing-info">
                <h3>{ad.title}</h3>
                <p className="price">{ad.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
