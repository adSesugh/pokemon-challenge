import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ApolloProvider from "@/lib/ApolloProvider";
import AppWrapper from "@/lib/AppWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pokedex App",
  description: "Pokedex challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ApolloProvider>
          <AppWrapper>{children}</AppWrapper>
        </ApolloProvider>
      </body>
    </html>
  );
}
