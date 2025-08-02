import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <Header />
      <h1 className="text-3xl font-bold mt-6">Welcome to Simple Next.js Starter</h1>
      <p className="mt-4">
        This is a minimal Next.js + TypeScript + Tailwind project. Edit <code>app/page.tsx</code> to get started.
      </p>
      <div className="mt-8">
        <a
          href="/api/hello"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Call Sample API
        </a>
      </div>
    </main>
  );
}
