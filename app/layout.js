import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Toast from "@/components/Toast";
import { WA_NUMBER, STORE_NAME } from "@/lib/utils";

export const metadata = {
  title: "IMAM STORE — Top Up & Akun Game Termurah",
  description: "Toko top up & akun game terpercaya. Proses cepat, harga bersahabat, dan aman 24 jam.",
};

export default function RootLayout({ children }) {
  const waMessage = encodeURIComponent(`Halo ${STORE_NAME}! Saya mau nanya-nanya dulu 🙏`);
  const waFloatLink = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

  return (
    <html lang="id">
      <body>
        <AppContextProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <Toast />
          
          {/* WhatsApp Floating Button */}
          <a
            href={waFloatLink}
            className="wa-float"
            id="waFloat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.4-1.1-2.7s.7-1.9 1-2.2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.5c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.9.9c.3.1.4.2.5.3.1.2.1.7-.1 1.2Z" />
            </svg>
            <span>Chat Admin</span>
          </a>
        </AppContextProvider>
      </body>
    </html>
  );
}
