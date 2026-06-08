import React from "react";
import HomeButton from "../component/HomeButton";

const Beranda = () => {
  return (
    <>
    <main className="bg-stone-950 min-h-screen text-white w-full">
      <section className="py-12 px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="text-left">
            <h1 className="text-3xl font-bold text-amber-400 py-1">
              Banyak Brand Premium, Satu Tempat.
            </h1>
            <p className="text-base md:text-lg text-neutral-50 leading-relaxed max-w-2xl mb-8 py-3">
              Temukan koleksi parfum original dari brand-brand terbaik dunia dengan harga terbaik untuk setiap gaya dan kepribadian.
              Velora adalah reseller parfum terpercaya yang menghadirkan berbagai pilihan aroma premium dalam satu platform yang mudah digunakan.
            </p>

            <div className="flex flex-wrap gap-4 justify-start">
              <HomeButton variant="primary">Belanja Sekarang</HomeButton>
              <HomeButton variant="secondary">Lihat Semua Brand</HomeButton>
            </div>
          </div>

          <div className="flex justify-center md:justify-end w-full">
            <div className="w-full max-w-md h-80 md:h-[400px] bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden flex items-center justify-center relative shadow-xl">
              <span className="text-zinc-500 text-sm font-medium">Tempat Foto Parfum (Banner)</span>
            </div>
          </div>

        </div>
      </section>

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

    </main>
    </>
  );
};

export default Beranda;