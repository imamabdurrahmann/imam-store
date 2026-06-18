import React from "react";
import FlashSale from "@/components/FlashSale";
import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "Flash Sale — IMAM STORE",
  description: "Harga dicoret habis-habisan. Stok terbatas, rebutan sekarang sebelum kehabisan!",
};

export default function FlashsalePage() {
  return (
    <>
      {/* FLASH SALE HERO WITH BIG COUNTDOWN */}
      <FlashSale isBig={true} />

      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-title">
              <span className="tdot"></span>Produk Flash Sale
            </div>
          </div>
          <ProductGrid category="flash" />
        </div>
      </section>
    </>
  );
}
