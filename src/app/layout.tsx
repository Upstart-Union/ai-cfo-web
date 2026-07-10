import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI CFO",
  description: "AI-powered financial assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}