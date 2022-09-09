import { useState, useEffect } from "react";
import Image from "next/image";

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import "pace-js/themes/blue/pace-theme-minimal.css";
import "../styles/global.css";

import config from "../config";

const theme = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: false
});

export default function Render({ Component, pageProps }) {
    useEffect(() => {
        console.log("%cWHOA THERE!", "color: #314ef5; font-weight: bold; font-size: 50px");
        console.log("%cIf someone told you to paste something here, it's VERY likely you're being scammed.", "color: white; font-size: 20px");
        console.log("%cPasting something here could be very dangerous!", "color: red; font-size: 25px");

        import("pace-js/pace.min.js");
    }, []);

    const [slide, setSlide] = useState(1);
    useEffect(() => {
        // slide < 100 && setTimeout(() => setSlide(slide + 2), .15);
        slide >= 0 && setTimeout(() => setSlide(slide - .05), .15)
    }, [slide]);

    return (
        <ChakraProvider theme={theme}>
            {/* transform: translateY(-${slide}%) translateZ(0px) */}
            {slide >= 0 ? (<div className={"fixed w-full h-full bg-[#020b16] top-0 left-0"} style={{ opacity: slide, zIndex: "100000" }}>
                <div className={"flex justify-center w-full h-full"}>
                    <div className={"ani-pulse"} style={{ width: "75px", height: "75px", top: "45%" }}></div>
                    <img src={"/images/users/kingch1ll.webp"} alt={"KingCh1ll Loading Logo"} className={"rounded-full"} style={{ width: "100px", height: "100px", margin: "auto" }} />
                </div>
            </div>) : <></>}
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
