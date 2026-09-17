import type { Metadata } from "next";
import { JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav"

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains', // Custom CSS variable name
});

export const metadata: Metadata = {
  title: "Kelvin Fang",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface">
        <Nav />
        {children}
      </body>
    </html>
  );
}
