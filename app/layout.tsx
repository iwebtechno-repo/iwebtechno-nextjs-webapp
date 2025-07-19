import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { IconThemeProvider } from "@/lib/morphy-ui/icon-theme-context";
import { Navbar } from "@/components/navbar";

// University typography setup
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "iWebTechno - University Management System",
  description:
    "Comprehensive digital solutions for educational institutions. Streamline admissions, attendance, fee collection, and more with our modern campus management system.",
  keywords:
    "university management, campus digitization, student information system, admission management, fee collection, attendance tracking",
  authors: [{ name: "iWebTechno" }],
  creator: "iWebTechno",
  publisher: "iWebTechno",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://iwebtechno.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iwebtechno.com",
    title: "iWebTechno - University Management System",
    description: "Comprehensive digital solutions for educational institutions",
    siteName: "iWebTechno",
  },
  twitter: {
    card: "summary_large_image",
    title: "iWebTechno - University Management System",
    description: "Comprehensive digital solutions for educational institutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/iwebtechno.svg" />
        <link rel="apple-touch-icon" href="/iwebtechno.svg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <IconThemeProvider>
            <main>
              <div className="min-h-screen">{children}</div>
            </main>
            <Navbar />
            <Toaster />
          </IconThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
