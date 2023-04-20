import NextLink from "next/link";
import NextImage from "next/image";

import config from "../config";

import Navbar from "./(components)/navbar";
import CreateTag from "./(components)/tag";

import css from "./home.module.css";

export default function Render() {
    return (<>
        <Navbar />

        {/* Hero */}
        <div className={css["hero"]}>
            <div className={css["container"]}>
                <div className={css["header"]}>
                    <span className={css["wave"]}>👋</span> Hi, I'm {config.name}!
                </div>
                <div className={css["text"]}>
                    I'm a passionate <CreateTag name={"Software Engineer"} color={"blue"} /> & <CreateTag name={"UI/UX Designer"} color={"green"} />, living in the United States. Previously know as KingCh1ll.
                </div>
            </div>
        </div>

        {/* Projects */}
        <div className={css["projects"]} id={"projects"}>
            <h2 className={"display-hb"} style={{ maxWidth: "600px" }}>Check Out My Projects!</h2>
            <div className={css["wrap"]}>
                {config.projects?.map((card, i) => (
                    <div className={css["project"]} key={`project_${i}`}>
                        <div className={css["container"]}>
                            <div style={{ width: "100%", fontSize: "1.125rem", lineHeight: "1.75rem", fontWeight: 600 }}>
                                <NextImage src={card.image} width={46} height={46} alt={card.name} style={{ borderRadius: "0.75rem" }} />
                            </div>
                            <h1 style={{ width: "100%", textAlign: "left", fontSize: "20px" }}>
                                <NextLink href={card.link}>{card.linkName ? card.linkName : card.link.replaceAll("https://", "")}</NextLink>
                                {card.bot === true ? (
                                    <span style={{ backgroundColor: "rgb(88, 101, 242)", fontFamily: "sans-serif", fontSize: "14px", padding: "2px 6px 2px 6px", borderRadius: "4px", marginLeft: "5px" }}>
                                        <svg aria-label="Verified Bot" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2" style={{ display: "initial" }}>
                                            <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor"></path>
                                        </svg>
                                        BOT
                                    </span>
                                ) : null}
                            </h1>
                            <p className={"ellipsis-2"}>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>);
}
