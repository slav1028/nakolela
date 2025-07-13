// detail.tsx

import React from "react";
import "./style.css";

export default function DetailPage() {
  const ad = {
    id: 1,
    title: "Електрически велосипед Devron",
    price: "2 500 лв.",
    location: "София",
    description:
      "Електрически велосипед Devron с мощна батерия и модерен дизайн. Идеален за градска и планинска среда. Нов, с гаранция.",
    image: "/1.jpg",
    category: "Велосипеди",
    condition: "Нов",
    year: 2023,
    seller: {
      name: "Иван Петров",
      phone: "0888 123 456",
      email: "ivan@example.com",
    },
  };

  return (
    <div className="container detail-page">
      <div className="image-section">
        <img src={ad.image} alt={ad.title} className="main-image" />
      </div>

      <div className="info-section">
        <h1>{ad.title}</h1>
        <p className="price">{ad.price}</p>
        <p>
          <strong>Локация:</strong> {ad.location}
        </p>
        <p>
          <strong>Категория:</strong> {ad.category}
        </p>
        <p>
          <strong>Състояние:</strong> {ad.condition}
        </p>
        <p>
          <strong>Година:</strong> {ad.year}
        </p>
        <p className="description">{ad.description}</p>

        <hr />

        <h3>Контакти с продавача</h3>
        <p>
          <strong>Име:</strong> {ad.seller.name}
        </p>
        <p>
          <strong>Телефон:</strong> {ad.seller.phone}
        </p>
        <p>
          <strong>Email:</strong> {ad.seller.email}
        </p>
      </div>
    </div>
  );
}
