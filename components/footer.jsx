import NextLink from 'next/link';
import { chakra, Box, Flex, HStack, VStack, Text, VisuallyHidden, IconButton, Button, Stack, Collapse, SimpleGrid, Icon, Link, Popover, PopoverTrigger, PopoverContent, Modal, ModalOverlay, ModalContent, FormControl, InputGroup, FormLabel, InputLeftElement, InputRightElement, Input, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Menu, MenuButton, Avatar, MenuList, Center, MenuDivider, MenuItem, useColorModeValue, useBreakpointValue, useDisclosure, useColorMode, Container, Heading, TextUnderline, Spinner, FormErrorMessage } from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram, FaGithub, FaDiscord, FaSpotify } from "react-icons/fa";
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

export default function Head() {
    return (
        <footer style={{ display: "flex", flexDirection: "column", width: "100%", fontFamily: "Rubik", padding: "1.25rem 0.75rem" }}>
            <div style={{ width: "100%" }}>
                <div style={{ display: "flex", flexDirection: "row", maxWidth: "250px", margin: "auto", justifyContent: "space-evenly", paddingBottom: "0.5rem" }}>
                    <SocialButton label={"Twitter"} href={"https://twitter.com/kingch1ll"}><FaTwitter /></SocialButton>
                    <SocialButton label={"GitHub"} href={"https://github.com/kingch1ll"}><FaGithub /></SocialButton>
                    <SocialButton label={"Discord"} href={"https://discord.com/users/571811686617710592"}><FaDiscord /></SocialButton>
                    <SocialButton label={"YouTube"} href={"https://www.youtube.com/channel/UCvOB4pLdL7V4FmPdyNdfFeQ"}><FaYoutube /></SocialButton>
                    {/* <SocialButton label={"Instagram"} href={"#"}><FaInstagram /></SocialButton> */}
                    <SocialButton label={"Spotify"} href={"https://open.spotify.com/artist/anx4tm5z1m6lpg1ulxfbmxele"}><FaSpotify /></SocialButton>
                </div>
            </div>
            <span style={{ width: "100%", textAlign: "center" }} className={"text-gray"}>Made with <AiOutlineHeart fill={"red"} style={{ display: "initial" }} /> by <NextLink href={"https://ch1ll.dev/"}>Ch1llDev</NextLink></span>
        </footer>
    );
}