import React from "react";
import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "Top Up Game — IMAM STORE",
  description: "Diamond, UC, Genesis Crystal, VP, Robux, dan semua currency game ada di sini. Harga termurah, proses kilat.",
};

export default function TopupPage() {
  return (
    <>
      <div className="page-hero page-hero--teal">
        <div className="wrap">
          <div className="page-hero-inner">
            <div className="eyebrow">Proses Instan 24 Jam</div>
            <h1>Top Up Game</h1>
            <p>Diamond, UC, Genesis Crystal, VP, Robux, dan semua currency game ada di sini. Harga termurah, proses kilat.</p>
          </div>
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-title">
              <span className="tdot"></span>Top Up Game
            </div>
          </div>
          <ProductGrid category="topup" />
        </div>
      </section>
    </>
  );
}
