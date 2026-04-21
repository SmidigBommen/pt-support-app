import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT Support App",
  description: "Relationship-driven support for personal trainers and clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
