import "./globals.css";
import ClientWrapper from "./components/ClientWrapper";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Aurenyx Studio",
  description: "L'excellence silencieuse — Studio créatif digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-blackDeep text-whiteSoft font-system antialiased selection:bg-goldSoft/20">
        {/* 🟡 NAVBAR EN DEHORS DU WRAPPER */}
        <Navbar />
        {/* 🟢 LE SITE S’ANIME EN DESSOUS */}
        <ClientWrapper>{children}</ClientWrapper>
        <Footer />
      </body>
    </html>
  );
}
