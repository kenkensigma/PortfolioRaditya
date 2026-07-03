import "@/styles/globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SmoothScroll from "@/components/SmoothScroll";
import { Bebas_Neue, Roboto_Slab, DM_Sans } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Raditya Putra — Backend Developer",
  description:
    "I design and build modern web applications, APIs, and digital products.",
  openGraph: {
    title: "Raditya Putra — Backend Developer",
    description:
      "I design and build modern web applications, APIs, and digital products.",
    url: "https://radityadev.vercel.app",
    siteName: "Raditya Dev",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${robotoSlab.variable} ${dmSans.variable}`}>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
