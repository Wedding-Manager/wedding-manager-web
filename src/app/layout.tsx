import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavigationBar from "../blocks/navigation-bar";
import variables from "../app/variables.module.scss";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wedding Manager",
  description: "Manage your wedding here.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-7502ZB6M9M"
      ></Script>
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7502ZB6M9M');
  
       `}
      </Script>

      <body className={`${inter.className} max-h-[100vh]`}>
        <NavigationBar />
        <div
          className={`px-5   overflow-auto mb-4 pt-4 `}
          style={{ marginTop: `${variables?.navbarHeight}` }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
