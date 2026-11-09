import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Fisio AI Academy", description: "Inteligência artificial aplicada à fisioterapia" };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body>{children}</body></html> }
