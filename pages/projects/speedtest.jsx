import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from "next/script";

import { HiOutlineNewspaper, HiOutlineLink, HiX, HiOutlineExclamation, HiOutlineFolder, HiOutlineMenuAlt2, HiOutlineFire, HiOutlineCode } from 'react-icons/hi';

import config from '../../config';

export default function Render() {
    useEffect(() => {
        // Variables
        const typingContent = document.querySelector(".typing_content p");
        const restart = document.querySelector(".restart");
        const time = document.querySelector(".time span b");
        let timer;
        let maxTime = 60;
        let timeLeft = 60;
        let chars = 0;
        let mistakes = 0;
        let isTyping = 0;

        // restart.addEventListener("click", resetGame);
        /*
inpField = document.querySelector(".wrapper .input-field"),
timeTag = document.querySelector(".time span b"),
mistakeTag = document.querySelector(".mistake span"),
wpmTag = document.querySelector(".wpm span"),
cpmTag = document.querySelector(".cpm span");

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingContent.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`
        typingContent.innerHTML += span;
    });
    typingContent.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingContent.addEventListener("click", () => inpField.focus());
}
function initTyping() {
    let characters = typingContent.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if(charIndex < characters.length - 1 && timeLeft > 0) {
        if(!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if(typedChar == null) {
            if(charIndex > 0) {
                charIndex--;
                if(characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if(characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");
        let wpm = Math.round(((charIndex - mistakes)  / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        
        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }   
}
function initTimer() {
    if(timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes)  / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}
function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}
loadParagraph();
inpField.addEventListener("input", initTyping);

        */
    });

    return (
        <>
            <Head>
                <title>{config.meta.title}</title>
                <link rel="manifest" href={config.meta.manifest} />
                <link rel="shortcut icon" type="image/x-icon" href={config.meta.logo} />
                <meta property="description" content={config.meta.description} />
                <meta property="keywords" content={config.meta.keywords.join(", ").toLowerCase()} />

                <meta name="twitter:title" content={config.meta.title} />
                <meta name="twitter:description" content={config.meta.description} />
                <meta name="twitter:site" content={config.meta.site} />
                <meta name="twitter:card" content="summary" />

                <meta property="og:title" content={config.meta.title} />
                <meta property="og:description" content={config.meta.description} />
                <meta property="og:image" content={config.meta.logo} />

                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <link rel="canonical" href={config.meta.site} />
                <link href="https://use.fontawesome.com/releases/v6.1.0/css/all.css" rel="stylesheet" />
            </Head>
            <div className="root" style={{ height: "85vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="wrapper" style={{ width: "770px", background: "rgb(0, 13, 43)" }}>
                    <h1 className="title">Typing Speed Test</h1>

                    <input type="text" style={{ position: "absolute", opacity: "0", zIndex: "-999" }} />
                    <div style={{ padding: "13px 20px 0", border: "1px solid #bfbfbf", borderRadius: "10px" }}>
                        <div className="typing_content" style={{ maxHeight: "256px", overflow: "hidden" }}>
                            <p style={{ fontSize: "21px", letterSpacing: "1px", textAlign: "justify", wordBreak: "break-all" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nunc euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nunc euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nunc euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nunc euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nunc euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nunc euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nunc euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nunc euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nunc euismod nisi. Sed euismod, urna eu tincidunt consectetur, nisl nunc euismod nisi, eu porttitor nisl nunc euismod nisi. Sed euismod,
                            </p>
                        </div>
                        <div style={{ display: "flex", padding: "12px 0", marginTop: "18px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #bfbfbf" }}>
                            <ul className="stats" style={{ display: "flex", width: "calc(100% - 140px)", listStyle: "none", alignItems: "center", justifyContent: "space-between" }}>
                                <li className="time" style={{ height: "20px", display: "flex", listStyle: "none", position: "relative", alignItems: "center" }}>
                                    <p>Time Left:</p>
                                    <span style={{ display: "block", marginLeft: "10px", fontSize: "20px" }}><b style={{ fontWeight: "500" }}>60</b>s</span>
                                </li>
                                <li className="mistake" style={{ height: "20px", display: "flex", listStyle: "none", position: "relative", alignItems: "center", paddingLeft: "22px", borderLeft: "1px solid #bfbfbf" }}>
                                    <p>Mistakes:</p>
                                    <span style={{ display: "block", marginLeft: "10px", fontSize: "20px", fontWeight: "500" }}>0</span>
                                </li>
                                <li className="wpm" style={{ height: "20px", display: "flex", listStyle: "none", position: "relative", alignItems: "center", paddingLeft: "22px", borderLeft: "1px solid #bfbfbf" }}>
                                    <p>WPM:</p>
                                    <span style={{ display: "block", marginLeft: "10px", fontSize: "20px", fontWeight: "500" }}>0</span>
                                </li>
                                <li className="cpm" style={{ height: "20px", display: "flex", listStyle: "none", position: "relative", alignItems: "center", paddingLeft: "22px", borderLeft: "1px solid #bfbfbf" }}>
                                    <p>CPM:</p>
                                    <span style={{ display: "block", marginLeft: "10px", fontSize: "20px", fontWeight: "500" }}>0</span>
                                </li>
                            </ul>
                            <button className="button button-blue restart" style={{ maxWidth: "30px", transition: "all .25s ease-out", WebkitTransition: "all .25s ease-in-out" }}>
                                <i className="fa-solid fa-arrow-rotate-right" style={{ fontSize: "27.5px", margin: "-12px -12px" }}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
