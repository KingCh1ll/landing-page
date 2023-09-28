"use client"

import { FaTwitter, FaYoutube, FaGithub, FaDiscord, FaSpotify } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import NextLink from "next/link";

import { SocialButton } from "./buttons";
import css from "./footer.module.css";

export default function Head() {
    return (
        <footer className={css["footer"]}>
            <div className={css["socials"]}>
                <SocialButton label={"YouTube"} href={"https://www.youtube.com/@Ch1llDev"}><FaYoutube /></SocialButton>
                <SocialButton label={"Twitter"} href={"https://twitter.com/kingch1ll"}><FaTwitter /></SocialButton>
                <SocialButton label={"Discord"} href={"https://discord.gg/PPtzT8Mu3h"}><FaDiscord /></SocialButton>
                <SocialButton label={"GitHub"} href={"https://github.com/kingch1ll"}><FaGithub /></SocialButton>
                <SocialButton label={"Spotify"} href={"https://open.spotify.com/artist/anx4tm5z1m6lpg1ulxfbmxele"}><FaSpotify /></SocialButton>
            </div>
            <span className={"text-gray"}>
                Made with <AiOutlineHeart fill={"red"} style={{ display: "initial" }} /> by <NextLink href={"/"}>Ch1llDev</NextLink>
                <br />
            </span>
        </footer>
    );
}