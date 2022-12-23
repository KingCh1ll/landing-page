import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import config from "../config";

import Header from "../components/head";
import Navbar from "../components/navbar";
import { Container, Heading } from "@chakra-ui/react";

const terms = [{
    text: `By using any of KingCh1ll's Services (the \"services\"), you agree that you have read and accepted to our privacy policy. If you have any questions or concerns regarding KingCh1ll's policy, you can email KingCh1ll here: <a href="mailto:kingch1ll012@gmail.com">kingch1ll012@gmail.com</a>`
}, {
    header: "1. ⚙️ General"
}, {
    text: "This Privacy Policy (\"Privacy\") explains what we do with your data, and how we process it. First, by using DisPing you...<li>Accept the TOS</li><li>Accept our Privacy Policy</li>"
}, {
    header: "2. 👤 Account"
}, {
    text: "We store the following data;<li>Server ID: All Socials You Added (/config)</li><li>User ID (last time you voted for DisPing on a bot list).</li>"
}, {
    header: "3. 🔒 Security"
}, {
    text: "DisPing stores your data safely and securly in a Mongodb database. The Mongodb account that manages the data constantly changes passwords every month. Also, the server DisPing runs on is not accessible outside of KingCh1ll's home network. Attacking the server is just not possible."
}, {
    header: "3. ⏰ Duration & Deletion"
}, {
    text: "DisPing stores your data until it is no longer needed, or the terms of service has been terminated. If you would like your data to be deleted, please contact KingCh1ll via email as seen above. You can also join <a href=\"https://discord.com/invite/PPtzT8Mu3h\">KingCh1ll's Discord server</a>, and request your data to be deleted."
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
