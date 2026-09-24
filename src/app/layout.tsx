import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Footer from "./components/Footer";
import BannerSection from "./components/homepage/Banner";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fit Log App",
  description: "FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div>

          <Navbar />
          <BannerSection />
          {children}
          <Footer />
        </div>

      </body>
    </html>
  );
}
