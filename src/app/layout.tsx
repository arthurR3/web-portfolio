import type { Metadata } from "next";
import { Lato, Lemon } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  preload: true,
  variable: "--font-lato",
})
const lemon = Lemon({
  weight: "400",
  subsets: ["latin"],
  preload: true,
  variable: "--font-lemon"
});

export const metadata: Metadata = {
  title: "Arthur development",
  description: "Slogan or description of the project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${lato.variable} ${lemon.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
