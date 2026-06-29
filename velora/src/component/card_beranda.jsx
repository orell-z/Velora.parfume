const Cardberanda = () => {
    return (
        <>
        {/* 2. BRAND PILIHAN */}
        <section className="py-12 px-4 md:px-8 text-left w-full">
        <h2 className="font-bold text-2xl text-amber-400 mb-6">
          Brand Parfum Pilihan
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-2">
          <article className="w-full h-32 bg-zinc-900 border border-zinc-800 rounded-xl shadow-sm hover:border-zinc-700 transition flex items-center justify-center p-4">
            <span className="text-gray-400 text-sm font-medium">Logo Brand</span>
          </article>

          <article className="w-full h-32 bg-zinc-900 border border-zinc-800 rounded-xl shadow-sm hover:border-zinc-700 transition flex items-center justify-center p-4">
            <span className="text-gray-400 text-sm font-medium">Logo Brand</span>
          </article>

          <article className="w-full h-32 bg-zinc-900 border border-zinc-800 rounded-xl shadow-sm hover:border-zinc-700 transition flex items-center justify-center p-4">
            <span className="text-gray-400 text-sm font-medium">Logo Brand</span>
          </article>

          <article className="w-full h-32 bg-zinc-900 border border-zinc-800 rounded-xl shadow-sm hover:border-zinc-700 transition flex items-center justify-center p-4">
            <span className="text-gray-400 text-sm font-medium">Logo Brand</span>
          </article>
        </div>
      </section>

      {/* 3. KEUNGGULAN KAMI */}
      <section className="py-12 px-4 md:px-8 text-left w-full">
        <h3 className="text-2xl font-bold text-amber-400 mb-6">
          Keunggulan Kami
        </h3>
        <div className="flex gap-4 flex-wrap justify-start">
          <span className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg text-gray-200 text-sm font-medium">✓ Original</span>
          <span className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg text-gray-200 text-sm font-medium">✓ Koleksi Langka</span>
          <span className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg text-gray-200 text-sm font-medium">✓ Limited Edition</span>
          <span className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg text-gray-200 text-sm font-medium">✓ Discontinued</span>
        </div>
      </section>

      {/* 4. PRODUK FAVORIT */}
      <section className="py-12 px-4 md:px-8 text-left w-full pb-24">
        <h3 className="text-2xl font-bold text-amber-400 mb-6">
          Produk Favorit
        </h3>
        <div className="flex gap-4 flex-wrap justify-start">
          <div className="bg-zinc-900 p-5 rounded-xl w-60 min-h-32 border border-zinc-800 shadow-md">
            <h4 className="font-bold text-amber-400">Dior Sauvage</h4>
            <p className="text-gray-300 mt-2 text-sm">Aroma fresh dan maskulin.</p>
          </div>
          <div className="bg-zinc-900 p-5 rounded-xl w-60 min-h-32 border border-zinc-800 shadow-md">
            <h4 className="font-bold text-amber-400">Bleu de Chanel</h4>
            <p className="text-gray-300 mt-2 text-sm">Elegan dengan sentuhan woody.</p>
          </div>
          <div className="bg-zinc-900 p-5 rounded-xl w-60 min-h-32 border border-zinc-800 shadow-md">
            <h4 className="font-bold text-amber-400">Creed Aventus</h4>
            <p className="text-gray-300 mt-2 text-sm">Parfum premium yang eksklusif.</p>
          </div>
        </div>
      </section>
        </>
    );
};

export default Cardberanda;