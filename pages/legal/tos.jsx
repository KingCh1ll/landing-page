import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import config from "../../config";

import Header from "../../components/head";
import Navbar from "../../components/navbar";
import { Container, Heading } from "@chakra-ui/react";

const terms = [{
    text: `By using DisPing (the \"service\"), you agree that you have read and accepted to our terms of service. If you have any questions or concerns regarding DisPing's policy, you can email me here: <a href="mailto:support@ch1ll.dev">support@ch1ll.dev</a>`
}, {
    header: "1. ⚙️ General"
}, {
    text: "This Terms of Service (\"TOS\") explains what you can and can't do with DisPing. First, by using DisPing you...<li>Accept this TOS</li><li>Accept the Privacy Policy</li><li>Accept a personal license allowing you to use this service, that could be revoked/terminated at anytime.</li>"
}, {
    header: "2. 👤 Account"
}, {
    text: "By logging in to the service, you agree that you are at the minimum age for digital consent in your country. If you are not at the minimum age, your license to use this service is denied and if you are found to be under the minimum age you will be punished as part of Discord's Guidelines."
}, {
    header: "3. 🔗 Third Party Sites"
}, {
    text: "DisPing may contain third party sites that the service does not have control over, nor resposibility for the content."
}]

export default function Render() {
    return (
        <>
            <Head>
                <Header name={`Privacy Policy - ${config.name}`} description={`Read about how we use your data. ${config.meta.description}`} logo="https://www.DisPing.tk/assets/images/disping.png"></Header>
            </Head>
            {/* Content */}
            <Container maxW={"7xl"} padding={"0 40px"} fontFamily={"Rubik, sans-serif;"}>
                <Navbar title="DisPing" logo="/images/disping.png" />

                <Container maxW={"7xl"} py={"7rem"} fontFamily={"Rubik, sans-serif;"}>
                {/* <Container id="home" style={{ fontFamily: "Rubik", width: "100%", height: "100%", display: "flex", marginTop: "125px", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px", textAlign: "center", margin: "7% 0" }}> */}
                    <Heading className={"display-hb font-bold text-left"} style={{ width: "100%", fontSize: "35px", color: "rgb(255, 255, 255, .85)" }}>📜 Terms of Service</Heading>
                    <p style={{ width: "100%", fontSize: "15px", textAlign: "left", color: "var(--DisPing-light)" }}>Last updated November 19th, 2022</p>

                    {terms.map((term, number) => {
                        if (term.header) return <h1 style={{ color: "var(--DisPing-light)", fontSize: "xx-large", marginBottom: "25px" }} dangerouslySetInnerHTML={{ __html: term.header }}/>
                        if (term.text) return <p style={{ color: "var(--DisPing-light)", marginBottom: "15px" }} dangerouslySetInnerHTML={{ __html: term.text }}/>
                    })}
                </Container>
            </Container>
        </>
    );
}
