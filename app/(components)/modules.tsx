"use client";

import { ChakraProvider, extendTheme, ColorModeScript, Container } from "@chakra-ui/react";
// import { ToastContainer } from "react-toastify";
import Script from "next/script";

// import "react-toastify/dist/ReactToastify.css";
import Footer from "./footer";
import config from "../../config";

export default function Modules({ children }: { children: React.ReactNode }) {
    return (<>
        <ChakraProvider theme={extendTheme(config.theme)}>
            <ColorModeScript initialColorMode={"dark"} />
            {/* <ToastContainer position={"top-center"} autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" /> */}

            <Container maxW={"8xl"} padding={"0 40px"} fontFamily={"Rubik, sans-serif;"}>{children}</Container>
            <Footer />
        </ChakraProvider>
        <Script defer data-domain="ch1ll.dev" src="https://analytics.ch1ll.dev/js/script.js"></Script>
    </>);
}
