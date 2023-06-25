import NextImage from "next/image";

import Modules from "./(components)/modules";

import config from "../config";

import "./global.css";

export const metadata = {
    title: {
        default: "ch1ll.dev",
        template: "%s | ch1ll.dev",
    },
    description: config.meta.description,
    openGraph: {
        title: {
            default: "ch1ll.dev",
            template: "%s | ch1ll.dev",
        },
        description: config.meta.description,
        url: config.meta.site,
        siteName: config.meta.siteName,
        image: config.meta.logo,
        locale: "en-US",
        type: "website",
    },
    icons: {
        icon: [{ url: '/icon.png' }],
        shortcut: ["/favicon.ico?v=2"],
        apple: [
            { url: '/apple-icon.png' },
            { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [{
            rel: 'apple-touch-icon-precomposed',
            url: '/apple-touch-icon-precomposed.png',
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: {
            default: "ch1ll.dev",
            template: "%s | ch1ll.dev",
        },
        description: config.meta.description,
        creator: config.meta.title
    },
    keywords: config.meta.keywords,
    authors: [{ name: config.name }],
    creator: config.name,
    publisher: config.name,
    manifest: "/site.webmanifest",
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        },
    }
};

export default async function RootLayout({ children }) {
    return (
        <html lang={"en"} data-theme={"dark"} style={{ colorScheme: "dark" }}>
            <head />
            <body className={"chakra-ui-dark"}>
                <NextImage src="/images/blobs.svg" alt="Blob Background" priority={true} fill style={{ zIndex: -1, height: "100%", width: "100%", opacity: ".4", WebkitMaskImage: "linear-gradient(to top, transparent 0%, #fff 100%)", objectFit: "cover", objectPosition: "center" }} />
                <Modules>{children}</Modules>
            </body>
        </html>
    );
}
