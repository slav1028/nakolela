import React from "react";

export default function Contacts() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#2c3e50]">
      <header className="bg-[#2ecc71] text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">NaKolela</h1>
        <nav className="space-x-6">
          <a href="home.tsx" className="hover:underline">Начало</a>
          <a href="listings.tsx" className="hover:underline">Обяви</a>
          <a href="promo.tsx" className="hover:underline">Промо</a>
          <a href="contacts.tsx" className="underline font-semibold">Контакти</a>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto py-12 px-6 bg-white mt-10 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Свържи се с нас</h2>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Име</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Вашето име"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Имейл</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="example@mail.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Съобщение</label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none"
              placeholder="Какво бихте искали да ни споделите?"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#f39c12] hover:bg-[#e67e22] text-white font-bold py-2 px-6 rounded"
          >
            Изпрати
          </button>
        </form>
      </main>

      <footer className="text-center py-6 text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} NaKolela. Всички права запазени.
      </footer>
    </div>
  );
}
// app/contacts/page.tsx
export default function ContactsPage() {
  return (
    <div style={{ padding: '24px' }}>
      <h1>Контакти</h1>
      <p>Имейл: <a href="mailto:contact@nakolela.io">contact@nakolela.io</a></p>
      <p>Може да ни пишете за партньорства, обяви, или предложения.</p>
      <form style={{ marginTop: '20px', maxWidth: '400px' }}>
        <input placeholder="Име" style={inputStyle} />
        <input placeholder="Имейл" style={inputStyle} />
        <textarea placeholder="Съобщение" style={{ ...inputStyle, height: '100px' }} />
        <button type="submit" style={buttonStyle}>Изпрати</button>
      </form>
    </div>
  )
}

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
}

const buttonStyle = {
  backgroundColor: '#2ecc71',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
}
