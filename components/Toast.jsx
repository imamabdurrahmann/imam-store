"use client";
import React from "react";
import { useApp } from "@/context/AppContext";

export default function Toast() {
  const { toastMsg, isToastVisible } = useApp();

  return (
    <div className={`toast ${isToastVisible ? "show" : ""}`} id="toast">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
      <span id="toastMsg">{toastMsg}</span>
    </div>
  );
}
