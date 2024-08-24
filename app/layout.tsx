import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-inter",
});

const interDisplay = localFont({
    src: [
        {
            path: "./fonts/InterDisplay-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/InterDisplay-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-inter-display",
});

export const metadata: Metadata = {
    title: "Contrarians Quotes",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Description no longer than 155 characters */}
                <meta
                    name="description"
                    content="Contrarians Quotes"
                />
                {/* Product Name */}
                <meta
                    name="product-name"
                    content="Contrarians Quotes"
                />
                {/* Twitter Card data */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ui8" />
                <meta
                    name="twitter:title"
                    content="Contrarians Quotes"
                />
                <meta
                    name="twitter:description"
                    content="Clean and minimal Crypto AI UI Design Kit"
                />
                <meta name="twitter:creator" content="@ui8" />
                {/* Twitter Summary card images must be at least 120x120px */}
                <meta
                    name="twitter:image"
                    content="https://ui8-neutrade-0d83b7d91614.herokuapp.com/twitter-card.png"
                />
                {/* Open Graph data for Facebook */}
                <meta
                    property="og:title"
                    content="Contrarians Quotes"
                />
                <meta property="og:type" content="Article" />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/neutrade--crypto-ai-ui-kit"
                />
                <meta
                    property="og:image"
                    content="https://ui8-neutrade-0d83b7d91614.herokuapp.com/fb-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Clean and minimal Crypto AI UI Design Kit"
                />
                <meta
                    property="og:site_name"
                    content="Contrarians Quotes"
                />
                <meta property="fb:admins" content="132951670226590" />
                {/* Open Graph data for LinkedIn */}
                <meta
                    property="og:title"
                    content="Contrarians Quotes"
                />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/neutrade--crypto-ai-ui-kit"
                />
                <meta
                    property="og:image"
                    content="https://ui8-neutrade-0d83b7d91614.herokuapp.com/linkedin-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Clean and minimal Crypto AI UI Design Kit"
                />
                {/* Open Graph data for Pinterest */}
                <meta
                    property="og:title"
                    content="Contrarians Quotes"
                />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/neutrade--crypto-ai-ui-kit"
                />
                <meta
                    property="og:image"
                    content="https://ui8-neutrade-0d83b7d91614.herokuapp.com/pinterest-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Clean and minimal Crypto AI UI Design Kit"
                />
            </head>
            <body
                className={`${inter.variable} ${interDisplay.variable} bg-theme-n-8 font-sans text-[0.9375rem] leading-[1.5rem] text-theme-primary antialiased`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
