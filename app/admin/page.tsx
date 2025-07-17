// app/admin/page.tsx
'use client'
import { useEffect, useState } from 'react'

export default function AdminPanel() {
  const [ads, setAds] = useState<any[]>([])

  useEffect(() => {
    fetch('/ads.json')
      .then((res) => res.json())
      .then((data) => setAds(data))
  }, [])

  const togglePromo = (id: number, type: 'vip' | 'color' | 'hot') => {
    const updated = ads.map((ad) =>
      ad.id === id
        ? {
            ...ad,
            promo: { ...(ad.promo || {}), [type]: !(ad.promo?.[type] ?? false) },
          }
        : ad
    )
    setAds(updated)
    alert(`Обява ${id} маркирана с ${type.toUpperCase()} ✅`)
  }

  return (
    <div style={{ padding: 32 }}>
      <h1>Админ Панел</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Заглавие</th>
            <th>VIP</th>
            <th>Цвят</th>
            <th>Топ</th>
          </tr>
        </thead>
        <tbody>
          {ads.map((ad) => (
            <tr key={ad.id}>
              <td>{ad.id}</td>
              <td>{ad.title}</td>
              <td>
                <button onClick={() => togglePromo(ad.id, 'vip')}>
                  {ad.promo?.vip ? '✅' : '⬜️'}
                </button>
              </td>
              <td>
                <button onClick={() => togglePromo(ad.id, 'color')}>
                  {ad.promo?.color ? '✅' : '⬜️'}
                </button>
              </td>
              <td>
                <button onClick={() => togglePromo(ad.id, 'hot')}>
                  {ad.promo?.hot ? '✅' : '⬜️'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
