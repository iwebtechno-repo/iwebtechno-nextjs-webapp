import "@/lib/morphy-ui/morphy";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { IconThemeProvider } from "@/lib/morphy-ui/icon-theme-context";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iWebTechno",
  description: "Transform Your Campus with Digital Solutions for Free",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-center" richColors closeButton />
          <IconThemeProvider defaultWeight="regular">
            <main>
              <div className="min-h-screen pb-28">{children}</div>
            </main>
            <Navbar />
          </IconThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
