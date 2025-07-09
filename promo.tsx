import React from "react";
export default function Promo() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Промо обяви</h2>
      <ul className="list-disc ml-6 mt-2 text-gray-700">
        <li><strong>VIP</strong> – Цветен фон и най-горна позиция</li>
        <li><strong>TOP</strong> – Показва се първа в категорията</li>
        <li><strong>BEST</strong> – Специален етикет и рамка</li>
      </ul>
    </div>
  );
}
