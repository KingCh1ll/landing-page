import { useState, useEffect } from "react";

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { ToastContainer, toast } from "react-toastify";

import "pace-js/themes/blue/pace-theme-minimal.css";
import 'react-toastify/dist/ReactToastify.css';
import "../styles/global.css";

import config from "../config";

const theme = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: false
});

export default function Render({ Component, pageProps }) {
    useEffect(() => {
        console.log("%cWHOA THERE!", "color: #314ef5; font-weight: bold;; font-size: 50px");
        console.log("%cIf someone told you to paste something here, it's VERY likely you're being scammed.", "color: white; font-size: 20px");
        console.log("%cPasting something here could be very dangerous!", "color: red; font-size: 25px");

        import("pace-js/pace.min.js");
    }, []);

    const [slide, setSlide] = useState(0);
    useEffect(() => {
        slide < 100 && setTimeout(() => setSlide(slide + 2), .15);
    }, [slide]);

    return (
        <ChakraProvider theme={theme}>
            <div className={"fixed w-full h-full bg-[#020b16] top-0 left-0"} style={{ transform: `translateY(-${slide}%) translateZ(0px)`, zIndex: "100000" }}></div>
            <Component {...pageProps} />
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
        </ChakraProvider>
    );
}
