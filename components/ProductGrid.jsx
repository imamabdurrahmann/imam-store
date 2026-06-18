"use client";
import React from "react";
import { useApp } from "@/context/AppContext";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ProductGrid({ category = "all" }) {
  const { searchQuery } = useApp();

  let list =
    category === "all"
      ? products
      : category === "flash"
      ? products.filter((p) => p.flash)
      : products.filter((p) => p.cat === category);

  if (searchQuery) {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter((p) =>
      (p.title + " " + p.game).toLowerCase().includes(q)
    );
  }

  if (list.length === 0) {
    return (
      <div className="empty-state" style={{ width: "100%", gridColumn: "1 / -1", textAlign: "center", padding: "40px 0" }}>
        <p>Produk "{searchQuery}" tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="grid" id="productGrid">
      {list.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
