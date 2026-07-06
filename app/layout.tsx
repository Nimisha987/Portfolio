import "./globals.css";
import type { ReactNode } from "react";
export const metadata = {
  title: "Nimisha — Portfolio",
  description: "Full-stack AI developer building voice, document, and agent pipelines.",
};
type RootLayoutProps = {
  children: ReactNode;
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}