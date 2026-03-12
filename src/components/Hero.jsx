import pizza from "../assets/Pizza.png";
import pasta from "../assets/Pasta.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen px-6 md:px-12 bg-gradient-to-br from-blue-400 via-blue-700 to-blue-600 flex items-center justify-center overflow-hidden">

      {/* Background blur circles */}
      <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white rounded-full blur-[120px] left-[-120px] top-20 opacity-60"></div>
      <div className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white rounded-full blur-[120px] right-[-120px] bottom-10 opacity-60"></div>

      {/* LEFT PIZZA (hide on small screens) */}
      <img
  src={pizza}
  alt="pizza"
  className="absolute -left-20 top-20 w-[180px] sm:w-[260px] md:w-[420px] animate-float drop-shadow-2xl"
/>

      {/* RIGHT PASTA */}
      <img
  src={pasta}
  alt="pasta"
  className="absolute -right-20 bottom-10 w-[160px] sm:w-[240px] md:w-[360px] animate-spin [animation-duration:15s] drop-shadow-xl"
/>


      {/* CENTER CONTENT */}
      <div className="text-center z-10 max-w-3xl">

        {/* Tag */}
        <span className="border border-black/20 backdrop-blur-sm bg-white/40 px-4 py-2 rounded-full text-xs tracking-[2px] font-medium">
          ITALIAN RESTAURANT
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[110px] font-black leading-tight text-[#1c1208]">
          PIZZA <br /> & PASTA
        </h1>

        {/* Script text */}
        <h2 className="font-[Great_Vibes] text-4xl sm:text-5xl md:text-6xl lg:text-[90px] text-white -mt-2 md:-mt-6">
          Paradise
        </h2>

        {/* CTA */}
        <button className="mt-8 bg-green-600 text-white px-8 md:px-14 py-3 md:py-4 rounded-full text-sm md:text-lg font-semibold hover:scale-105 hover:bg-green-700 transition shadow-xl">
          EXPLORE NOW
        </button>

        <p className="mt-4 text-sm font-semibold text-[#1c1208] cursor-pointer hover:text-red-500 transition">
          LEARN MORE
        </p>

      </div>

      {/* RIGHT DESCRIPTION (hide on mobile) */}
      <div className="hidden md:block absolute right-28 bottom-56 max-w-xs text-sm text-[#1c1208] leading-relaxed">

        <p>
          Savor the magic of artisanal pizzas and handmade pastas
          crafted with authentic Italian tradition.
        </p>

        <p className="text-white text-xl italic mt-2">
          Assapora il paradiso
        </p>

      </div>

      {/* AWARD */}
      <div className="hidden md:block absolute left-36 bottom-28 text-sm text-[#1c1208]">
        <p>
          <span className="text-white italic">
            Italian Restaurant
          </span>{" "}
          of the Year
        </p>
      </div>

    </section>
  );
}