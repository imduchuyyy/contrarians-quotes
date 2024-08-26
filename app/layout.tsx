import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";
import "./globals.css";

const inter = Noto_Sans({
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
    title: "Your Contrarian types",
    description: "Contrarians are a unique set of individuals who are not afraid to go against the grain.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/images/favicon.svg" />
                {/* Description no longer than 155 characters */}
                <meta
                    name="description"
                    content="Your Contrarian types"
                />
                {/* Product Name */}
                <meta
                    name="product-name"
                    content="Your Contrarian types"
                />
                {/* Twitter Card data */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ui8" />
                <meta
                    name="twitter:title"
                    content="Your Contrarian types"
                />
                <meta
                    name="twitter:description"
                    content="Your Contrarian types"
                />
                <meta name="twitter:creator" content="@ui8" />
                {/* Twitter Summary card images must be at least 120x120px */}
                <meta
                    name="twitter:image"
                    content="https://inventory.coin98.com/images/1714671317723-tomo-0x09201e7a42f548dc56d7e61d8de3a3edf2aabac5-image_1200x400.png"
                />
                {/* Open Graph data for Facebook */}
                <meta
                    property="og:title"
                    content="Your Contrarian types"
                />
                <meta property="og:type" content="Article" />
                <meta
                    property="og:url"
                    content="https://inventory.coin98.com/images/1714671317723-tomo-0x09201e7a42f548dc56d7e61d8de3a3edf2aabac5-image_1200x400.png"
                />
                <meta
                    property="og:image"
                    content="https://inventory.coin98.com/images/1714671317723-tomo-0x09201e7a42f548dc56d7e61d8de3a3edf2aabac5-image_1200x400.png"
                />
                <meta
                    property="og:description"
                    content="Contrarians are a unique set of individuals who are not afraid to go against the grain."
                />
                <meta
                    property="og:site_name"
                    content="Your Contrarian types"
                />
                <meta property="fb:admins" content="132951670226590" />
                {/* Open Graph data for LinkedIn */}
                <meta
                    property="og:title"
                    content="Your Contrarian types"
                />
                <meta
                    property="og:url"
                    content="https://inventory.coin98.com/images/1714671317723-tomo-0x09201e7a42f548dc56d7e61d8de3a3edf2aabac5-image_1200x400.png"
                />
                <meta
                    property="og:image"
                    content="https://inventory.coin98.com/images/1714671317723-tomo-0x09201e7a42f548dc56d7e61d8de3a3edf2aabac5-image_1200x400.png"
                />
                <meta
                    property="og:description"
                    content="Contrarians are a unique set of individuals who are not afraid to go against the grain."
                />
                {/* Open Graph data for Pinterest */}
                <meta
                    property="og:title"
                    content="Your Contrarian types"
                />
                <meta
                    property="og:url"
                    content="https://inventory.coin98.com/images/1714671317723-tomo-0x09201e7a42f548dc56d7e61d8de3a3edf2aabac5-image_1200x400.png"
                />
                <meta
                    property="og:image"
                    content="https://inventory.coin98.com/images/1714671317723-tomo-0x09201e7a42f548dc56d7e61d8de3a3edf2aabac5-image_1200x400.png"
                />
                <meta
                    property="og:description"
                    content="Contrarians are a unique set of individuals who are not afraid to go against the grain."
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
