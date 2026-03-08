export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md">
      
      <div className="relative max-w-[1400px] mx-auto flex items-center justify-between px-10 py-5">

        {/* LOGO */}
        <div className="text-white text-xl font-semibold tracking-[4px]">
          CHIARO
        </div>

        {/* CENTER MENU */}
        <ul className="absolute left-1/2 -translate-x-1/2 flex items-center gap-16 text-white text-sm font-medium tracking-wider">
          <li className="cursor-pointer hover:text-gray-300 transition">
            MENU
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition">
            REVIEWS
          </li>
          <li className="cursor-pointer hover:text-gray-300 transition">
            LOCATIONS
          </li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-8 text-white text-sm">
          <span className="cursor-pointer hover:text-gray-300 transition">
            CONTACT
          </span>

          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
            BOOK NOW
          </button>
        </div>

      </div>

    </nav>
  );
}