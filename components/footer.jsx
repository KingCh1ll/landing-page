import NextLink from 'next/link';
import Image from 'next/image';

import { chakra, Box, Flex, HStack, VStack, Text, VisuallyHidden, IconButton, Button, Stack, Collapse, SimpleGrid, Icon, Link, Popover, PopoverTrigger, PopoverContent, Modal, ModalOverlay, ModalContent, FormControl, InputGroup, FormLabel, InputLeftElement, InputRightElement, Input, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Menu, MenuButton, Avatar, MenuList, Center, MenuDivider, MenuItem, useColorModeValue, useBreakpointValue, useDisclosure, useColorMode, Container, Heading, TextUnderline, Spinner, FormErrorMessage } from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram, FaGithub, FaDiscord, FaSpotify } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

import config from '../config';

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

export default function Head() {
    return (
        <footer className={"flex flex-col py-5 px-3 w-full"} style={{ fontFamily: "Rubik" }}>
            <div className={"w-full"}>
                <div className={"flex flex-row max-w-[250px] m-auto justify-evenly pb-2"}>
                    <SocialButton label={"Twitter"} href={"https://twitter.com/Ch1llDev"}><FaTwitter /></SocialButton>
                    <SocialButton label={"GitHub"} href={"https://github.com/Ch1llDev"}><FaGithub /></SocialButton>
                    <SocialButton label={"Discord"} href={"https://discord.com/users/571811686617710592"}><FaDiscord /></SocialButton>
                    <SocialButton label={"YouTube"} href={"https://www.youtube.com/channel/UCvOB4pLdL7V4FmPdyNdfFeQ"}><FaYoutube /></SocialButton>
                    {/* <SocialButton label={"Instagram"} href={"#"}><FaInstagram /></SocialButton> */}
                    <SocialButton label={"Spotify"} href={"https://open.spotify.com/artist/anx4tm5z1m6lpg1ulxfbmxele"}><FaSpotify /></SocialButton>
                </div>
            </div>
            <span className={"w-full text-center text-gray"}>Made with <AiOutlineHeart fill={"red"} style={{ display: "initial" }} /> by <a href={"https://ch1ll.dev/"}>Ch1llDev</a></span>
        </footer>
    );
}