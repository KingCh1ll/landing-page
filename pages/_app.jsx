import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "pace-js/themes/blue/pace-theme-minimal.css";
import "../styles/global.css";

import config from "../config";

export default function Render({ Component, pageProps }) {
    useEffect(() => {
        console.log("%cWHOA THERE!", "color: #314ef5; font-weight: bold;; font-size: 50px");
        console.log("%cIf someone told you to paste something here, it's VERY likely you're being scammed.", "color: white; font-size: 20px");
        console.log("%cPasting something here could be very dangerous!", "color: red; font-size: 25px");

        import("pace-js/pace.min.js");

        AOS.init({
            once: true,
            startEvent: "load",
            duration: "600",
        });
    }, []);

    return <Component {...pageProps} />;
}
