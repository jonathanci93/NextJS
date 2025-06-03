import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Admin | Sitio en construcción",
    description: "Sección de administración del sitio.",
};

export default function AdminLayout({ children }) {
    return (
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
            {children}
        </body>
    );
}
