"use client";

import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";

const text = convertText(`
# 1. Introduction
Welcome to SnapPiP, a chrome extention developed by Ch1ll Creations (hereinafter referred to as "we," "us," or "our"). This Privacy Policy is designed to inform you about how SnapPiP processes data, including activeTab and url matching. We are committed to protecting your privacy and ensuring the security of your data.\n

# 2. Information We Collect & How We Use Collected Data
We collect the following types of information for various purposes to provide our Service to you:
<li>ActiveTab Information: We may collect information about the active tab in your browser when the extention is clicked. This is used to active PiP, by deploying a script to make this process easy for you. We also use content scripts to detect when SnapPiP should put the PiP button on the page. SnapPiP can only access the folowing webpages, such as YouTube, Disney Plus, and max.com. We use this URL match filter to ensure that we only collect information from the pages that are relevant to our Service.</li>
<li>Usage Data: We do not collect any usage data or store any information whatsoever.</li>

# 6. Updates to this Privacy Policy
This Privacy Policy may be updated from time to time to reflect changes in our practices or for legal reasons. We will notify you of any material changes by posting the updated policy on this page or through the official Discord server.

# 7. Contact Us
If you have any questions, concerns, or requests regarding your data or this Privacy Policy, please contact us at <a href="mailto:support@ch1ll.dev">support@ch1ll.dev</a>.
`);

function convertText(markdown: string) {
    let htmlText = "";
    for (const line of markdown.split("\n")) {
        if (line.startsWith('# ')) {
            const headerText = line.substring(2);
            const headerHTML = `<h1 style="color: var(--Disping-light); font-size: xx-large; font-weight: semibold;margin-bottom: 5px;">${headerText}</h1>`;
            htmlText += headerHTML;
        } else {
            const paragraph = line.replace(/<(.+?)>/g, '<$1>');
            const paragraphHTML = `<p style="color: var(--disping-light); margin-bottom: 15px;">${paragraph}</p>`;
            htmlText += paragraphHTML;
        }
    }

    return htmlText;
};

export default function Render() {
    return <Container py={4} maxWidth={"7xl"} bg={"var(--dark-blue)"}>
        <Box>
            <Heading className={"display-hb font-bold text-left"} style={{ width: "100%", fontSize: "35px", color: "rgb(255, 255, 255, .85)" }}>
                📜 SnapPiP Privacy Policy
            </Heading>
            <p style={{ width: "100%", fontSize: "15px", textAlign: "left", color: "var(--Disping-light)" }}>Last updated September 24th, 2023</p>
        </Box>
        <Box dangerouslySetInnerHTML={{ __html: text }} />
    </Container>
}
