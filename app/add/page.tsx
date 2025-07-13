'use client'
import { useState } from 'react'

export default function AddListingPage() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    brand: '',
    model: '',
    city: '',
    year: '',
    price: '',
    description: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Обявата е публикувана:', formData)
    alert('Обявата е публикувана успешно!')
  }

  return (
    <div className="form-wrapper">
      <h1>Публикувай обява</h1>
      <form onSubmit={handleSubmit} className="listing-form">
        <input name="title" placeholder="Заглавие" value={formData.title} onChange={handleChange} required />
        
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Избери категория</option>
          <option value="motor">Мотор</option>
          <option value="bike">Велосипед</option>
          <option value="scooter">Тротинетка</option>
        </select>

        <input name="brand" placeholder="Марка" value={formData.brand} onChange={handleChange} />
        <input name="model" placeholder="Модел" value={formData.model} onChange={handleChange} />
        <input name="city" placeholder="Град" value={formData.city} onChange={handleChange} />
        <input name="year" type="number" placeholder="Година" value={formData.year} onChange={handleChange} />
        <input name="price" type="number" placeholder="Цена (лв)" value={formData.price} onChange={handleChange} />

        <textarea name="description" placeholder="Описание" value={formData.description} onChange={handleChange} rows={4} />

        <button type="submit">Публикувай обявата</button>
      </form>
    </div>
  )
}
