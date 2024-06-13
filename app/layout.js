import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReactJourney",
  description: "My first React App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full">
      <body className={clsx("h-full", inter.className)}>{children}</body>
    </html>
  );
}
