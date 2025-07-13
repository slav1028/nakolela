'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import './style.css'

interface Ad {
  id: number
  title: string
  price: string
  image: string
  tag?: string
  promo?: {
    vip?: boolean
    color?: boolean
    hot?: boolean
  }
}

export default function Listings() {
  const [ads, setAds] = useState<Ad[]>([])

  useEffect(() => {
    fetch('/ads.json')
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].sort((a, b) => {
          const vipA = a.promo?.vip ? -1 : 0
          const vipB = b.promo?.vip ? -1 : 0
          return vipA - vipB
        })
        setAds(sorted)
      })
  }, [])

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
            <Link href={`/ads/${ad.id}`} key={ad.id}>
              <div
                className={`listing-card ${ad.promo?.color ? 'promo-color' : ''} ${ad.promo?.vip ? 'promo-vip' : ''}`}
              >
                {ad.promo?.vip && <span className="badge vip">⭐ VIP</span>}
                {ad.promo?.hot && <span className="badge hot">🔥 Топ</span>}
                {ad.tag && <span className="tag">{ad.tag}</span>}
                <img src={ad.image} alt={ad.title} />
                <div className="listing-info">
                  <h3>{ad.title}</h3>
                  <p className="price">{ad.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
