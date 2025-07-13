'use client'
import { useState } from 'react'

export default function AdminPanel() {
  const [selectedId, setSelectedId] = useState('')
  const [selectedPromo, setSelectedPromo] = useState('')
  const [result, setResult] = useState<string | null>(null)

  const handleApply = () => {
    if (!selectedId || !selectedPromo) {
      setResult('❌ Моля, попълнете и двете полета.')
      return
    }

    // Тук по-късно може да добавим API или базата
    console.log('Маркирана обява:', selectedId, selectedPromo)
    setResult(`✅ Обява #${selectedId} маркирана като ${selectedPromo.toUpperCase()}`)
  }

  return (
    <div className="form-wrapper">
      <h1>Админ: Маркирай обява като промо</h1>
      <input
        type="text"
        placeholder="ID на обява"
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
      />

      <select value={selectedPromo} onChange={(e) => setSelectedPromo(e.target.value)}>
        <option value="">Избери промо</option>
        <option value="vip">⭐ VIP</option>
        <option value="color">🎨 Цветна</option>
        <option value="hot">🔥 Топ</option>
      </select>

      <button onClick={handleApply}>Маркирай</button>

      {result && <p style={{ marginTop: '20px' }}>{result}</p>}
    </div>
  )
}
