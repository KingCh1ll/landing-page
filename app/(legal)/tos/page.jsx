"use client";

import React from "react";
import { Container, Heading } from "@chakra-ui/react";

import Navbar from "../../(components)/navbar";

const terms = [{ text: `This Terms of Service outlines what you can and can't do across all of Ch1llDev's websites and Discord bots. By using any of Ch1llDev's Services (the \"services\"), you agree that you have read and accepted both our <a href="/privacy">privacy policy</a>, and these terms of service. You also accept a personal license allowing you to use this service, that could be revoked/terminated at anytime. If you have any questions or concerns regarding these terms of services, you can email Ch1llDev here: <a href="mailto:support@ch1ll.dev">support@ch1ll.dev</a>` }, { header: "1. ©️ Copyright" }, { text: "All images used on any of the services are copyrighted under their respective owners." }, { header: "2. 👤 Account" }, { text: "By using any of the services, you agree that you are at the minimum age for digital consent in your country. If you are not at the minimum age, your license to use this service has been terminated." }, { header: "3. 🔗 Third Party Sites" }, { text: "The services may contain third party sites that the services does not have control over, nor resposibility for the content." }];
export const metadata = {
    title: "Terms of Service",
    description: "Read about the terms you must agree to, so you can use Ch1llDev's services.",
};

export default function Render() {
    return (<>
        <Navbar />
        <Heading className={"display-hb font-bold text-left"} style={{ width: "100%", fontSize: "35px", color: "rgb(255, 255, 255, .85)" }}>
            📜 Terms of Service
        </Heading>
        <p style={{ width: "100%", fontSize: "15px", textAlign: "left", color: "var(--DisPing-light)" }}>Last updated November 19th, 2022</p>
        {terms.map((term) => {
            if (term.header) return <h1 style={{ color: "var(--DisPing-light)", fontSize: "xx-large", marginBottom: "25px" }} dangerouslySetInnerHTML={{ __html: term.header }} />;
            if (term.text) return <p style={{ color: "var(--DisPing-light)", marginBottom: "15px" }} dangerouslySetInnerHTML={{ __html: term.text }} />;
        })}
    </>);
}
