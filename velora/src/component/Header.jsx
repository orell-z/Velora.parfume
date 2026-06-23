import { Link } from "react-router-dom";
const Header = () => {
    return(
        <header className="bg-stone-950 flex items-center justify-between py-7 px-8">
        <h1 className="text-4xl font-bold text-amber-400 ">Velora</h1>
        <nav className="flex items-center gap-6">
            <Link to="/" className="text-amber-400">Beranda</Link>
            <Link to="/produk" className="text-amber-400">Produk</Link>
            <Link to="/keranjang" className="text-amber-400">Keranjang</Link>
        </nav>
    </header>
    );
};
export default Header;