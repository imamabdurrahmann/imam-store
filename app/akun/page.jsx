import React from "react";
import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "Akun Game — IMAM STORE",
  description: "Akun gaming ready pakai semua server. Sudah dicek manual, bergaransi, bisa request akun custom.",
};

export default function AkunPage() {
  return (
    <>
      <div className="page-hero page-hero--purple">
        <div className="wrap">
          <div className="page-hero-inner">
            <div className="eyebrow">Dicek Manual & Bergaransi</div>
            <h1>Akun Game</h1>
            <p>Akun gaming ready pakai semua server. Sudah dicek manual, bergaransi, bisa request akun custom.</p>
          </div>
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-title">
              <span className="tdot"></span>Akun Game
            </div>
          </div>
          <ProductGrid category="akun" />
        </div>
      </section>
    </>
  );
}
