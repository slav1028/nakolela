import React from 'react';
import './style.css';

export default function Register() {
  return (
    <div className="form-wrapper">
      <h2>Регистрация</h2>
      <form>
        <input type="text" placeholder="Име" required />
        <input type="email" placeholder="Имейл" required />
        <input type="password" placeholder="Парола" required />
        <input type="password" placeholder="Потвърди парола" required />
        <button type="submit">Регистрирай се</button>
      </form>
    </div>
  );
}
