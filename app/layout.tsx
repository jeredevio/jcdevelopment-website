import { Inter } from "next/font/google";
import "./globals.css";

// Configure la police Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Optionnel, pour utiliser comme variable CSS
  display: "swap",          // Recommandé pour de meilleures performances
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}