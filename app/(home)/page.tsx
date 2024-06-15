import NextLink from "next/link";
import NextImage from "next/image";

import { LinkButton, SocialButton } from "../(components)/buttons";
import Navbar from "../(components)/navbar";
import CreateTag from "../(components)/tag";

import { FaDiscord, FaGithub, FaSpotify, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsGlobeAmericas } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { IconType } from "react-icons";

import css from "./home.module.css";
import config from "../../config";

const projectBadges: Record<string, { badge: IconType, width: string, height: string }> = {
    public: {
        badge: BsGlobeAmericas,
        width: "17.5px",
        height: "17.5px"
    },
    verified: {
        badge: MdVerified,
        width: "20px",
        height: "20px"
    }
};

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
                    <CreateTag name={"Software Engineer"} color={"blue"} />
                    <CreateTag name={"UI/UX Designer"} color={"green"} />
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                    <SocialButton label={"YouTube"} href={"https://www.youtube.com/@Ch1llDev"}><FaYoutube /></SocialButton>
                    <SocialButton label={"Twitter"} href={"https://twitter.com/byteswiper"}><FaTwitter /></SocialButton>
                    <SocialButton label={"Discord"} href={"https://discord.gg/PPtzT8Mu3h"}><FaDiscord /></SocialButton>
                    <SocialButton label={"GitHub"} href={"https://github.com/kingch1ll"}><FaGithub /></SocialButton>
                </div>
            </div>
            <a href={"#about"} className={css["sideText"]}>
                About Me
                <AiOutlineArrowDown style={{ marginInlineEnd: "4px", transform: "rotate(90deg)", width: "18px", height: "18px" }} />
            </a>
        </div>

        {/* About */}
        <div className={css["about"]} id={"about"}>
            <h2 className={"display-hb"} style={{ maxWidth: "600px", paddingTop: "5.5rem", paddingBottom: ".5rem" }}>About</h2>
            <div className={css["info"]}>
                <h3>Who am I?</h3>
                <p>Hi, I am Ch1llDev. I'm a high school student in the United States. Formally known as KingCh1ll, I first started coding Roblox games at the age of 10. I would take a look at free models in the toolbox, and see how they work. I slowly built up an understanding of how code works. After years of making Roblox games, I found NodeJs which powered me to make more cool projects.</p>
                <h3>What are you known for?</h3>
                <p>I am most notably known for making Websites and Discord bots, such as <NextLink href={"https://disping.xyz/"}>Disping</NextLink> and <NextLink href={"https://sparkv.tk"}>SparkV</NextLink>.</p>
                <div className={css["skills"]}>
                    <div className={css["skill"]}>
                        <NextImage src={"/images/skills/typescript.png"} width={28} height={28} loading={"lazy"} alt={"typescript"} />
                    </div>
                    <div className={css["skill"]}>
                        <NextImage src={"/images/skills/lua.png"} width={28} height={28} loading={"lazy"} alt={"lua"} />
                    </div>
                    <div className={css["skill"]}>
                        <NextImage src={"/images/skills/python.png"} width={28} height={28} loading={"lazy"} alt={"python"} />
                    </div>
                    <div className={css["skill"]}>
                        <NextImage src={"/images/skills/html.png"} width={28} height={28} loading={"lazy"} alt={"html"} />
                    </div>
                    <div className={css["skill"]}>
                        <NextImage src={"/images/skills/css.png"} width={28} height={28} loading={"lazy"} alt={"css"} />
                    </div>
                </div>
            </div>
        </div>

        {/* Promoted */}
        <div className={css["showcases"]}>
            <div className={css["wrap"]}>
                {config.projects?.filter(p => p?.showcase === true)?.map((card: { name: string, description?: string, link?: string, github?: string, image?: string, badges: string[] }, i) => (
                    <div className={css["showcase"]} key={`project_${i}`}>
                        <div className={css["container"]}>
                            <div style={{ width: "100%" }}>
                                <CreateTag name={"#PROMOTED"} color={"blue"} />
                            </div>
                            <div className={"shine-box"}>
                                <div className={"shine"} style={{ fontSize: "1.125rem", lineHeight: "1.75rem", fontWeight: 600 }}>
                                    <span />
                                    {card.image ? <NextImage src={card.image} width={575} height={300} alt={`${card.name} Banner`} style={{ borderRadius: "0.75rem" }} /> : null}
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", width: "100%", padding: "10px" }}>
                                <h1 style={{ width: "100%", textAlign: "left", fontSize: "20px", display: "inline-flex", gap: "7.5px", alignItems: "center" }}>
                                    {card.link ? <NextLink href={card.link}>{card.name}</NextLink> : card.name}
                                    {card.badges?.map((b, i) => {
                                        if (!projectBadges[b]?.badge) return "";

                                        const data = projectBadges[b];
                                        return <data.badge key={i} style={{ width: data.width, height: data.height }} />;
                                    })}
                                </h1>
                                <p>{card.description}</p>
                                <div style={{ display: "flex", gap: ".5rem", padding: ".75rem 0" }}>
                                    <NextLink href={card?.link ?? "/"} passHref><LinkButton href={card?.link ?? "/"}>Website</LinkButton></NextLink>
                                    <NextLink href={card?.github ?? "/"} passHref><LinkButton href={card?.github ?? "/"}>Github</LinkButton></NextLink>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {config.blogs?.filter(p => p?.showcase === true)?.map((card: { title: string, description: string, image?: string, link?: string }, i) => (
                    <div className={css["showcase"]} key={`project_${i}`}>
                        <div className={css["container"]}>
                            <div style={{ width: "100%" }}>
                                <CreateTag name={"#PROMOTED"} color={"blue"} />
                            </div>
                            <div className={"shine-box"}>
                                <div className={"shine"} style={{ fontSize: "1.125rem", lineHeight: "1.75rem", fontWeight: 600 }}>
                                    <span />
                                    {card.image ? <NextImage src={card.image} width={575} height={300} alt={`${card.title} Banner`} style={{ borderRadius: "0.75rem" }} /> : null}
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", width: "100%", padding: "10px" }}>
                                <h1 style={{ width: "100%", textAlign: "left", fontSize: "20px", display: "inline-flex", gap: "7.5px", alignItems: "center" }}>
                                    {card.link ? <NextLink href={card.link}>{card.title}</NextLink> : card.title}
                                </h1>
                                <p>{card.description}</p>
                                <div style={{ display: "flex", gap: ".5rem", padding: ".75rem 0" }}>
                                    <NextLink href={card?.link ?? "/"} passHref><LinkButton href={card?.link ?? "/"}>Website</LinkButton></NextLink>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>);
}
