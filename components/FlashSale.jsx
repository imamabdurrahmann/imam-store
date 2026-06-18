"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function FlashSale({ isBig = false }) {
  const [secs, setSecs] = useState(2 * 3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecs((prev) => (prev > 0 ? prev - 1 : 2 * 3600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;

  const pad = (num) => String(num).padStart(2, "0");

  const flashProducts = products.filter((p) => p.flash);

  if (isBig) {
    return (
      <div className="page-hero page-hero--sale">
        <div className="wrap">
          <div className="page-hero-inner">
            <div className="eyebrow">Penawaran Terbatas</div>
            <h1>Flash Sale Hari Ini</h1>
            <p>Harga dicoret habis-habisan. Stok terbatas, rebutan sekarang sebelum kehabisan!</p>
            <div className="countdown-big">
              <div className="cd-unit-wrap">
                <div className="cd-box-big">{pad(h)}</div>
                <span className="cd-unit-label">Jam</span>
              </div>
              <span className="cd-sep-big">:</span>
              <div className="cd-unit-wrap">
                <div className="cd-box-big">{pad(m)}</div>
                <span className="cd-unit-label">Menit</span>
              </div>
              <span className="cd-sep-big">:</span>
              <div className="cd-unit-wrap">
                <div className="cd-box-big">{pad(s)}</div>
                <span className="cd-unit-label">Detik</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="block">
      <div className="wrap">
        <div className="flash">
          <div className="flash-top">
            <div className="flash-left">
              <div className="flash-badge">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 19, height: 19 }}>
                  <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
                </svg>
                FLASH SALE
              </div>
              <div className="countdown">
                <span className="cd-label">Berakhir dalam</span>
                <div className="cd-box">{pad(h)}</div>
                <span className="cd-sep">:</span>
                <div className="cd-box">{pad(m)}</div>
                <span className="cd-sep">:</span>
                <div className="cd-box">{pad(s)}</div>
              </div>
            </div>
            <Link href="/flashsale" className="sec-more">
              Lihat Semua{" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" style={{ width: 16, height: 16, display: "inline-block", verticalAlign: "middle" }}>
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
          <div className="prod-row">
            {flashProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
