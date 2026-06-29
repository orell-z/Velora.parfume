import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/login'; // Huruf kecil sesuai nama file 'login.jsx' kamu
import Beranda from './pages/Beranda';
import Produk from './pages/Produk';
import Keranjang from './pages/Keranjang';
import Header from './component/Header';

// Pelindung Rute Internal: Hanya bisa diakses jika sudah login
const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('velora_token') === 'true';
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

// Tata Letak Aplikasi Internal (Dengan Header Bawaan)
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute Login Utama (Selalu bisa diakses berkali-kali tanpa dialihkan paksa) */}
        <Route path="/" element={<Login />} />

        {/* Rute Terproteksi (Butuh Login) */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/beranda" element={<Beranda />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/keranjang" element={<Keranjang />} />
          </Route>
        </Route>

        {/* Antisipasi jika mengetik rute asal-asalan */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;