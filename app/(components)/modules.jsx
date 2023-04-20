"use client";

// import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import { ChakraProvider, extendTheme, ColorModeScript, Container } from "@chakra-ui/react";

import Footer from "./footer";

import config from "../../config";

// import "react-toastify/dist/ReactToastify.css";

export default function Modules({ children }) {
    return (<>
        <ChakraProvider theme={extendTheme(config.theme)}>
            <ColorModeScript initialColorMode={"dark"} />
            {/* <NextNProgress /> */}
            {/* <ToastContainer position={"top-center"} autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" /> */}
            <Container maxW={"8xl"} padding={"0 40px"} fontFamily={"Rubik, sans-serif;"}>{children}</Container>
            <Footer />
        </ChakraProvider>
    </>);
}
