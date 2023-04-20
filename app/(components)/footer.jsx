"use client"

import NextLink from 'next/link';
import { chakra, VisuallyHidden, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaGithub, FaDiscord, FaSpotify } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")} rounded={"full"} w={8} h={8}
            cursor={"pointer"} as={"a"} href={href} display={"inline-flex"} alignItems={"center"}
            justifyContent={"center"} transition={"background 0.3s ease"} _hover={{ bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200") }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

import css from "./footer.module.css";

export default function Head() {
    return (
        <footer className={css["footer"]}>
            <div className={css["socials"]}>
                <SocialButton label={"Twitter"} href={"https://twitter.com/kingch1ll"}><FaTwitter /></SocialButton>
                <SocialButton label={"GitHub"} href={"https://github.com/kingch1ll"}><FaGithub /></SocialButton>
                <SocialButton label={"Discord"} href={"https://discord.com/users/571811686617710592"}><FaDiscord /></SocialButton>
                <SocialButton label={"YouTube"} href={"https://www.youtube.com/channel/UCvOB4pLdL7V4FmPdyNdfFeQ"}><FaYoutube /></SocialButton>
                <SocialButton label={"Spotify"} href={"https://open.spotify.com/artist/anx4tm5z1m6lpg1ulxfbmxele"}><FaSpotify /></SocialButton>
            </div>
            <span className={"text-gray"}>Made with <AiOutlineHeart fill={"red"} style={{ display: "initial" }} /> by <NextLink href={"/"}>Ch1llDev</NextLink></span>
        </footer>
    );
}