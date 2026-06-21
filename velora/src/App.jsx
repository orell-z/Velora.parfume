import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/footer";
import Beranda from "./pages/Beranda";
import Produk from "./pages/Produk";
import Keranjang from "./pages/Keranjang";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/keranjang" element={<Keranjang />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
