import { Inter } from "next/font/google";
import "./globals.css";
import headerStyles from "./header.module.css";
import footerStyles from "./footer.module.css";
import { Happy_Monkey } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Caveat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const happy_monkey = Happy_Monkey({
  weight: "400",
  subsets: ["latin"],
});
const playfair_display = Playfair_Display({ subsets: ["latin"] });
export const caveat = Caveat({ subsets: ["latin"] });

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
      <body className={happy_monkey.className}>
        <header className={headerStyles.header}>
          <h1 className={playfair_display.className}>
            Im a header on every page
          </h1>
        </header>
        {children}
        <footer className={`${footerStyles.footer} ${caveat.className}`}>
          Website footer
        </footer>
      </body>
    </html>
  );
}
