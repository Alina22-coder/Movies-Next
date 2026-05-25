import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthProvider } from "@/context/AuthContext";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOVA — Discover Movies",
  description: "Discover and explore movies from around the world.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Suspense>
            <Header />
          </Suspense>
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
