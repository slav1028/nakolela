import React from "react";
export default function Login() {
  return (
    <form className="max-w-sm mx-auto mt-10 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Вход</h2>
      <input type="email" placeholder="Имейл" className="w-full p-2 border rounded mb-2" />
      <input type="password" placeholder="Парола" className="w-full p-2 border rounded mb-4" />
      <button className="w-full bg-green-500 text-white py-2 rounded">Влез</button>
    </form>
  );
}
