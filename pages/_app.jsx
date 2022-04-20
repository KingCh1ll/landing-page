import "../styles/global.css";

import { useState, useEffect } from "react";
import Head from "next/head";

import config from "../config";

export default function render({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>{config.meta.title}</title>
                <link rel="manifest" href={config.meta.manifest} />
                <link rel="shortcut icon" type="image/x-icon" href={config.meta.logo} />

                <meta property="description" content={config.meta.description} />
                <meta property="keywords" content={config.meta.keywords.join(", ").toLowerCase()} />

                <meta name="twitter:title" content={config.meta.title} />
                <meta name="twitter:description" content={config.meta.description} />
                <meta name="twitter:site" content={config.meta.site} />
                <meta name="twitter:card" content="summary" />

                <meta property="og:title" content={config.meta.title} />
                <meta property="og:description" content={config.meta.description} />
                <meta property="og:image" content={config.meta.logo} />

                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <link rel="canonical" href={config.meta.site} />

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
                <link href="https://use.fontawesome.com/releases/v6.1.0/css/all.css" rel="stylesheet" />
                <link href="https://cdn.jsdelivr.net/npm/aos@2.3.1/dist/aos.css" rel="stylesheet" />
                <link href="/plugins/sweetalert2/dark.css" rel="stylesheet" />
            </Head>
            <body>
                <div id="load" style={{ height: "100%", width: "100%", zIndex: "9999" }}>
                    <div className="container">
                        <div className="dots" style={{ width: "100%", textAlign: "center" }}>
                            <span id="dot"></span>
                            <span id="dot"></span>
                            <span id="dot"></span>
                        </div>
                    </div>
                </div>
                <Component {...pageProps} />
            </body>
        </>
    );
}
