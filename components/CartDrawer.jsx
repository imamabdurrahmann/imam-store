"use client";
import React, { useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { rp, WA_NUMBER, STORE_NAME } from "@/lib/utils";

export default function CartDrawer() {
  const { cart, removeFromCart, isCartOpen, setIsCartOpen, showToast } = useApp();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
      }
    };
    if (isCartOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  const handleCheckout = () => {
    if (!cart.length) {
      showToast("Keranjang masih kosong");
      return;
    }
    let msg = `Halo ${STORE_NAME}! Saya mau order:\n\n`;
    cart.forEach((item, index) => {
      msg += `${index + 1}. ${item.title} — ${rp(item.price)}\n`;
    });
    msg += `\nTotal: ${rp(total)}\n\nMohon diproses ya, makasih!`;
    const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(waLink, "_blank");
  };

  return (
    <>
      <div
        className={`drawer-bg ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      ></div>
      <aside className={`drawer ${isCartOpen ? "open" : ""}`} aria-label="Keranjang">
        <div className="drawer-head">
          <h3>Keranjang</h3>
          <button className="dh-close" id="dhClose" aria-label="Tutup" onClick={() => setIsCartOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="drawer-body" id="drawerBody">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
              </svg>
              <p>Keranjang masih kosong</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="ci-thumb" style={{ background: item.grad }}>
                  {item.emoji}
                </div>
                <div className="ci-info">
                  <h4>{item.title}</h4>
                  <div className="ci-price">{rp(item.price)}</div>
                </div>
                <button
                  className="ci-remove"
                  onClick={() => removeFromCart(index)}
                  aria-label="Hapus"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
        <div className="drawer-foot">
          <div className="total-row">
            <span>Total</span>
            <strong id="cartTotal">{rp(total)}</strong>
          </div>
          <button className="checkout-wa" id="checkoutWa" onClick={handleCheckout}>
            <svg viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.4-1.1-2.7s.7-1.9 1-2.2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.5c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.9.9c.3.1.4.2.5.3.1.2.1.7-.1 1.2Z" />
            </svg>
            Checkout via WhatsApp
          </button>
        </div>
      </aside>
    </>
  );
}
