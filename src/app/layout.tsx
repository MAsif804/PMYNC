import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import "./globals.css";

const open = Open_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-openSans",
    display: "swap",
});

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
    variable: "--font-roboto",
    display: "swap",
});


export const metadata: Metadata = {
    title: "PM-YNC | National Youth Council",
    description: "Prime Minister's National Youth Council",
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${open.variable} ${roboto.variable} ${open.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
