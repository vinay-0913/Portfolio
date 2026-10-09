import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";

/* FONTS */
const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-dancing",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Vinay Ratnakar — Creative Developer & Software Engineer",
  description:
    "I design and develop modern web applications that deliver seamless, meaningful and human-centered experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${dancing.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${inter.className} ${dancing.variable} bg-white text-zinc-900`}
      >
        <Providers>
          {children}

          {/* ✅ TOASTER HERE */}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}