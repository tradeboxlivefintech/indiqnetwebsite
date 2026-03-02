import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/hompage/navbar/Navbar";
import Footer from "@/components/hompage/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "India Equity Network",
  description: "India Equity Network",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'India Equity Network',
    description: 'India Equity Network',
    url: 'https://indeqnet.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'India Equity Network',
    description: 'India Equity Network',
    images: ['https://indeqnet.com/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
