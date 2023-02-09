import { useState, useEffect } from "react";

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";

import "../styles/global.css";
import config from "../config";

const theme = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: false
});

export default function Render({ Component, pageProps }) {
    const [loaded, setLoaded] = useState(false);
    const [done, setDone] = useState(false);
    useEffect(() => {
        setTimeout(() => setLoaded(true), .15 * 1000);
        setTimeout(() => setDone(true), .5 * 1000);
    });

    return (<>
        <NextNProgress />
        <SessionProvider session={pageProps?.session}>
            <ChakraProvider theme={theme}>
                {done === false ? (
                    <div className={"transition-opacity"} style={{ position: "fixed", top: "0px", left: "0px", width: "100%", height: "100%", background: "#020b16", opacity: loaded === true ? 0 : 1, transitionDuration: "500ms", zIndex: "100000" }}>
                        <div style={{ position: "fixed", display: "flex", justifyContent: "center", width: "100%", height: "100%", }}>
                            <div className={"ani-pulse"} style={{ top: "45%", width: "75px", height: "75px" }}></div>
                            <img style={{ position: "absolute", top: "50%", left: "50%", width: "100px", height: "100px", borderRadius: "100%", transform: "translate(-50%, -50%)" }} src={config.logo} alt={"Logo"} />
                        </div>
                    </div>
                ) : <></>}
                <Component {...pageProps} />
            </ChakraProvider>
        </SessionProvider>
    </>);
}
