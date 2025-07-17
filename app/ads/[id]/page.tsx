// app/ads/[id]/page.tsx
import { notFound } from 'next/navigation'
import ads from '@/ads.json'

export async function generateStaticParams() {
  return ads.map((ad) => ({ id: ad.id.toString() }))
}

export default function AdDetail({ params }: { params: { id: string } }) {
  const ad = ads.find((item) => item.id.toString() === params.id)

  if (!ad) return notFound()

  return (
    <div className="ad-wrapper">
      <div className="ad-images">
        <img src={ad.image || '/placeholder.jpg'} alt={ad.title} />
      </div>

      <div className="ad-info">
        <h1>{ad.title}</h1>
        <p className="ad-price">{ad.price} лв</p>
        <p><strong>Град:</strong> {ad.city}</p>
        <p><strong>Година:</strong> {ad.year}</p>
        <p><strong>Категория:</strong> {ad.category}</p>
        <p><strong>Марка:</strong> {ad.brand}</p>
        <p><strong>Модел:</strong> {ad.model}</p>
        <p className="ad-description">{ad.description}</p>
      </div>
    </div>
  )
}
// app/ads/[id]/page.tsx
'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

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
export default function AdDetailPage() {
  const { id } = useParams()
  const [ad, setAd] = useState<Ad | null>(null)

  useEffect(() => {
    fetch('/ads.json')
      .then(res => res.json())
      .then(data => {
        const selected = data.find((item: Ad) => item.id === parseInt(id as string))
        setAd(selected)
      })
  }, [id])

  if (!ad) return <p style={{ padding: '24px' }}>Зареждане...</p>

  return (
    <div style={{ padding: '24px' }}>
      <Link href="/listings">← Назад към обявите</Link>
      <h1>{ad.title}</h1>
      <img src={ad.image} alt={ad.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginTop: '12px' }} />
      <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#2ecc71', marginTop: '20px' }}>{ad.price}</p>
      {ad.promo?.vip && <div style={{ color: 'gold', fontWeight: 'bold' }}>⭐ VIP обява</div>}
      {ad.promo?.hot && <div style={{ color: 'orangered' }}>🔥 Топ обява</div>}
      {ad.tag && <div style={{ marginTop: '10px', backgroundColor: '#eee', padding: '4px 8px', borderRadius: '6px', display: 'inline-block' }}>{ad.tag}</div>}
      <button style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#f39c12', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
        Свържи се с продавача
      </button>
    </div>
  )
}
