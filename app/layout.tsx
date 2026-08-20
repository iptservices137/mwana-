import type { Metadata, Viewport } from "next";
import "./styles.css";
export const metadata: Metadata = { title: "Mwana+", description: "Le carnet de santé de votre enfant", manifest: "/manifest.webmanifest" };
export const viewport: Viewport = { themeColor: "#0d6b5a", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html>; }
