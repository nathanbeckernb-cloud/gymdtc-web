import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: "Gym DTC | Structured Training for Athletes, Teams, and Families",
    template: "%s | Gym DTC",
  },
  description: site.description,
  openGraph: {
    title: "Gym DTC",
    description: site.description,
    url: `https://${site.domain}`,
    siteName: "Gym DTC",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-obsidian antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
