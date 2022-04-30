import { useState, useEffect } from "react";
import AOS from "aos";

import "pace-js/themes/blue/pace-theme-minimal.css";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";

import config from "../config";

export default function Render({ Component, pageProps }) {
    useEffect(() => {
        import("pace-js/pace.min.js");
        import("bootstrap/dist/js/bootstrap");

        AOS.init({
            once: false,
            startEvent: "load",
            duration: "600",
        });
    }, []);

    return <Component {...pageProps} />;
}
