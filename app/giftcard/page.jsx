import React from "react";
import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "Gift Card & Voucher — IMAM STORE",
  description: "Google Play, Steam Wallet, Garena, Nintendo eShop, dan banyak lagi. Kode dikirim instan ke WhatsApp.",
};

export default function GiftcardPage() {
  return (
    <>
      <div className="page-hero page-hero--green">
        <div className="wrap">
          <div className="page-hero-inner">
            <div className="eyebrow">Langsung Aktif</div>
            <h1>Gift Card & Voucher</h1>
            <p>Google Play, Steam Wallet, Garena, Nintendo eShop, dan banyak lagi. Kode dikirim instan ke WhatsApp.</p>
          </div>
        </div>
      </div>

      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-title">
              <span className="tdot"></span>Gift Card
            </div>
          </div>
          <ProductGrid category="giftcard" />
        </div>
      </section>
    </>
  );
}
