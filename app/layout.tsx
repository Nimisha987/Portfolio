import "./globals.css";

export const metadata = {
  title: "Nimisha — Portfolio",
  description: "Full-stack AI developer building voice, document, and agent pipelines.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}