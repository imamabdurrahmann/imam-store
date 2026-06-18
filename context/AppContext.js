"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted flag and load cart from localStorage
  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem("imam_cart");
    if (stored) {
      try {
        setCart(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("imam_cart", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const showToast = (msg) => {
    setToastMsg(msg);
    setIsToastVisible(true);
  };

  useEffect(() => {
    if (isToastVisible) {
      const timer = setTimeout(() => {
        setIsToastVisible(false);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [isToastVisible]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    showToast(`✓ ${product.game} masuk keranjang`);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        searchQuery,
        setSearchQuery,
        isCartOpen,
        setIsCartOpen,
        toastMsg,
        isToastVisible,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
