import NextImage from "next/image";

import Navbar from "../(components)/navbar";
import css from "./blog.module.css";
import config from "../../config";
import { LinkButton } from "../(components)/buttons";

export default function () {
    return (<>
        <Navbar />

        <div className={css["blogs"]}>
            <h2 className={"display-hb"}>Blog Posts</h2>
            <div className={css["wrap"]}>
                Coming soon!
                {/* {config.blogs?.map((card, i) => (
                    <div key={i} className={css["blog"]}>
                        <div className={css["container"]}>
                            <div className={"shine-box"}>
                                <div className={"shine"} style={{ fontSize: "1.125rem", lineHeight: "1.75rem", fontWeight: 600 }}>
                                    <span />
                                    <NextImage src={card.banner} width={275} height={275} />
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
                                    <NextLink href={card?.github}><LinkButton href={card?.link}>View</LinkButton></NextLink>
                                </div>
                            </div>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    </>)
}