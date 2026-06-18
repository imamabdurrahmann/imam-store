import React from "react";
import HeroCarousel from "@/components/HeroCarousel";
import FlashSale from "@/components/FlashSale";
import GameGrid from "@/components/GameGrid";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <>
      {/* HERO CAROUSEL */}
      <HeroCarousel />

      {/* FLASH SALE */}
      <FlashSale isBig={false} />

      {/* GAME GRID */}
      <GameGrid />

      {/* ALL PRODUCTS */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-title">
              <span className="tdot"></span>Semua Produk
            </div>
          </div>
          <ProductGrid category="all" />
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="block">
        <div className="wrap">
          <div className="trust">
            <div className="trust-item">
              <div className="trust-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                  <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
                </svg>
              </div>
              <div>
                <h4>Proses Instan</h4>
                <p>Top up otomatis masuk dalam hitungan detik.</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                  <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <h4>100% Aman</h4>
                <p>Transaksi bergaransi, akun dicek manual.</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h4>Buka 24 Jam</h4>
                <p>Admin standby kapan pun kamu mau order.</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M3 11l18-8-8 18-2-8-8-2Z" />
                </svg>
              </div>
              <div>
                <h4>Harga Termurah</h4>
                <p>Dijamin lebih murah dari toko sebelah.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
