import React from "react";

import Navbar from "../../(components)/navbar";
import TOS from "./tos.module.css";

// This Terms of Service outlines what you can and can't do across all of Ch1llDev's websites and Discord bots. By using any of Ch1llDev's Services (the \"services\"), you agree that you have read and accepted both our <a href="/legal/privacy">privacy policy</a>, and these terms of service.
// You also accept a personal license allowing you to use this service, that could be revoked/terminated at anytime. If you have any questions or concerns regarding these terms of services, you can email Ch1llDev here: <a href="mailto:support@ch1ll.dev">support@ch1ll.dev</a>` }, { header: "1. ©️ Copyright" }, { text: "All images used on any of the services are copyrighted under their respective owners." }, { header: "2. 👤 Account" }, { text: "By using any of the services, you agree that you are at the minimum age for digital consent in your country. If you are not at the minimum age, your license to use this service has been terminated." }, { header: "3. 🔗 Third Party Sites" }, { text: "The services may contain third party sites that the services does not have control over, nor resposibility for the content." }];

export default function Render() {
    return (<>
        <Navbar />
        <div className={TOS["container"]}>
            <span>
                <h1 className={"display-hb"}>
                    📜 Terms of Service
                </h1>
                <p style={{ width: "100%", fontSize: "15px", textAlign: "left", color: "var(--DisPing-light)", marginBottom: "20px" }}>Last updated May 21st, 2023</p>
            </span>
            <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the services provided by Ch1ll Creations ("us", "we", or "our").</p>

            {/* Acceptance of Terms */}
            <ol>
                <li className={"title"}>Acceptance of Terms</li>
                <p>By accessing or using any of our services, including but not limited to DisPing, SparkV, and Scribecord, you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our services.</p>
                <li className={"title"}>Description of Services</li>
                <p>Our services include, but are not limited to, the following:
                    <ul style={{ marginInlineStart: "15px" }}>
                        <li>DisPing: DisPing is a Discord bot developed by Ch1ll Creations that connects to various social networks and provides notifications to Discord users. It allows users to receive updates, messages, and other relevant information from supported social networks directly to their Discord servers.</li>
                        <li>SparkV: SparkV is a multipurpose Discord bot developed by Ch1ll Creations that offers a wide range of features, including moderation tools, server management utilities, entertainment commands, and more. It is designed to enhance and streamline the Discord server experience.</li>
                        <li>Scribecord: Scribecord is a service provided by Ch1ll Creations that allows users to transcribe, play text to speech, and record Discord voice chats. By using Scribecord, you acknowledge and agree to the following:</li>
                        <ol style={{ marginInlineStart: "50px" }}>
                            <li>Permissions and Consent: Before using Scribecord's transcription, text-to-speech, or voice recording features within a Discord voice channel, you affirm that you have obtained the necessary permissions and consent from all participants in that voice channel. It is your responsibility to ensure compliance with applicable privacy and consent laws.</li>
                            <li>Data Usage and Storage: When using Scribecord's services, including voice chat transcription, text-to-speech conversion, and voice recording, Ch1ll Creations may collect and process data from the Discord voice channels involved. This data will be handled in accordance with our Privacy Policy, which outlines how we collect, store, and use user information.</li>
                            <p>Please note that Scribecord's services are intended to enhance communication and productivity within Discord voice channels. However, it is essential to respect the privacy and consent of all participants in the voice channels before utilizing the transcription, text-to-speech, or voice recording capabilities.</p>
                        </ol>
                    </ul>
                </p>
                <li className={"title"}>Affiliations</li>
                <p>
                    <ol style={{ marginInlineStart: "50px" }}>
                        <li>Social Networks: DisPing may connect to various social networks to fetch data and deliver notifications to Discord servers. We would like to clarify that Ch1ll Creations is not affiliated with or endorsed by any of these social networks, including but not limited to Twitter, Facebook, Instagram, and others. Our services merely provide a bridge between these networks and Discord, allowing users to receive updates conveniently.</li>
                        <li>Discord Inc: We want to make it clear that DisPing, SparkV, and Scribecord, developed by Ch1ll Creations, are not affiliated with Discord Inc. Our services are built using the Discord platform and comply with Discord's Terms of Service. However, Ch1ll Creations is a separate entity from Discord Inc, and our services are developed and provided independently.</li>
                    </ol>
                </p>
                <li className={"title"}>Use of Services</li>
                <p>
                    <ol style={{ marginInlineStart: "50px" }}>
                        <li>User Conduct: You agree to use our services in compliance with all applicable laws and regulations. You shall not engage in any activities that are unlawful, harmful, defamatory, abusive, or otherwise objectionable. Furthermore, you agree not to interfere with or disrupt the integrity or performance of our services.</li>
                        <li>Prohibited Use: You shall not use our services for any unauthorized or illegal purposes, including but not limited to distributing spam, malware, or engaging in any form of hacking or unauthorized access.</li>
                    </ol>
                </p>
                <li className={"title"}>Limitation of Liability</li>
                <p>To the fullest extent permitted by law, Ch1ll Creations shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages arising out of or in connection with your use of our services. This includes, but is not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses.</p>
                <li className={"title"}>Modifications to the Terms</li>
                <p>We reserve the right to modify or update these Terms of Service at any time, with or without prior notice. It is your responsibility to review these Terms periodically for any changes. By continuing to use our services after any modifications to the Terms, you agree to be bound by the revised Terms.</p>
                <li className={"title"}>Termination</li>
                <p>We may, at our discretion, suspend or terminate your access to our services, including but not limited to DisPing, SparkV, and Scribecord, if we believe you have violated these Terms of Service or any applicable laws. We also reserve the right to suspend or terminate our services entirely or in part, with or without notice. Upon termination, all rights and licenses granted to you will cease, and you must immediately cease all use of our services. </p>
                <li className={"title"}>Entire Agreement</li>
                <p>These Terms of Service constitute the entire agreement between you and Ch1ll Creations regarding the subject matter herein and supersedes all prior or contemporaneous communications and proposals, whether oral or written, between you and Ch1ll Creations.</p>
                <li className={"title"}>Contact Us</li>
                <p>If you have any questions or concerns about these Terms of Service or our services, please contact us at <a href="mailto:support@ch1ll.dev">support@ch1ll.dev</a>.</p>
            </ol>
        </div>
    </>);
}
