import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Grevoo Studio | Premium Digital Experiences & Web Design",
  description: "Grevoo Studio designs and develops luxury, high-performance websites, AI-powered digital products, and cinematic experiences for ambitious brands globally. Founded by Saman Sunasara.",
  keywords: ["Web Design", "Web Development", "AI Integration", "Grevoo Studio", "Saman Sunasara", "Digital Experience", "Creative Agency"],
  authors: [{ name: "Saman Sunasara", url: "https://github.com/Saman-Sunasara" }],
  openGraph: {
    title: "Grevoo Studio | Premium Digital Experiences & Web Design",
    description: "We craft award-winning, premium websites, digital products, and AI-powered experiences for ambitious startups and businesses worldwide.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#030303] text-white flex flex-col font-sans selection:bg-brand-purple/30 selection:text-white">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
