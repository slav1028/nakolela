// app/layout.tsx
import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'

export const metadata = {
  title: 'NaKolela',
  description: 'Обяви за мотори, велосипеди и тротинетки',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="bg">
      <body>
        <header className="header">
          <div className="container">
            <Link href="/" className="logo">
              <img src="/logo.svg" alt="NaKolela" />
            </Link>
            <nav className="nav">
              <Link href="/listings">Обяви</Link>
              <Link href="/promo">Промо</Link>
              <Link href="/contacts">Контакти</Link>
              <Link href="/profile">Профил</Link>
            </nav>
          </div>
        </header>

        <main className="main">{children}</main>

        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} NaKolela.bg – Всички права запазени.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

