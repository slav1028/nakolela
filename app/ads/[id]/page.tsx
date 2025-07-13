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
