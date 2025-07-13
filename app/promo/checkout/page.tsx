'use client'
import { useState } from 'react'

export default function PromoCheckout() {
  const [formData, setFormData] = useState({
    listingId: '',
    promoType: 'vip',
  })

  const [success, setSuccess] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Промо пакет купен:', formData)
    setSuccess(true)
  }

  return (
    <div className="form-wrapper">
      <h1>Закупи промо пакет</h1>
      <form onSubmit={handleSubmit} className="listing-form">
        <input
          type="text"
          name="listingId"
          placeholder="ID на обява"
          value={formData.listingId}
          onChange={handleChange}
          required
        />

        <select name="promoType" value={formData.promoType} onChange={handleChange}>
          <option value="vip">⭐ VIP</option>
          <option value="color">🎨 Цветен фон</option>
          <option value="hot">🔥 Топ</option>
        </select>

        <button type="submit">Купи пакет</button>
      </form>

      {success && <p style={{ marginTop: '20px', color: 'green' }}>✅ Успешно закупен промо пакет!</p>}
    </div>
  )
}
