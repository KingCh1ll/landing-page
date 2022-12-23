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
            <Navbar name={"KingCh1ll"} logo={"/images/users/kingch1ll.webp"} user={null} />

            {/* Hero */}
            <Container className={"h-screen w-screen pb-[15rem]"} id={"hero"} fontFamily={"Rubik, sans-serif;"}>
                <Stack h={"full"} align={"center"} spacing={{ base: 8, md: 10 }} direction={{ base: "column", md: "row" }}>
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
            <VStack padding={"10px"} margin={"auto"} paddingBottom={"10rem"} fontFamily={"Rubik, sans-serif;"} spacing={6} id={"projects"}>
                <Text as={"h2"} maxWidth={"6xl"} fontWeight={"bold"} className={"display-hb mx-8 pb-4"}>1. 📂 Projects</Text>
                {/* <Accordion allowMultiple justifyContent={"center"} textAlign={"center"} flexDirection={{ base: "row", md: "row", lg: "column" }}>
                    <AccordionItem>
                        <AccordionButton border={"none"}>
                            <Box flex={"1"} textAlign={"left"}><CBraces display={"inline-block"} w={5} h={5} /> Programming Languages</Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Box display={"flex"} flexDirection={"column"}>
                                <Box w={"full"}><NextImage width={"38px"} height={"38px"} src={"/images/skills/javascript.png"}></NextImage></Box>
                                <Box w={"full"} h={"full"}><Text h={'full'}>JavaScript</Text></Box>
                            </Box>
                            <Box display={"flex"} flexDirection={"column"}>
                                <Box w={"full"}><NextImage width={"38px"} height={"38px"} src={"/images/skills/typescript.png"}></NextImage></Box>
                                <Box w={"full"} h={"full"}><Text h={'full'}>TypeScript</Text></Box>
                            </Box>
                            <Box display={"flex"} flexDirection={"column"}>
                                <Box w={"full"}><NextImage width={"38px"} height={"38px"} src={"/images/skills/python.png"}></NextImage></Box>
                                <Box w={"full"} h={"full"}><Text h={'full'}>Python</Text></Box>
                            </Box>
                            <Box display={"flex"} flexDirection={"column"}>
                                <Box w={"full"}><NextImage width={"50px"} height={"50px"} src={"/images/skills/lua.png"}></NextImage></Box>
                                <Box w={"full"} h={"full"}><Text h={'full'}>Lua</Text></Box>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton border={"none"}>
                            <Box flex={"1"} textAlign={"left"}><CBrush display={"inline-block"} w={5} h={5} /> Web Development Tools</Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Box display={"flex"} flexDir={"column"}>
                                <Box w={"full"}><NextImage width={"38px"} height={"38px"} src={"/images/skills/html.png"}></NextImage></Box>
                                <Box w={"full"} h={"full"}><Text h={'full'}>HTML</Text></Box>
                            </Box>
                            <Box display={"flex"} flexDir={"column"}>
                                <Box w={"full"}><NextImage width={"38px"} height={"38px"} src={"/images/skills/css.png"}></NextImage></Box>
                                <Box w={"full"} h={"full"}><Text h={'full'}>CSS</Text></Box>
                            </Box>
                            <Box display={"flex"} flexDir={"column"}>
                                <Box w={"full"}><NextImage width={"34px"} height={"34px"} src={"/images/skills/javascript.png"}></NextImage></Box>
                                <Box w={"full"} h={"full"}><Text h={'full'}>JavaScript</Text></Box>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion> */}
                <Wrap gap={4} justify={"center"} className={"p-[20px] rounded-2xl"}>
                    {config.projects?.map((card, i) => (
                        <Box key={`project_${i}`} bg={"#000d2b"} width={"450px"} className={`flex flex-col margin-auto rounded-2xl`}>
                            <Flex className={"pt-4 px-4"}>
                                <span className={"w-full"}>
                                    <NextImage src={card.image} width={45} height={45} alt={card.name} className={"rounded-xl"} />
                                </span>
                                <Stack className={"w-10"}>
                                    <chakra.button as={"a"} href={card.link} w={8} h={8} bg={alpha100} className={"inline-flex rounded-full cursor-pointer justify-center items-center"} transition={"background 0.3s ease"} _hover={{ bg: alpha200 }}>
                                        <VisuallyHidden>Link</VisuallyHidden>
                                        <CLink />
                                    </chakra.button>
                                </Stack>
                            </Flex>
                            <Flex as={VStack}>
                                <VStack className={`h-full w-full p-4`} maxH={"full"}>
                                    <span className={"w-full text-lg font-semibold"}>
                                        {card.name} {card.bot === true ? (
                                            <span style={{ backgroundColor: "rgb(88, 101, 242)", fontFamily: "sans-serif", fontSize: "14px", padding: "2px 6px 2px 6px", borderRadius: "4px", marginLeft: "5px" }}>
                                                <svg aria-label="Verified Bot" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2" style={{ display: "initial" }}>
                                                    <path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor"></path>
                                                </svg>
                                                BOT
                                            </span>
                                        ) : null}</span>
                                    <Text className={`text-[15px] h-[50px] w-[300px] ellipsis-2`} dangerouslySetInnerHTML={{ __html: card.description }} />
                                    <HStack>{card?.tags?.map((tag, i) => (<Tag key={i} colorScheme={tag.color} cursor={"pointer"}><TagLabel>{tag.label}</TagLabel></Tag>))}</HStack>
                                    {/* <Text className={"w-full text-end"} style={{ marginInlineStart: "10px", marginTop: "35px", color: "grey", fontSize: "small" }} dangerouslySetInnerHTML={{ __html: card.role }} /> */}
                                </VStack>
                                <VStack className={"h-full w-full p-4 shine-box"} maxH={"full"}>
                                    {card.thumbnail ? (
                                        <Box className={"shine"}>
                                            <span></span>
                                            <img src={card.thumbnail} width={"400px"} height={"250px"} className={"rounded-lg"} />
                                        </Box>
                                    ) : (
                                        <Box className="w-[300px] h-[150px] py-16 text-center opacity-50 rounded-md border-2 border-gray-400 transition" _hover={{ opacity: "1" }}><CImage w={10} h={10} m={"auto"} /></Box>
                                    )}
                                </VStack>
                            </Flex>
                        </Box>
                    ))}
                </Wrap>
            </VStack>

            {/* Contact */}
            <Box maxW={"3xl"} margin={"auto"} paddingBottom={"7rem"} fontFamily={"Rubik, sans-serif;"} id={"contact"}>
                <Text as={"h2"} fontWeight={"bold"} className={"display-hb"}>2. 🖨️ Contact</Text>
                <Text as={"p"} className={`text-${width > 780 ? "left" : "center"} text-[17px]`}>If you want to contact me, you can either join my <a href="https://discord.gg/PPtzT8Mu3h">Discord server</a> or contact me on any of the socials listed below.</Text>
            </Box>

            {/* Footer */}
            <Footer />
        </Container>
    </>);
};
