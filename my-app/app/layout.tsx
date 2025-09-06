// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "My App",
  description: "Basic Tailwind/Next.js App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
