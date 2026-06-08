const Keranjang = () => {
  return (
    <div className="bg-black min-h-screen text-white">

      <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-800">

        <div className="flex items-center gap-8">
          <h1 className="text-7xl font-bold text-yellow-500">
            Velora
          </h1>
        </div>

        <div className="flex w-[70%]">
          <input
            type="text"
            placeholder="Cari parfum favoritmu"
            className="w-full bg-black border border-yellow-500 rounded-l-3xl px-8 py-5 text-2xl text-white outline-none"
          />

          <button className="bg-yellow-500 text-black font-bold text-2xl px-12 rounded-r-3xl hover:bg-yellow-400 transition">
            Cari
          </button>
        </div>

      </nav>

    </div>
  );
};

export default Keranjang;