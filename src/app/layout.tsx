import type { Metadata } from "next";
import { Providers } from "./providers";
import Script from "next/script";
import { PageInterface } from "../store/types";
import { Geist } from "next/font/google";
import "./globals.css";
import Main from "../layout/Main";
import Navbar from "../layout/Navbar";
import Footer from '../layout/Footer'
import ScrollToTopButton from "../component/ScrollToTopButton";
import ModalManager from "../component/ModalManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const data: PageInterface = {
  title:
    "Pitch deck examples from founders that has raised $100b ",
  description:
    "Browse top pitch deck examples that helped raise $100B+. Get inspired and purchase templates to create your own winning pitch deck.",
  url: "https://pitchdeck.design",
  image: "https://pitchdeck.design/seo-card.png",
};
export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  icons: {
    icon: data.image, // This sets the favicon for this specific page
  },
  openGraph: {
    type: "website",
    siteName: "pitchdeck.design",
    title: data.title,
    description: data.description,
    url: data.url,
    images: [
      {
        url: data.image,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: data.url,
    title: data.title,
    description: data.description,
    images: [
      {
        url: data.image,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body  className={`${geistSans.variable} antialiased`}>
        <Providers>
          <ScrollToTopButton />
          <Navbar />
          <Main>{children}</Main>
          <Footer />
          <ModalManager />
        </Providers>
        
         <Script
        src="https://accounts.google.com/gsi/client"
        strategy="beforeInteractive"
      />
      </body>
    </html>
  )
}
