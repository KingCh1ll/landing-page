import { useState, useEffect } from "react";
import Head from "next/head";

import "pace-js/themes/blue/pace-theme-minimal.css";
import "aos/dist/aos.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

import config from "../config";

export default function Render({ Component, pageProps }) {
    useEffect(() => {
        import("jquery/src/jquery.js");
        import("pace-js/pace.min.js");
        import("aos/dist/aos.js");
        import("smooth-scroll/dist/smooth-scroll.polyfills.js");
        import("../public/js/handle");
    }, []);

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
            </Head>
            <body>
                <Component {...pageProps} />
            </body>
        </>
    );
}
