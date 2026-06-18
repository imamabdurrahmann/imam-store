"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const slidesData = [
  {
    class: "slide-1",
    eyebrow: "Proses Instan 24 Jam",
    title: "Top Up Game Termurah & Anti Ribet",
    desc: "Diamond, UC, Genesis Crystal sampai akun sultan. Bayar gampang, masuk langsung.",
    ctaText: "Mulai Top Up →",
    ctaLink: "/topup",
  },
  {
    class: "slide-2",
    eyebrow: "Promo Spesial Member",
    title: "Diskon Hingga 30% Tiap Hari",
    desc: "Cek Flash Sale tiap jam. Harga lebih murah dari toko sebelah, dijamin.",
    ctaText: "Lihat Flash Sale →",
    ctaLink: "/flashsale",
  },
  {
    class: "slide-3",
    eyebrow: "100% Aman & Garansi",
    title: "Beli Akun Game Bergaransi",
    desc: "Semua akun dicek manual. Ada garansi balik modal kalau bermasalah.",
    ctaText: "Cari Akun →",
    ctaLink: "/akun",
  },
];

export default function HeroCarousel() {
  const [cur, setCur] = useState(0);
  const count = slidesData.length;
  const autoPlayRef = useRef();

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const go = (i) => {
    setCur((i + count) % count);
  };

  const startAutoPlay = () => {
    autoPlayRef.current = setInterval(() => {
      go(cur + 1);
    }, 5000);
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    startAutoPlay();
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      startAutoPlay();
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [cur]);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      go(cur + 1);
      resetAutoPlay();
    } else if (isRightSwipe) {
      go(cur - 1);
      resetAutoPlay();
    }
  };

  return (
    <div className="hero">
      <div className="wrap">
        <div className="carousel">
          <div
            className="slides"
            style={{
              transform: `translateX(-${cur * 100}%)`,
              display: "flex",
              transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {slidesData.map((slide, idx) => (
              <div key={idx} className={`slide ${slide.class}`}>
                <div className="slide-eyebrow">{slide.eyebrow}</div>
                <h2>{slide.title}</h2>
                <p>{slide.desc}</p>
                <Link href={slide.ctaLink} className="slide-cta">
                  {slide.ctaText}
                </Link>
              </div>
            ))}
          </div>
          <button
            className="car-nav car-prev"
            onClick={() => {
              go(cur - 1);
              resetAutoPlay();
            }}
            aria-label="Sebelumnya"
          >
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            className="car-nav car-next"
            onClick={() => {
              go(cur + 1);
              resetAutoPlay();
            }}
            aria-label="Berikutnya"
          >
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <div className="dots">
            {slidesData.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === cur ? "active" : ""}`}
                onClick={() => {
                  go(idx);
                  resetAutoPlay();
                }}
                aria-label={`Slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
