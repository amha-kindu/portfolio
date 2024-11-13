import "./globals.css";
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Amha's Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={jetbrainsMono.variable}
      >
        <Header />
        <StairTransition/>
        {children}
      </body>
    </html>
  );
}
