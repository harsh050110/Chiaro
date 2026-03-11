export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 ">

      <div className="max-w-[1200px] mx-auto px-8">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* MAP */}
          <div>
            <iframe
              className="rounded-lg w-full h-40"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.282962111194!2d75.87041899999997!3d26.807695900000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc959140a9163%3A0x55c04db14a65be95!2sChiaro%20-%20Pizzeria%2C%20Bistro%20%26%20Coffee!5e1!3m2!1sen!2sin!4v1773248932757!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>

          {/* ADDRESS */}
          <div>
            <h3 className="text-white text-xl mb-4 font-semibold">
              Address
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              96 East Central Park Road,
              <br />
              New York, USA
            </p>
          </div>

          {/* DETAILS */}
          <div>
            <h3 className="text-white text-xl mb-4 font-semibold">
              Details
            </h3>

            <ul className="text-gray-300 text-sm space-y-2">
              <li>Menu</li>
              <li>Reservations</li>
              <li>Time</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white text-xl mb-4 font-semibold">
              Contact Us
            </h3>

            <p className="text-gray-300 text-sm mb-2">
              +198-0183792
            </p>

            <p className="text-gray-300 text-sm">
              xxyyy@gmail.com
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

        <p className="text-gray-400 text-sm">
  © Copyright 2020 Powered By{" "}
  <a
    href="https://harshdev05.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-700 hover:underline"
  >
    Harsh Kumar
  </a>
</p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-4 md:mt-0">

            <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-yellow-400 hover:text-black transition cursor-pointer">
              f
            </div>

            <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-yellow-400 hover:text-black transition cursor-pointer">
              t
            </div>

            <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-yellow-400 hover:text-black transition cursor-pointer">
              in
            </div>

            <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-yellow-400 hover:text-black transition cursor-pointer">
              ▶
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}