"use client";
import React from "react";
import { useApp } from "@/context/AppContext";
import { rp, starsSVG } from "@/lib/utils";

export default function ProductCard({ product }) {
  const { addToCart } = useApp();

  const disc = product.old ? Math.round((1 - product.price / product.old) * 100) : 0;

  return (
    <div className="card">
      <div className="card-thumb" style={{ background: product.grad }}>
        {disc > 0 && <span className="disc-tag">-{disc}%</span>}
        <span className="emoji">{product.emoji}</span>
        <span className="gname">{product.game}</span>
      </div>
      <div className="card-body">
        <div className="card-title">{product.title}</div>
        <div>
          <span className="price-now">{rp(product.price)}</span>
          {product.old > 0 && <span className="price-old">{rp(product.old)}</span>}
        </div>
        <div className="card-meta">
          <span className="stars">
            {starsSVG()}
            {product.rating.toFixed(1)}
          </span>
          <span className="meta-dot"></span>
          <span>Terjual {product.sold}</span>
        </div>
        <button className="add-btn" onClick={() => addToCart(product)}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ width: 16, height: 16 }}
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
          Keranjang
        </button>
      </div>
    </div>
  );
}
