"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";

export default function Navbar() {
  const pathname = usePathname();
  const { cart, searchQuery, setSearchQuery, setIsCartOpen } = useApp();

  const categories = [
    {
      name: "Semua",
      href: "/",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
    },
    {
      name: "Top Up",
      href: "/topup",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      ),
    },
    {
      name: "Akun Game",
      href: "/akun",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
      ),
    },
    {
      name: "Joki Rank",
      href: "/joki",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <path d="m12 2 2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.6L5.7 21 8 14 2 9.4h7.6L12 2Z" />
        </svg>
      ),
    },
    {
      name: "Gift Card",
      href: "/giftcard",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M12 7v14M2 12h20M7 7s-3-5 0-5 5 5 5 5m0 0s2-5 5-5 0 5 0 5" />
        </svg>
      ),
    },
    {
      name: "Flash Sale",
      href: "/flashsale",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      ),
    },
  ];

  return (
    <header className="site">
      <div className="wrap">
        <div className="topbar">
          <Link href="/" className="brand" aria-label="IMAM STORE beranda">
            <div className="brand-mark">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M13 2 4.5 13.5h6L9 22l9.5-12h-6L13 2Z" fill="#fff" />
              </svg>
            </div>
            <div>
              <div className="brand-name">
                IMAM <span>STORE</span>
              </div>
              <div className="brand-sub">Top Up · Akun · Joki</div>
            </div>
          </Link>
          <div className="searchbar">
            <input
              id="searchInput"
              type="text"
              placeholder="Cari game, akun, atau top up..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="s-btn" aria-label="Cari">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3-3" />
              </svg>
            </button>
          </div>
          <div className="top-actions">
            <button className="icon-btn" aria-label="Notifikasi">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </button>
            <button className="icon-btn" id="cartBtn" aria-label="Keranjang" onClick={() => setIsCartOpen(true)}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
              </svg>
              {cart.length > 0 && <span className="cart-badge" id="cartBadge">{cart.length}</span>}
            </button>
            <a href="#" className="btn-login">
              <span>Masuk</span>
            </a>
          </div>
        </div>
        <nav className="cat-strip" aria-label="Kategori">
          <div className="cat-strip-inner">
            {categories.map((cat) => {
              const isActive = pathname === cat.href;
              return (
                <Link key={cat.name} href={cat.href} className={`cat-link ${isActive ? "active" : ""}`}>
                  {cat.icon}
                  {cat.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
