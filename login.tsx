import React from 'react';
import './style.css';

export default function Login() {
  return (
    <div className="form-wrapper">
      <h2>Вход</h2>
      <form>
        <input type="email" placeholder="Имейл" required />
        <input type="password" placeholder="Парола" required />
        <button type="submit">Влез</button>
      </form>
    </div>
  );
}
