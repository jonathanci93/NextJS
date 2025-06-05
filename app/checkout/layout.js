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
    title: "Sonnos Equipamiento",
    description: "Equipamiento para tu gimnasio, CrossFit o Box de entrenamiento funcional",
    };

    export default function CheckoutLayout({ children }) {
    return (
        <>
        {children}
        </>
    );
    }