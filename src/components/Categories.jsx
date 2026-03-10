import burger from "../assets/Coffee.png";
import pizza from "../assets/Pizza2.png";
import fries from "../assets/Pasta2.png";

export default function Categories() {
  return (
    <section className="py-28 bg-blue-700">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* TOP TEXT */}
        <div className="flex justify-between items-center mb-20">

          <h2 className="text-5xl font-bold text-white leading-tight">
            Best <span className="text-red-500">Delivered</span> <br />
            Categories
          </h2>

          <p className="max-w-sm text-gray-300 text-sm leading-relaxed">
            Here are some of our best distributed categories.
            If you want you can order from here.
          </p>

        </div>

        {/* CATEGORY CARDS */}
        <div className="grid md:grid-cols-3 gap-16 text-center">

          {/* BURGER */}
          <div className="group">
            <img
              src={burger}
              className="w-56 mx-auto group-hover:scale-110 transition duration-300"
            />

            <h3 className="mt-6 text-xl font-semibold text-white">
              Coffee
            </h3>

            <p className="text-red-500 text-sm mt-2 cursor-pointer">
              Order Now →
            </p>
          </div>

          {/* PIZZA */}
          <div className="group">
            <img
              src={pizza}
              className="w-56 mx-auto group-hover:scale-110 transition duration-300"
            />

            <h3 className="mt-6 text-xl font-semibold text-white">
               Pizza
            </h3>

            <p className="text-red-500 text-sm mt-2 cursor-pointer">
              Order Now →
            </p>
          </div>

          {/* FRIES */}
          <div className="group">
            <img
              src={fries}
              className="w-56 mx-auto group-hover:scale-110 transition duration-300"
            />

            <h3 className="mt-6 text-xl font-semibold text-white">
              Pasta
            </h3>

            <p className="text-red-500 text-sm mt-2 cursor-pointer">
              Order Now →
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}