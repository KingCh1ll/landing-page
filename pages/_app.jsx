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
        setTimeout(() => setLoaded(true), .25 * 1000);
        setTimeout(() => setDone(true), 1 * 1000);
    });

    return (<>
        <NextNProgress />
        <SessionProvider session={pageProps?.session}>
            <ChakraProvider theme={theme}>
                {done === false ? (
                    <div className={`fixed w-full h-full bg-[#020b16] top-0 left-0 ${loaded === true ? "opacity-0" : "opacity-1"} transition-opacity duration-500`} style={{ zIndex: "100000" }}>
                        <div className={"fixed flex justify-center w-full h-full"}>
                            <div className={"top-[45%] w-[75px] h-[75px] ani-pulse"}></div>
                            <img className={"absolute top-[50%] left-[50%] w-[100px] h-[100px] rounded-full"} style={{ transform: "translate(-50%, -50%)" }} src={config.logo} alt={"KingCh1ll Loading Logo"} />
                        </div>
                    </div>
                ) : <></>}
                <Component {...pageProps} />
            </ChakraProvider>
        </SessionProvider>
    </>);
}
