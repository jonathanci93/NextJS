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
    title: "Carrito | Sonnos Fit",
    description: "Carrito. Equipá tu gimnasio con lo mejor en máquinas de musculación y entrenamiento.",
    keywords: ["sonnos", "equipamiento", "gimnasio", "carrito", "maquinas de gimnasio"]
};

export default function CarritoLayout({ children }) {
    return (
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
            {children}
        </body>
    );
}
