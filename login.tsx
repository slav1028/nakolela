'use client';
import { useState } from 'react';
import Link from 'next/link';
import './style.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔐 Тук ще добавим логика за вход
    alert(`Вход с:\nИмейл: ${email}\nПарола: ${password}`);
  };

  return (
    <div className="auth-container">
      <header className="site-header">
        <div className="logo">NaKolela</div>
        <nav>
          <Link href="/">Начало</Link>
          <Link href="/listings">Обяви</Link>
          <Link href="/promo">Промо</Link>
          <Link href="/contacts">Контакти</Link>
        </nav>
      </header>

      <main className="auth-form-wrapper">
        <h1>Вход</h1>
        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Имейл:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Парола:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button type="submit">Влез</button>
        </form>

        <p className="auth-redirect">
          Нямаш профил? <Link href="/register">Регистрирай се</Link>
        </p>
      </main>
    </div>
  );
}
