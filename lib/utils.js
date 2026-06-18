export const WA_NUMBER = "6281234567890"; // GANTI ke nomor WA kamu (format 62...)
export const STORE_NAME = "IMAM STORE";

export const rp = (n) => {
  if (typeof n !== "number") return "";
  return "Rp" + n.toLocaleString("id-ID");
};

export const starsSVG = () => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.3 5.8 20.9l1.6-6.8L2.2 8.9l6.9-.6L12 2Z" />
    </svg>
  );
};
