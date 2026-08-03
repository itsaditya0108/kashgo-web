import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://KASHgo.in"),
  title: {
    default: "KASHgo - Premier Ride-Hailing Platform for Kashmir",
    template: "%s | KASHgo Mobility",
  },
  description:
    "KASHgo is building a modern ride-booking platform designed exclusively for Kashmir. Book trusted city rides, airport transfers, and tourist passes.",
  keywords: [
    "KASHgo",
    "KASHgo.in",
    "Kashmir Ride Hailing",
    "Taxi Booking Srinagar",
    "Cab Booking Kashmir",
    "Tourist Cab Kashmir",
    "Srinagar Airport Transfer",
  ],
  authors: [{ name: "KASHgo Mobility Team", url: "https://KASHgo.in" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://KASHgo.in",
    title: "KASHgo - Premier Ride-Hailing Platform for Kashmir",
    description:
      "Modern, reliable ride-booking platform connecting Srinagar and Kashmir valley.",
    siteName: "KASHgo Mobility",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#090D16] text-slate-100 font-sans antialiased selection:bg-amber-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
