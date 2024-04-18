import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";


const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Garuda - CDR & Intelligence Software",
  description: "Garuda - The Intellgence & CDR Analysis Software for Law Enforcement Agencies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
                {children}
          </ThemeProvider>
        </body>
      </html>
  );
}