import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">

      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-4">

        {/* LOGO */}
        <div className="text-white text-lg md:text-xl font-semibold tracking-[3px]">
          CHIARO
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-12 text-white text-sm font-medium">
          <li className="cursor-pointer hover:text-gray-300">MENU</li>
          <li className="cursor-pointer hover:text-gray-300">REVIEWS</li>
          <li className="cursor-pointer hover:text-gray-300">LOCATIONS</li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-8 text-white text-sm">
          <span className="cursor-pointer hover:text-gray-300">
            CONTACT
          </span>

          <button className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
            BOOK NOW
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 backdrop-blur-lg text-white flex flex-col items-center gap-6 py-6">

          <li className="list-none cursor-pointer">MENU</li>
          <li className="list-none cursor-pointer">REVIEWS</li>
          <li className="list-none cursor-pointer">LOCATIONS</li>
          <li className="list-none cursor-pointer">CONTACT</li>

          <button className="border border-white px-6 py-2 rounded-full">
            BOOK NOW
          </button>

        </div>
      )}

    </nav>
  );
}