import React from "react";

const Header: React.FC = () => (
  <header className="flex items-center justify-between py-4 border-b">
    <div className="text-xl font-semibold">🚀 Simple Starter</div>
    <nav>
      <a className="mr-4 hover:underline" href="/">
        Home
      </a>
      <a className="hover:underline" href="/about">
        About
      </a>
    </nav>
  </header>
);

export default Header;
