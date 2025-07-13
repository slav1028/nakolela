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
  const [filter, setFilter] = useState<'all' | 'vip' | 'color' | 'hot'>('all')

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

  const filteredAds = ads.filter((ad) => {
    if (filter === 'all') return true
    return ad.promo?.[filter] === true
  })

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

        <div className="promo-filters">
          <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Всички</button>
          <button onClick={() => setFilter('vip')} className={filter === 'vip' ? 'active' : ''}>Само VIP</button>
          <button onClick={() => setFilter('color')} className={filter === 'color' ? 'active' : ''}>С цветен фон</button>
          <button onClick={() => setFilter('hot')} className={filter === 'hot' ? 'active' : ''}>Само Топ</button>
        </div>

        <div className="grid">
          {filteredAds.map((ad) => (
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
