import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from 'next/head';
import NextLink from "next/link";
import NextImage from "next/image";

import config from '../config';

import { chakra, Box, Wrap, Flex, HStack, VStack, Text, VisuallyHidden, Stack, SimpleGrid, Icon, Link, Popover, PopoverTrigger, PopoverContent, Modal, ModalOverlay, ModalContent, FormControl, InputGroup, FormLabel, InputLeftElement, InputRightElement, Input, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Menu, MenuButton, Avatar, MenuList, Center, MenuDivider, MenuItem, useColorModeValue, useBreakpointValue, useDisclosure, useColorMode, Container, Heading, Spinner, FormErrorMessage, WrapItem, Accordion, AccordionItem, AccordionPanel, AccordionIcon, AccordionButton, Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";

import Header from "../components/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { FaDiscord, FaFolder } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FiExternalLink, FiChevronDown } from "react-icons/fi";
import { RiBracesLine } from "react-icons/ri";
import { FaPaintBrush } from "react-icons/fa";
import { BsImageFill } from "react-icons/bs";
import { SiTypescript } from "react-icons/si";

const CHome = chakra(FaHome);
const CSearch = chakra(BsSearch);
const CFolder = chakra(FaFolder);
const CLink = chakra(FiExternalLink);
const CBraces = chakra(RiBracesLine);
const CBrush = chakra(FaPaintBrush);
const CImage = chakra(BsImageFill);
const TypeScript = chakra(SiTypescript);

export default function Render() {
    const router = useRouter();

    const alpha100 = useColorModeValue("blackAlpha.100", "whiteAlpha.100");
    const alpha200 = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

    const [width, setWidth] = useState();
    useEffect(() => {
        setInterval(() => window.innerWidth != width && setWidth(window.innerWidth), 400)
    }, [width]);

    return (<>
        <Head><Header /></Head>

        <Container maxW={"8xl"} padding={"0 40px"} fontFamily={"Rubik, sans-serif;"}>
            <Navbar name={config.name} logo={config.logo} user={null} />

            {/* Hero */}
            <Container id={"hero"} fontFamily={"Rubik, sans-serif;"} style={{ height: "100vh", width: "100%", paddingTop: "2.5rem", paddingBottom: "15rem" }}>
                <Stack h={"full"} w={"100%"} align={"center"} spacing={{ base: 8, md: 10 }} direction={{ base: "column", md: "row" }}>
                    <Stack mx={"auto"} h={"full"} flex={1} spacing={{ base: 5, md: 10 }} justifyContent={"center"}>
                        <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "6rem", sm: "6rem", lg: "8rem" }} textAlign={"center"} fontFamily={"Shadows Into Light"}>{config.name}</Heading>
                        <HStack justifyContent={"center"} pt={"15px"}>
                            <Tag size={"lg"} fontFamily={"Rubik, sans-serif;"} colorScheme={"blue"}>
                                <TagLabel fontWeight={"medium"}>Software Engineer</TagLabel>
                            </Tag>
                            <Tag size={"lg"} fontFamily={"Rubik, sans-serif;"} colorScheme={"green"}>
                                <TagLabel fontWeight={"medium"}>UI/UX Designer</TagLabel>
                            </Tag>
                        </HStack>
                        <Text color={"#fff9"} fontSize={"18px"} m={"auto"} maxW={"650px"} fontFamily={"Satoshi-Regular, sans-serif"} textAlign={"center"} mt={{ base: "5px", sm: "10px" }} dangerouslySetInnerHTML={{ __html: config.shortDesc }} />
                    </Stack>
                </Stack>
            </Container>

            {/* About Me
            <Box maxWidth={"6xl"} margin={"auto"} paddingBottom={"7rem"} fontFamily={"Rubik, sans-serif;"} id={"about"}>
                <Text as={"h2"} fontWeight={"bold"} className={"display-hb mx-5 pb-4"}>1. 👋 About Me</Text>
                <Stack w={"full"} justify={"center"} textAlign={"center"} direction={{ base: "column", md: "row" }}>
                    <Stack style={{ paddingTop: "40px" }}>
                        <img className={"m-auto rounded-3xl"} src={config.sections.about.image} width={"275px"} height={"275px"} />
                    </Stack>
                    <Text className={`${width >= 780 ? "max-w-[500px]" : ""} text-${width > 780 ? "left" : "center"} text-[17px] p-[20px] rounded-2xl text-center pb-4`} dangerouslySetInnerHTML={{ __html: config.sections.about.text }} />
                </Stack>
            </Box> */}

            {/* Projects */}
            <VStack padding={"10px"} margin={"auto"} paddingBottom={"10rem"} fontFamily={"Rubik, sans-serif;"} id={"projects"}>
                <Text as={"h2"} maxWidth={"6xl"} fontWeight={"bold"} className={"display-hb"}>1. 📂 Projects</Text>
                <Wrap gap={8} justify={"center"} borderRadius={"1rem"} maxWidth={"100%"}>
                    {config.projects?.map((card, i) => (
                        <WrapItem key={`project_${i}`} bg={"#000d2b"} width={"450px"} style={{ borderRadius: "1rem" }}>
                            <VStack height={"100%"} width={"full"} padding={"1rem"} maxH={"full"}>
                                <div style={{ width: "100%", fontSize: "1.125rem", lineHeight: "1.75rem", fontWeight: 600 }}>
                                    <NextImage src={card.image} width={46} height={46} alt={card.name} style={{ borderRadius: "0.75rem" }} />
                                </div>
                                <h1 style={{ width: "100%", textAlign: "center", fontSize: "20px" }}><NextLink href={card.link}>{card.linkName ? card.linkName : card.link.replaceAll("https://", "")}</NextLink> {card.bot === true ? (
                                    <span style={{ backgroundColor: "rgb(88, 101, 242)", fontFamily: "sans-serif", fontSize: "14px", padding: "2px 6px 2px 6px", borderRadius: "4px", marginLeft: "5px" }}>
                                        <svg aria-label="Verified Bot" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2" style={{ display: "initial" }}>
                                            <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor"></path>
                                        </svg>
                                        BOT
                                    </span>
                                ) : null}</h1>
                                <HStack>{card?.tags?.map((tag, i) => (<Tag key={i} colorScheme={tag.color} cursor={"pointer"}><TagLabel>{tag.label}</TagLabel></Tag>))}</HStack>
                                <Text style={{ fontSize: "15px" }} className={`ellipsis-2`} dangerouslySetInnerHTML={{ __html: card.description }} />
                            </VStack>
                        </WrapItem>
                    ))}
                </Wrap>
            </VStack>

            {/* Contact */}
            <Box maxW={"3xl"} margin={"auto"} paddingBottom={"7rem"} fontFamily={"Rubik, sans-serif;"} id={"contact"}>
                <Text as={"h2"} fontWeight={"bold"} className={"display-hb"}>2. 🖨️ Contact</Text>
                <Text as={"p"} textAlign={width > 780 ? "left" : "center"} fontSize={"17px"}>If you want to contact me, you can either join my <a href="https://discord.gg/PPtzT8Mu3h">Discord server</a> or contact me on any of the socials listed below.</Text>
            </Box>

            {/* Footer */}
            <Footer />
        </Container>
    </>);
};
