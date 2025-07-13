// register.tsx
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Регистрацията е пратена (симулация).");
    // TODO: Тук ще вкараме реална логика
  };

  return (
    <>
      <Head>
        <title>Регистрация | NaKolela</title>
      </Head>

      <header className="header">
        <h1>Създай акаунт</h1>
        <nav>
          <Link href="/">Начало</Link> |{" "}
          <Link href="/login">Вход</Link> |{" "}
          <Link href="/register">Регистрация</Link>
        </nav>
      </header>

      <main className="container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>Име:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Имейл:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Парола:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Регистрирай се</button>
        </form>
      </main>
    </>
  );
};

export default RegisterPage;
