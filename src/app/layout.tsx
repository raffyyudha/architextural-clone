import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Vinyl Wrap UK - Vinyl Wraps for Furniture From Architextural",
  description: "Buy vinyl wrap with Architextural for a stylish, affordable interior update for fittings, furniture, worktops & doors in UK kitchens & more in finishes galore.",
  icons: {
    icon: "https://ext.same-assets.com/3334648824/153224992.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
