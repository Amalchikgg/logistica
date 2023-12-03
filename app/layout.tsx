import "./globals.css";
import { Inter, Raleway } from "next/font/google";
import CustomFont from "next/font/local";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const numberFont = CustomFont({
  src: "./SFPRODISPLAYBOLD.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
