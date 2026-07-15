import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Clarte Club",
  description: "Luxury retail navigation concept for Clarte Club.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        montserrat.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="relative flex flex-1 flex-col overflow-x-clip">
          <SiteHeader />
          <div className="flex flex-1 flex-col pt-[var(--header-stack-height)]">
            {children}
          </div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
