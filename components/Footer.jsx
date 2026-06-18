import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="brand-name">
              IMAM <span style={{ color: "var(--teal-500)" }}>STORE</span>
            </div>
            <p>
              Toko top up & akun game terpercaya. Proses cepat, harga bersahabat, dan admin yang ramah. Order langsung lewat WhatsApp ya!
            </p>
            <div className="foot-soc">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.4.6.2 1.1.5 1.6 1 .5.5.8 1 1 1.6.2.6.4 1.3.4 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.4 2.3-.2.6-.5 1.1-1 1.6-.5.5-1 .8-1.6 1-.6.2-1.3.4-2.3.4-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.4-.6-.2-1.1-.5-1.6-1-.5-.5-.8-1-1-1.6-.2-.6-.4-1.3-.4-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.4-2.3.2-.6.5-1.1 1-1.6.5-.5 1-.8 1.6-1 .6-.2 1.3-.4 2.3-.4C9 2 9.3 2 12 2Zm0 5a5 5 0 1 0 0 10A5 5 0 0 0 12 7Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.3 6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
                </svg>
              </a>
              <a href="#" aria-label="TikTok">
                <svg viewBox="0 0 24 24">
                  <path d="M16 2c.3 2 1.4 3.7 3.2 4.5.7.3 1.5.5 2.3.5v3.2c-1.5 0-2.9-.4-4.2-1.1v6.6c0 3.4-2.7 6.1-6.1 6.1S5 19.1 5 15.7s2.7-6.1 6.1-6.1c.3 0 .6 0 .9.1v3.3c-.3-.1-.6-.2-.9-.2A2.9 2.9 0 1 0 14 15.5V2h2Z" />
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.4-1.1-2.7s.7-1.9 1-2.2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.5c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.9.9c.3.1.4.2.5.3.1.2.1.7-.1 1.2Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="foot-col">
            <h5>Produk</h5>
            <Link href="/topup">Top Up Game</Link>
            <Link href="/akun">Akun Game</Link>
            <Link href="/joki">Joki Rank</Link>
            <Link href="/giftcard">Gift Card</Link>
            <Link href="/flashsale">Flash Sale</Link>
          </div>
          <div className="foot-col">
            <h5>Bantuan</h5>
            <a href="#">Cara Order</a>
            <a href="#">Cek Pesanan</a>
            <a href="#">Garansi</a>
            <a href="#">Hubungi Admin</a>
            <a href="#">FAQ</a>
          </div>
          <div className="foot-col">
            <h5>Tentang</h5>
            <a href="#">Tentang Kami</a>
            <a href="#">Testimoni</a>
            <a href="#">Syarat & Ketentuan</a>
            <a href="#">Kebijakan Privasi</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 IMAM STORE. Dibuat dengan ❤️ untuk para gamers.</span>
          <div className="pay-icons">
            <span className="pay-chip">DANA</span>
            <span className="pay-chip">OVO</span>
            <span className="pay-chip">GOPAY</span>
            <span className="pay-chip">QRIS</span>
            <span className="pay-chip">BCA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
