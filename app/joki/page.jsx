import React from "react";
import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "Joki Rank — IMAM STORE",
  description: "Naik rank bareng pro player. Aman, cepat, dan tidak menyebabkan ban. Bisa request jadwal.",
};

export default function JokiPage() {
  return (
    <>
      <div className="page-hero page-hero--orange">
        <div className="wrap">
          <div className="page-hero-inner">
            <div className="eyebrow">Pro Player Berpengalaman</div>
            <h1>Joki Rank</h1>
            <p>Naik rank bareng pro player. Aman, cepat, dan tidak menyebabkan ban. Bisa request jadwal.</p>
          </div>
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-title">
              <span className="tdot"></span>Joki Rank
            </div>
          </div>
          <ProductGrid category="joki" />
        </div>
      </section>
    </>
  );
}
