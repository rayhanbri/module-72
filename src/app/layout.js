import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Learning next.js",
    template: "%s | Learning next.js"
  },
  keywords: ['Next.js', 'React', 'JavaScript'],
  description: "next js shikhthe onk moja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        <main className=" h-[700px] ">
          {children}
        </main>
        <footer className="text-center text-amber-300 bg-gray-700">
          Awsome Next.js Project
        </footer>
      </body>
    </html>
  );
}
