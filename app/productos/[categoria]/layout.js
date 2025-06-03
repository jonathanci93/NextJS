import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import NavigationMenu from "@/app/components/NavigationMenu";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sonnos Equipamiento - Nosotros",
  description: "Conoce más sobre nosotros y nuestra misión en Sonnos Equipamiento",
};
export default function ProductosLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavigationMenu/>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js" async></script>
      </body>
    </html>
  );
}