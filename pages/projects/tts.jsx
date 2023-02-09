import { useState, useEffect } from 'react';
import Head from 'next/head';

import { Button, Select, FormControl, FormLabel, Textarea } from '@chakra-ui/react';

import config from '../../config';

export default function Render() {
    const [width, setWidth] = useState();
    useEffect(() => {
        setInterval(() => window.innerWidth != width && setWidth(window.innerWidth), 400)
    }, [width]);
    
    useEffect(() => {
        const textarea = document.querySelector("textarea");
        const voiceSelector = document.querySelector("select");
        const talkBtn = document.querySelector("button");
        let speaking = true;

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
                        if (voice.name === voiceSelector.value) speak.voice = voice;
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
                } else talkBtn.innerText = "Speak Text";
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
                <meta name="twitter:description" content={`An easy text to speech system. ${config.meta.description}`} />
                <meta name="twitter:site" content={config.meta.site} />
                <meta name="twitter:card" content="summary" />

                <meta property="og:title" content={config.meta.title} />
                <meta property="og:description" content={`An easy text to speech system. ${config.meta.description}`} />
                <meta property="og:image" content={config.meta.logo} />

                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <link rel="canonical" href={config.meta.site} />
                <link href="https://use.fontawesome.com/releases/v6.1.0/css/all.css" rel="stylesheet" />
            </Head>
            <div className={"h-[85vh] p-4 flex items-center justify-center"}>
                <div style={{ background: "rgb(0, 13, 43)" }}>
                    <h1 className="title">Text To Speech</h1>
                    <form action={"#"} style={{ margin: "35px 0 20px" }}>
                        <FormControl className="row">
                            <FormLabel>Enter Text</FormLabel>
                            <Textarea></Textarea>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Select a Voice</FormLabel>
                            <Select></Select>
                        </FormControl>

                        <Button>Speak Text</Button>
                    </form>
                </div>
            </div>
        </>
    );
};
