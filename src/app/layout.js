import { Inter } from "next/font/google";
import "./globals.css";
import headerStyles from "./header.module.css";
import footerStyles from "./footer.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Testing Styles and Metadata",
  description: "Learning how to add styles and metadata in next.js",
  openGraph: {
    title: "Testing Styles and Metadata",
    description:
      "Learning how to add styles and metadata in next.js, as well as Open Graph",
    type: "website",
    url: "http://localhost:3000",
    image: "@/../public/vercel.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header className={headerStyles.header}>
        <h1 className="uppercase">I'm a header on every page</h1>
      </header>
      <body className={inter.className}>{children}</body>
      <footer className={footerStyles.footer}>Website footer</footer>
    </html>
  );
}
