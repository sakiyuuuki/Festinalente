import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import {
  Inter,
  JetBrains_Mono,
  Noto_Sans_JP,
  Zen_Old_Mincho,
} from "next/font/google";

const mincho = Zen_Old_Mincho({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mincho",
  preload: false,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
  preload: false,
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${mincho.variable} ${inter.variable} ${notoSansJp.variable} ${mono.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
