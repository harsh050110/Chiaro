import restaurant from "../assets/reservation.jpeg";

export default function Reservation() {
  return (
    <section className="relative py-32 bg-blue-700 overflow-hidden">

      <div className="max-w-[1300px] mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white">

          <h2 className="text-5xl font-serif mb-4 tracking-wide">
            RESERVATIONS AT CHIARO
          </h2>

          <p className="text-black italic text-2xl mb-8">
            Reserve a table & enjoy the CHIARO experience
          </p>

          <p className="text-white/90 leading-relaxed max-w-lg">
            At Chiaro, we believe every meal is an experience worth savoring.
            Whether you're planning a romantic evening, a family dinner, or a
            special celebration with friends, we invite you to join us for a
            memorable Italian dining experience.
          </p>
          <a
  href="https://www.swiggy.com/restaurants/chiaro-pizzeria-bistro-and-coffee-jagatpura-jaipur-1320012/dineout"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
    Reserve a Table
  </button>
</a>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* decorative circle */}
          <div className="absolute w-[420px] h-[420px] bg-yellow-400/30 rounded-full blur-3xl"></div>

          <img
            src={restaurant}
            alt="restaurant"
            className="relative rounded-3xl shadow-2xl w-[420px]"
          />

        </div>

      </div>

    </section>
  );
}