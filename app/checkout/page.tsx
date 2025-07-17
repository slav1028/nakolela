// app/checkout/page.tsx
'use client'
import { useState } from 'react'

export default function Checkout() {
  const [selected, setSelected] = useState('vip')

  const handlePay = () => {
    alert(`Закупен пакет: ${selected.toUpperCase()} ✅`)
  }

  return (
    <div style={{ padding: 32 }}>
      <h1>Закупи Промо Статус</h1>
      <div style={{ display: 'grid', gap: 16 }}>
        <label>
          <input type="radio" value="vip" checked={selected === 'vip'} onChange={(e) => setSelected(e.target.value)} />
          ⭐ VIP – най-горе + звезда
        </label>
        <label>
          <input
            type="radio"
            value="color"
            checked={selected === 'color'}
            onChange={(e) => setSelected(e.target.value)}
          />
          🎨 Цветна обява
        </label>
        <label>
          <input
            type="radio"
            value="hot"
            checked={selected === 'hot'}
            onChange={(e) => setSelected(e.target.value)}
          />
          🔥 ТОП – маркирана със знак
        </label>
        <button onClick={handlePay}>Плати</button>
      </div>
    </div>
  )
}
