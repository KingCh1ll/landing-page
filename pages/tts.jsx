import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from "next/script";

import { HiOutlineNewspaper, HiOutlineLink, HiX, HiOutlineExclamation, HiOutlineFolder, HiOutlineMenuAlt2, HiOutlineFire, HiOutlineCode } from 'react-icons/hi';

import config from '../config';

export default function Render() {
    const [width, setWidth] = useState()
    useEffect(() => {
        setInterval(() => {
            if (window.innerWidth == width) return;
            setWidth(window.innerWidth);
        }, 400)

        // Variables
        const textarea = document.querySelector("textarea");
        const voiceSelector = document.querySelector("select");
        const talkBtn = document.querySelector("button");
        let speaking = true;

        // Code
        function updateVoices() {
            speechSynthesis?.getVoices()?.forEach(voice => voiceSelector.insertAdjacentHTML("beforeend", `<option value="${voice.name}" ${voice.name === "Google US English" ? "selected" : ""}>${voice.name} (${voice.lang})</option>`));
        }

        updateVoices();
        speechSynthesis.addEventListener("voiceschanged", updateVoices);

        talkBtn.addEventListener("click", event => {
            event.preventDefault();

            if (textarea.value !== "") {
                if (!speechSynthesis.speaking) {
                    const speak = new SpeechSynthesisUtterance();
                    speak.text = textarea.value;
                    speechSynthesis.getVoices().forEach(voice => {
                        if (voice.name === voiceSelector.value) {
                            speak.voice = voice;
                        }
                    });

                    speechSynthesis.speak(speak);
                }

                if (textarea.value.length > 20) {
                    setInterval(() => {
                        if (!speechSynthesis.speaking && !speaking) {
                            speaking = true;
                            talkBtn.innerText = "Speak Text";
                        }
                    }, 500);

                    if (speaking) {
                        speechSynthesis.resume();
                        speaking = false;
                        talkBtn.innerText = "Pause";
                    } else {
                        speechSynthesis.pause();
                        speaking = true;
                        talkBtn.innerText = "Resume";
                    }
                } else {
                    talkBtn.innerText = "Speak Text";
                }
            }
        });
    });

    return (
        <>
            <Head>
                <title>{config.meta.title}</title>
                <link rel="manifest" href={config.meta.manifest} />
                <link rel="shortcut icon" type="image/x-icon" href={config.meta.logo} />
                <meta property="description" content={`An easy text to speech system. ${config.meta.description}`} />
                <meta property="keywords" content={config.meta.keywords.join(", ").toLowerCase()} />

                <meta name="twitter:title" content={config.meta.title} />
                <meta name="twitter:description" content={`An easy text to speech system. ${config.meta.description}`}  />
                <meta name="twitter:site" content={config.meta.site} />
                <meta name="twitter:card" content="summary" />

                <meta property="og:title" content={config.meta.title} />
                <meta property="og:description" content={`An easy text to speech system. ${config.meta.description}`}  />
                <meta property="og:image" content={config.meta.logo} />

                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <link rel="canonical" href={config.meta.site} />
                <link href="https://use.fontawesome.com/releases/v6.1.0/css/all.css" rel="stylesheet" />
            </Head>
            <div className="root" style={{ height: "85vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="wrapper" style={{ background: "rgb(0, 13, 43)" }}>
                    <h1 className="title">Text To Speech</h1>
                    <form action="#" style={{ margin: "35px 0 20px" }}>
                        <div className="row">
                            <label>Enter Text</label>
                            <textarea></textarea>
                        </div>
                        <div className="row">
                            <label>Select a Voice</label>
                            <div className="container">
                                <select></select>
                            </div>
                        </div>

                        <button className="button button-blue" style={{ transition: "all .25s ease-out", WebkitTransition: "all .25s ease-in-out" }}>Speak Text</button>
                    </form>
                </div>
            </div>
        </>
    );
};
