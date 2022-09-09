import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head';
import NextLink from "next/link";
import NextImage from "next/image";

import config from '../config';

import { chakra, Box, Wrap, Flex, HStack, VStack, Text, VisuallyHidden, IconButton, Button, Stack, Collapse, SimpleGrid, Icon, Link, Popover, PopoverTrigger, PopoverContent, Modal, ModalOverlay, ModalContent, FormControl, InputGroup, FormLabel, InputLeftElement, InputRightElement, Input, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Menu, MenuButton, Avatar, MenuList, Center, MenuDivider, MenuItem, useColorModeValue, useBreakpointValue, useDisclosure, useColorMode, Container, Heading, TextUnderline, Spinner, FormErrorMessage } from "@chakra-ui/react";

import Header from "../components/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { FaFolder } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FiExternalLink, FiChevronDown } from "react-icons/fi";

const CHome = chakra(FaHome);
const CSearch = chakra(BsSearch);
const CFolder = chakra(FaFolder);
const CLink = chakra(FiExternalLink);

export default function Render() {
    const router = useRouter();

    const alpha100 = useColorModeValue("blackAlpha.100", "whiteAlpha.100");
    const alpha200 = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

    const [tag, setTag] = useState("all");
    const [width, setWidth] = useState(1000);
    useEffect(() => {
        setInterval(() => {
            if (window.innerWidth == width) return;
            setWidth(window.innerWidth);
        }, 400)
    }, [width]);

    return (<>
        <Head><Header name={"KingCh1ll"} /></Head>

        <Container maxW={"3xl"} padding={"0 40px"}>
            <Navbar name={"KingCh1ll"} logo={"/images/users/kingch1ll.webp"} user={null} />

            {/* Hero */}
            <Container className={"h-screen w-full pb-[10rem]"} id={"hero"} fontFamily={"Rubik, sans-serif;"}>
                <Stack p={"25% 0"} align={"center"} spacing={{ base: 8, md: 10 }} direction={{ base: "column", md: "row" }}>
                    <Stack mx={"auto"} flex={1} spacing={{ base: 5, md: 10 }} justifyContent={"center"}>
                        <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }} textAlign={"center"}>
                            <Text as={"span"} position={"relative"} textTransform={"uppercase"} fontSize={"15px"}>
                                Hi, my name is
                            </Text>
                            <br />
                            <Text as={"span"} fontSize={"8xl"} position={"relative"} fontFamily={"Shadows Into Light"}>{config.name}</Text>
                        </Heading>
                        <Text color={"#fff9"} fontSize={"18px"} m={"auto"} maxW={"650px"} fontFamily={"Satoshi-Regular, sans-serif"} textAlign={"center"} mt={{ base: "5px", sm: "10px" }} dangerouslySetInnerHTML={{ __html: config.shortDesc }} />
                    </Stack>
                </Stack>
            </Container>

            {/* About Me */}
            <Box paddingBottom={"7rem"} fontFamily={"Rubik, sans-serif;"} id={"about"}>
                <Text as={"h2"} fontWeight={"bold"} className={"display-hb"}>1. 👋 About Me</Text>
                <Stack justify={"center"} textAlign={"center"} direction={{ base: "column", md: "row" }} maxW={"max-content"}>
                    <div style={{ padding: "10% 0" }}>
                        <NextImage className={"m-auto rounded-3xl"} src={"/images/users/kingch1ll.webp"} width={"275px"} height={"275px"} />
                    </div>
                    <VStack className={"max-w-[425px] p-[20px] rounded-2xl text-center"}>
                        <VStack className={`text-${width > 780 ? "left" : "center"} text-[17px] pb-4`}><p dangerouslySetInnerHTML={{ __html: config.sections.about.text }}></p></VStack>
                    </VStack>
                </Stack>
            </Box>

            {/* Skills */}
            <Box paddingBottom={"7rem"} fontFamily={"Rubik, sans-serif;"} id={"skills"}>
                <Text as={"h2"} fontWeight={"bold"} textAlign={"left"} className={"display-hb"}>2. 💪 Skills</Text>
                <Stack justify={"center"} textAlign={"center"} direction={{ base: "column", md: "row" }} maxW={"max-content"}>
                    <VStack className={"max-w-[500px] p-[20px] rounded-2xl"}>
                        <VStack className={"text-left pb-4"}>
                            <p className={"text-[17px]"}>During my time the last 4 years of being a <strong>Software Engineer</strong>, I've built many websites, games, and Discord bots.</p>
                            <p className={"text-[17px]"}>I love creating modern and intuitive websites. My most powerful skill is front-end developement in making the most modern user interfaces nobody has ever seen before.</p>
                            <div style={{ fontSize: "17px", marginBottom: "1em" }}>
                                <p>• JavaScript/TypeScript/Lua (Roblox Ed.)/React</p>
                                <p>• Html/Css/Scss</p>
                                <p>• NextJs/NodeJs</p>
                                <p>• Bootstrap/Tailwind/Chakra</p>
                            </div>
                        </VStack>
                    </VStack>
                    <div style={{ marginTop: "20px" }}>
                        <img src={"/images/stats.svg"} width={"300px"} height={"512px"} alt={"Stats of Most Used Languages"} className={"m-auto rounded-3xl"} style={{ border: "4px solid #ffeb3b" }} />
                    </div>
                </Stack>
            </Box>

            {/* Projects */}
            <VStack maxW={"3xl"} paddingBottom={"10rem"} fontFamily={"Rubik, sans-serif;"} spacing={6} margin={"auto"} id={"projects"}>
                <Text as={"h2"} fontWeight={"bold"} textAlign={"center"} className={"display-hb"}>3. 📂 Projects</Text>
                <Wrap justify={"center"} className={"max-w-[700px] p-[20px] rounded-2xl"}>
                    {config.projects?.map(card => (
                        <Box key={card.name} margin={"auto"} bg={"#000d2b"} w={width <= 1080 ? "350px" : "300px"} className={`flex flex-col rounded-2xl${tag !== "all" ? (tag === card.tag ? "" : " hidden") : ""}`}>
                            <Flex className={"p-4"}>
                                <span className={"w-full"}><NextImage src={card.image} width={"75px"} height={"75px"} alt={card.name} className={"rounded-xl"} /></span>
                                <span className={"w-10"}>
                                    <chakra.button bg={alpha100} rounded={"full"} w={8} h={8}
                                        cursor={"pointer"} as={"a"} href={card.link} display={"inline-flex"} alignItems={"center"}
                                        justifyContent={"center"} transition={"background 0.3s ease"} _hover={{ bg: alpha200 }}>
                                        <VisuallyHidden>Link</VisuallyHidden>
                                        <CLink />
                                    </chakra.button>
                                </span>
                            </Flex>
                            <VStack className={"h-full p-4"} maxH={"full"}>
                                <span className={"w-full text-lg font-semibold"}>
                                    {card.name} {card.bot === true ? (
                                        <span style={{ backgroundColor: "rgb(88, 101, 242)", fontFamily: "sans-serif", fontSize: "14px", padding: "2px 6px 2px 6px", borderRadius: "4px", marginLeft: "5px" }}>
                                            <svg aria-label="Verified Bot" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2" style={{ display: "initial" }}>
                                                <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor"></path>
                                            </svg>
                                            BOT
                                        </span>
                                    ) : null}</span>
                                <p className={"text-[15px] h-full"}>{card.description}</p>
                                <p className={"w-full text-end"} style={{ marginInlineStart: "10px", marginTop: "35px", color: "grey", fontSize: "small" }}>{card.role}</p>
                            </VStack>
                        </Box>
                    ))}
                </Wrap>
            </VStack>

            {/* Contact */}
            <Box paddingBottom={"7rem"} fontFamily={"Rubik, sans-serif;"} id={"contact"}>
                <Text as={"h2"} fontWeight={"bold"} className={"display-hb"}>4. 🖨️ Contact</Text>
                <Text as={"p"} className={`text-${width > 780 ? "left" : "center"} text-[17px]`}>If you want to contact me, you can either join my <a href="https://discord.gg/PPtzT8Mu3h">Discord server</a> or contact me on any of the socials listed below.</Text>
            </Box>

            {/* Footer */}
            <Footer />
        </Container>
    </>);
};
