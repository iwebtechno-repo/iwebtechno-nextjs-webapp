import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";

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
      </head>
      <body className="font-body-quicksand antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <div className="min-h-screen">{children}</div>
          </main>
          <Navbar />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
