import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nu-Enezur — Explore • Connect • Inspire | Authentic Ethiopian Tours",
  description:
    "Experience Ethiopia beyond the ordinary. Bespoke expeditions to the Rock Churches of Lalibela, Lower Omo Valley tribal sanctuaries, Danakil Depression, Simien Mountains, and cultural Addis Ababa.",
  keywords: [
    "Ethiopian Tours",
    "Nu-Enezur",
    "Addis Ababa City Tour",
    "Omo Valley Tribes",
    "Lalibela Rock Churches",
    "Danakil Depression Erta Ale",
    "Simien Mountains Trekking",
    "Ethiopia Travel Agency",
  ],
  authors: [{ name: "Nu-Enezur Expeditions" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans antialiased selection:bg-[#C88219] selection:text-white">
        <LanguageProvider>
          <SmoothScroll>
            <Navbar />
            <main className="min-h-screen flex flex-col">{children}</main>
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
