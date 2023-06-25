"use client";

import React from "react";
import { Heading } from "@chakra-ui/react";

import Navbar from "../../(components)/navbar";

const terms = [{
    text: 'This privacy policy outlines how we use your data, across all of Ch1llDev\'s websites and Discord bots. By using any of Ch1llDev\'s Services (the "services"), you agree that you have read and accepted both our privacy policy, and the <a href="/legal/legal/tos">Terms of Service</a>. If you have any questions or concerns regarding Ch1llDev\'s policy, you can email Ch1llDev here: <a href="mailto:support@ch1ll.dev">support@ch1ll.dev</a>'
}, {
    header: "1. ⚙️ General"
}, {
    text: 'This Privacy Policy ("Privacy") explains what we do with your data, and how we process it. First, by using DisPing you...<li>Accept the TOS</li><li>Accept our Privacy Policy</li>'
}, {
    header: "2. 👤 Account"
}, {
    text: "We store the following data;<li>Server ID: All Socials You Added (/config)</li><li>User ID (last time you voted for DisPing on a bot list).</li>"
}, {
    header: "3. 🔒 Security"
}, {
    text: "DisPing stores your data safely and securely in a Mongodb database."
}, {
    header: "3. ⏰ Duration & Deletion"
}, {
    text: 'DisPing stores your data until it is no longer needed. If you would like your data to be deleted, please contact Ch1llDev via email as seen above. You can also join <a href="https://discord.gg/PPtzT8Mu3h">Ch1llDev\'s Discord server</a>, and request your data to be deleted.'
}];

export default function Render() {
    return (
        <>
            <Navbar />
            <Heading className={"display-hb font-bold text-left"} style={{ width: "100%", fontSize: "35px", color: "rgb(255, 255, 255, .85)" }}>
                📜 Privacy Policy
            </Heading>
            <p style={{ width: "100%", fontSize: "15px", textAlign: "left", color: "var(--DisPing-light)" }}>Last updated November 19th, 2022</p>
            {terms.map((term, number) => {
                if (term.header) return <h1 key={number} style={{ color: "var(--DisPing-light)", fontSize: "xx-large", marginBottom: "25px" }} dangerouslySetInnerHTML={{ __html: term.header }} />;
                if (term.text) return <p key={number} style={{ color: "var(--DisPing-light)", marginBottom: "15px" }} dangerouslySetInnerHTML={{ __html: term.text }} />;
            })}
        </>
    );
}
