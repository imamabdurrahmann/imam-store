"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";

export default function Navbar() {
  const pathname = usePathname();
  const { cart, searchQuery, setSearchQuery, setIsCartOpen } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

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
    <>
      {/* ==================== DESKTOP NAVBAR ==================== */}
      <header className="site desktop-navbar">
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
                id="desktopSearchInput"
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
              <button className="icon-btn" aria-label="Keranjang" onClick={() => setIsCartOpen(true)}>
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
                {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
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

      {/* ==================== MOBILE NAVBAR ==================== */}
      <header className="site mobile-navbar">
        <div className="wrap">
          <div className="mobile-header-bar">
            {isMobileSearchOpen ? (
              <div className="mobile-search-overlay">
                <button
                  className="icon-btn"
                  onClick={() => {
                    setIsMobileSearchOpen(false);
                    setSearchQuery("");
                  }}
                  aria-label="Kembali"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Cari game, akun, joki..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                {searchQuery && (
                  <button className="mobile-search-clear" onClick={() => setSearchQuery("")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                )}
              </div>
            ) : (
              <>
                <Link href="/" className="brand" aria-label="IMAM STORE beranda">
                  <div className="brand-mark">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M13 2 4.5 13.5h6L9 22l9.5-12h-6L13 2Z" fill="#fff" />
                    </svg>
                  </div>
                  <div className="brand-name">
                    IMAM <span>STORE</span>
                  </div>
                </Link>
                <div className="mobile-header-actions">
                  <button
                    className="icon-btn"
                    onClick={() => setIsMobileSearchOpen(true)}
                    aria-label="Cari"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </button>
                  <button
                    className="icon-btn"
                    onClick={() => setIsCartOpen(true)}
                    aria-label="Keranjang"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
                    </svg>
                    {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* MOBILE BOTTOM NAVIGATION BAR */}
        <nav className="bottom-nav" aria-label="Navigasi Bawah">
          <Link href="/" className={`bottom-nav-link ${pathname === "/" ? "active" : ""}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Beranda</span>
          </Link>
          <Link href="/topup" className={`bottom-nav-link ${pathname === "/topup" ? "active" : ""}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <span>Top Up</span>
          </Link>
          <Link href="/akun" className={`bottom-nav-link ${pathname === "/akun" ? "active" : ""}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Akun</span>
          </Link>
          <Link href="/flashsale" className={`bottom-nav-link ${pathname === "/flashsale" ? "active" : ""}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
            </svg>
            <span>Flash Sale</span>
          </Link>
          <button
            className={`bottom-nav-link ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Buka menu lainnya"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <span>Menu</span>
          </button>
        </nav>

        {/* MOBILE MENU DRAWER OVERLAY */}
        <div
          className={`mobile-menu-drawer-bg ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <aside className={`mobile-menu-drawer ${isMenuOpen ? "open" : ""}`} aria-label="Menu Kategori Sekunder">
          <div className="mmd-head">
            <h3>Menu Lainnya</h3>
            <button className="mmd-close" onClick={() => setIsMenuOpen(false)} aria-label="Tutup">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="mmd-body">
            <div className="mmd-section">
              <h4>Kategori Game</h4>
              <Link href="/joki" className="mmd-link" onClick={() => setIsMenuOpen(false)}>
                🏆 Joki Rank Game
              </Link>
              <Link href="/giftcard" className="mmd-link" onClick={() => setIsMenuOpen(false)}>
                🎁 Voucher & Gift Card
              </Link>
            </div>
            <div className="mmd-section">
              <h4>Layanan & Bantuan</h4>
              <a href="#" className="mmd-link" onClick={() => setIsMenuOpen(false)}>
                📖 Cara Melakukan Order
              </a>
              <a href="#" className="mmd-link" onClick={() => setIsMenuOpen(false)}>
                🛡️ Sistem Garansi & Keamanan
              </a>
              <a href="#" className="mmd-link" onClick={() => setIsMenuOpen(false)}>
                💬 Hubungi Layanan Pelanggan
              </a>
              <a href="#" className="mmd-link" onClick={() => setIsMenuOpen(false)}>
                ❓ FAQ / Pertanyaan Umum
              </a>
            </div>
          </div>
        </aside>
      </header>
    </>
  );
}
