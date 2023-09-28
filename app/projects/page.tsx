import NextImage from "next/image";
import NextLink from "next/link";

import { BsGlobeAmericas } from "react-icons/bs";
import { MdVerified } from "react-icons/md";

import { LinkButton } from "../(components)/buttons";
import Navbar from "../(components)/navbar";
import css from "./project.module.css";
import config from "../../config";

const projectBadges = {
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

        {/* Projects */}
        <div className={css["projects"]}>
            <h2 className={"display-hb"} style={{ maxWidth: "600px", paddingTop: "5.5rem", paddingBottom: ".5rem" }}>Projects</h2>
            <div className={css["wrap"]}>
                {config.projects?.map((card: { name: string, description?: string, link?: string, github?: string, image?: string, badges: string[] }, i) => (
                    <div className={css["project"]} key={`project_${i}`}>
                        <div className={css["container"]}>
                            <div className={"shine-box"}>
                                <div className={"shine"} style={{ fontSize: "1.125rem", lineHeight: "1.75rem", fontWeight: 600 }}>
                                    <span />
                                    {card.image ? <NextImage src={card.image} width={300} height={150} alt={card.name + " Banner"} style={{ borderRadius: "0.75rem" }} /> : null}
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", width: "100%", padding: "10px" }}>
                                <h1 style={{ width: "100%", textAlign: "left", fontSize: "20px", display: "inline-flex", gap: "7.5px", alignItems: "center" }}>
                                    {card.link ? <NextLink href={card.link}>{card.name}</NextLink> : card.name}
                                    {card.badges?.map((b, i) => {
                                        if (!projectBadges[b as keyof typeof projectBadges]?.badge) return "";

                                        const data = projectBadges[b as keyof typeof projectBadges];
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
            </div>
        </div>
    </>)
}