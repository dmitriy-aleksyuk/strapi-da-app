import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../sass/main.scss";
//import "./globals.css";

import { getGlobalSettings } from "@/data/loaders";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Strapi0 App",
  description: "Generated by create next app",
};

async function loader() {
  const { data } = await getGlobalSettings();
  //console.dir(data, {depth: null});
  if (!data) throw new Error  ("No data found");
  return { header: data?.header, footer: data?.footer };
  //console.log(data);
  }

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {header , footer} = await loader();
  // console.log("+++++++");
  // console.dir(footer, {depth: null});
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header data={header}/>
        {children}
        <Footer data={footer} />
      </body>
    </html>
  );
}
