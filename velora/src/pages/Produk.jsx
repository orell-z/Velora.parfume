const Produk = () => {
  return (
    <>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-yellow-600">
            Koleksi Parfum Velora
          </h2>

          <p className="text-gray-300 mt-4 text-lg">
            Temukan aroma premium yang mencerminkan karakter dan gaya Anda.
          </p>

          <div className="max-w-xl mx-auto mt-8 relative">
            <i
              className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-yellow-600"
            ></i>

            <input
              type="text"
              placeholder="Cari parfum..."
              className="w-full pl-14 pr-5 py-4 rounded-xl bg-gray-900 text-white border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 placeholder-gray-500"
            />
          </div>
        </div>
      </section>

      {/* Produk */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {/* Card 1 */}
            <div className="group bg-gray-900 border border-yellow-600 rounded-2xl overflow-hidden hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-600/20 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1541643600914-78b084683601"
                alt="Velora Noir"
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-white">
                  Velora Noir
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Aroma woody dan musk yang elegan.
                </p>

                <div className="mt-4">
                  <span className="text-yellow-600 font-bold text-lg">
                    Rp199.000
                  </span>
                </div>

                <div className="flex gap-2 mt-5">
                  <button className="flex-1 bg-yellow-600 text-black font-semibold py-2 rounded-lg hover:bg-yellow-700 hover:text-white transition">
                    <i className="fa-solid fa-bag-shopping mr-2"></i>
                    Beli
                  </button>

                  <button className="w-12 border border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-600 hover:text-black transition">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-gray-900 border border-yellow-600 rounded-2xl overflow-hidden hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-600/20 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f"
                alt="Velora Bloom"
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-white">
                  Velora Bloom
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Floral segar dan feminin.
                </p>

                <div className="mt-4">
                  <span className="text-yellow-600 font-bold text-lg">
                    Rp179.000
                  </span>
                </div>

                <div className="flex gap-2 mt-5">
                  <button className="flex-1 bg-yellow-600 text-black font-semibold py-2 rounded-lg hover:bg-yellow-700 hover:text-white transition">
                    <i className="fa-solid fa-bag-shopping mr-2"></i>
                    Beli
                  </button>

                  <button className="w-12 border border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-600 hover:text-black transition">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-gray-900 border border-yellow-600 rounded-2xl overflow-hidden hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-600/20 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1615634260167-c8cdede054de"
                alt="Velora Ocean"
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-white">
                  Velora Ocean
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Fresh aquatic untuk aktivitas harian.
                </p>

                <div className="mt-4">
                  <span className="text-yellow-600 font-bold text-lg">
                    Rp189.000
                  </span>
                </div>

                <div className="flex gap-2 mt-5">
                  <button className="flex-1 bg-yellow-600 text-black font-semibold py-2 rounded-lg hover:bg-yellow-700 hover:text-white transition">
                    <i className="fa-solid fa-bag-shopping mr-2"></i>
                    Beli
                  </button>

                  <button className="w-12 border border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-600 hover:text-black transition">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-gray-900 border border-yellow-600 rounded-2xl overflow-hidden hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-600/20 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1523293182086-7651a899d37f"
                alt="Velora Gold"
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-white">
                  Velora Gold
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Vanilla dan amber premium.
                </p>

                <div className="mt-4">
                  <span className="text-yellow-600 font-bold text-lg">
                    Rp249.000
                  </span>
                </div>

                <div className="flex gap-2 mt-5">
                  <button className="flex-1 bg-yellow-600 text-black font-semibold py-2 rounded-lg hover:bg-yellow-700 hover:text-white transition">
                    <i className="fa-solid fa-bag-shopping mr-2"></i>
                    Beli
                  </button>

                  <button className="w-12 border border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-600 hover:text-black transition">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Produk;