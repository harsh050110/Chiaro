import pizza from "../assets/Pizza.png";
import pasta from "../assets/Pasta.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-400 via-blue-700 to-blue-600 flex items-center justify-center overflow-hidden">

      {/* Background blur circles */}
      <div className="absolute w-[500px] h-[500px] bg-white rounded-full blur-[120px] left-[-150px] top-20 opacity-60"></div>
      <div className="absolute w-[400px] h-[400px] bg-white rounded-full blur-[120px] right-[-120px] bottom-10 opacity-60"></div>

      {/* LEFT PIZZA */}
      <img
        src={pizza}
        alt="pizza"
        className="absolute left-[-120px] top-28 w-[460px] animate-float drop-shadow-2xl"
      />

      {/* RIGHT PASTA */}
      <img
        src={pasta}
        alt="pasta"
        className="absolute right-[-80px] bottom-16 w-[380px] animate-float drop-shadow-xl"
      />

      {/* CENTER CONTENT */}
      <div className="text-center z-10 max-w-3xl">

        {/* Tag */}
        <span className="border border-black/20 backdrop-blur-sm bg-white/40 px-5 py-2 rounded-full text-xs tracking-[3px] font-medium">
          ITALIAN RESTAURANT
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-[110px] font-black leading-[110px] text-[#1c1208]">
          PIZZA <br /> & PASTA
        </h1>

        <h2 className="font-[Great_Vibes] text-[90px] text-white -mt-6">
          Paradise
        </h2>

        {/* CTA */}
        <button className="mt-10 bg-green-600 text-white px-14 py-4 rounded-full text-lg font-semibold hover:scale-105 hover:bg-green-700 transition shadow-xl">
          EXPLORE NOW
        </button>

        <p className="mt-5 text-sm font-semibold text-[#1c1208] cursor-pointer hover:text-red-500 transition">
          LEARN MORE
        </p>

      </div>

      {/* RIGHT DESCRIPTION */}
      <div className="absolute right-28 bottom-56 max-w-xs text-sm text-[#1c1208] leading-relaxed">

        <p>
          Savor the magic of artisanal pizzas and handmade pastas
          crafted with authentic Italian tradition.
        </p>

        <p className="text-white text-xl italic mt-2">
          Assapora il paradiso
        </p>

      </div>

      {/* AWARD */}
      <div className="absolute left-36 bottom-28 text-sm text-[#1c1208]">

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