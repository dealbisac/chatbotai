import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatbot AI",
  description: "Start conversation with any website by simply starting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(raleway.className, "min-h-screen antialiased")}>
        <main className="h-screen dark text-foreground bg-background">
          {children}
        </main>
      </body>
    </html>
  );
}
