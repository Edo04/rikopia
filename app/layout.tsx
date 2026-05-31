import type { Metadata } from "next";
import "./globals.css";
import ClientLayoutWrapper from "../components/ClientLayoutWrapper";

export const metadata: Metadata = {
  title: "BiasBeat - For Fans, By Fans",
  description: "SNS Platform for Fans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}