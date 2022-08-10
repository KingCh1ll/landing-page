import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head';
import NextLink from "next/link";
import NextImage from "next/image";

import config from '../config';

import { chakra, Box, Wrap, Flex, HStack, VStack, Text, VisuallyHidden, IconButton, Button, Stack, Collapse, SimpleGrid, Icon, Link, Popover, PopoverTrigger, PopoverContent, Modal, ModalOverlay, ModalContent, FormControl, InputGroup, FormLabel, InputLeftElement, InputRightElement, Input, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Menu, MenuButton, Avatar, MenuList, Center, MenuDivider, MenuItem, useColorModeValue, useBreakpointValue, useDisclosure, useColorMode, Container, Heading, TextUnderline, Spinner, FormErrorMessage } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import ParticleImage, { ParticleOptions, Vector, forces, ParticleForce } from "react-particle-image";

import Header from "../components/head";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { FaFolder } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FiExternalLink, FiChevronDown } from "react-icons/fi";

const CHome = chakra(FaHome);
const CSearch = chakra(BsSearch);
const CFolder = chakra(FaFolder);
const CLink = chakra(FiExternalLink)

export default function Render() {
    const router = useRouter();

    const alpha100 = useColorModeValue("blackAlpha.100", "whiteAlpha.100");
    const alpha200 = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

    const [tag, setTag] = useState("all");
    const [width, setWidth] = useState();
    useEffect(() => {
        setInterval(() => {
            if (window.innerWidth == width) return;
            setWidth(window.innerWidth);
        }, 400)
    }, [width]);

    const particleOptions = {
        filter: ({ x, y, image }) => (image.get(x, y)).b > 120, // 0 - 255 Range.
        color: ({ x, y, image }) => "#61dafb",
        radius: () => Math.random() * 1.5 + 0.5,
        mass: () => 100,
        friction: () => 0.15,
        initialPosition: ({ canvasDimensions }) => new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2)
    };

    const motionForce = (x, y) => forces.disturbance(x, y, 10);

    // useEffect(() => {
    //     /* Snow Effect */
    //     /* Original Script by John Day - Edited By KingCh1ll */

    //     let canvas = document.createElement('canvas');
    //     canvas.id = 'snow';

    //     let container = document.getElementById("hero");
    //     container.appendChild(canvas);

    //     let w = window.innerWidth;
    //     let h = window.innerHeight;
    //     let x = 0;
    //     let y = 0;

    //     let initMS = 0;
    //     let sndrop = [];

    //     function resize() {
    //         w = window.innerWidth;
    //         h = window.innerHeight;
    //         canvas.width = w;
    //         canvas.height = h;
    //     }

    //     // store mouse pointer position
    //     function storemp(mpx, mpy) {
    //         x = mpx;
    //         y = mpy
    //     }

    //     window.addEventListener("load", function () {
    //         var canvas = document.getElementById("snow");
    //         canvas.style.position = 'absolute';
    //         canvas.style.top = 0;
    //         canvas.style.left = 0;

    //         var ctx = canvas.getContext("2d");
    //         canvas.width = w;
    //         canvas.height = h;

    //         function update() {
    //             initMS = initMS + 1;

    //             ctx.fillStyle = '#ffffff';
    //             ctx.fillRect(0, 0, w, h);
    //             ctx.beginPath()

    //             if (initMS % 4 == 0) sndrop.push({ posx: Math.random() * w, posy: -10, size: 1 + Math.floor(Math.abs(Math.sin(initMS * 0.1)) * 10) })
    //             ctx.fillStyle = '#f0f0f0';

    //             sndrop.forEach(function (item, index) {
    //                 ctx.beginPath();
    //                 ctx.arc(item.posx, item.posy, item.size, 0, 2 * Math.PI);
    //                 item.posx += Math.sin(initMS * 0.01) * item.size * 0.15;
    //                 item.posy += item.size * 0.15;
    //                 ctx.fill();

    //                 // Offscreen check
    //                 if (item.posy > ((item.size * 2) + h)) sndrop.splice(index, 1);
    //             });

    //             // Avoid Mouse
    //             sndrop.forEach(function (item, index) {
    //                 let xdist = (item.posx - x)
    //                 let ydist = (item.posy - y)
    //                 let squaredDist = xdist * xdist + ydist * ydist;
    //                 let invertCircle = (50000 - squaredDist) / 50000;

    //                 if (squaredDist < 50000) {
    //                     item.posx += xdist * invertCircle * 0.05;
    //                     item.posy += ydist * invertCircle * 0.05;
    //                 }
    //             });
    //         };

    //         window.setInterval(update, 16);
    //         window.addEventListener('resize', resize, false);

    //         onmousemove = function (e) { storemp(e.x, e.y) }
    //     });
    // });

    return (<>
        <Head><Header name={"KingCh1ll"} /></Head>

        <Container maxW={"6xl"}>
            <Navbar name={"KingCh1ll"} logo={"/images/users/KingCh1ll.webp"} user={null} />

            {/* Hero */}
            <Container className={"h-screen w-full pb-[10rem]"} id={"hero"} fontFamily={"Rubik, sans-serif;"}>
                <Stack p={"75px 0"} align={"center"} spacing={{ base: 8, md: 10 }} direction={{ base: "column", md: "row" }}>
                    <Stack mx={"auto"} flex={1} spacing={{ base: 5, md: 10 }}>
                        <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }} textAlign={"center"}>
                            <Text as={"span"} position={"relative"} textTransform={"uppercase"} fontSize={"15px"}>
                                Hi, my name is
                            </Text>
                            <br />
                            <Text as={"span"} fontSize={"8xl"} position={"relative"} fontFamily={"Shadows Into Light"}>{config.name}</Text>
                        </Heading>
                        <span className={"justify-center"}>
                            <Text color={"#fff9"} fontSize={"18px"} m={"auto"} maxW={"650px"} fontFamily={"Satoshi-Regular, sans-serif"} textAlign={"center"} mt={{ base: "5px", sm: "10px" }}>
                                I'm a passionate <strong>Software Engineer</strong>, making <strong>websites</strong> and <strong>Discord bots</strong>. I'm also a former <a href="https://roblox.com"><strong>Roblox</strong></a> game dev.
                            </Text>
                        </span>
                    </Stack>
                    {/* <ParticleImage src={"/images/users/kingch1ll.png"} width={250} height={250} scale={0.50}
                        entropy={10} maxParticles={2000} particleOptions={particleOptions} backgroundColor="transparent" 
                        mouseMoveForce={motionForce} touchMoveForce={motionForce} /> */}
                    {/* <Stack justifyContent={"center"} align={"center"} position={"relative"} w={"full"} maxW={"500px"}>
            <Icon mt={"100px"} width={"100%"} maxH={"425px"} viewBox="0 0 578 440" fill="none" xmlns="http://www.w3.org/2000/svg" w={"200%"} h={"150%"} position={"absolute"} top={"-20%"} left={0} zIndex={-1} color={"let(--dark-blue-2)"} opacity={".8"}>
              <path fillRule="evenodd" clipRule="evenodd" d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z" fill="currentColor" />
            </Icon>
            <NextImage width={"450px"} height={"450px"} src={"/images/host_project.svg"} />
            {/* <Box position={"relative"} height={"300px"} rounded={"2xl"} width={"full"} overflow={"hidden"} justifyContent={"center"}>
              {/* <IconButton aria-label={"Play Button"} variant={"ghost"}
                _hover={{ bg: "transparent" }} size={"lg"} color={"white"}
                position={"absolute"} left={"50%"} top={"50%"}
                transform={"translateX(-50%) translateY(-50%)"}
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>}
              <NextImage width={"300px"} height={"300px"} src={"/images/host_project.svg"} />
            </Box>
          </Stack> */}
                </Stack>
            </Container>

            {/* About Me */}
            <Container maxW={"3xl"} paddingBottom={"7rem"} fontFamily={"Rubik, sans-serif;"} id={"about"}>
                <Text as={"h2"} fontWeight={"bold"} textAlign={"left"} className={"display-hb"}>👋 About Me</Text>
                <Stack justify={"center"} textAlign={"center"} direction={{ base: "column", md: "row" }} maxW={"max-content"}>
                    <VStack className={"max-w-[500px] p-[20px] rounded-2xl"}>
                        <VStack className={"text-left pb-4"}>
                            <p className={"text-[17px] text-gray"}>Hi, I'm KingCh1ll! I'm a passionate <strong>Software Engineer</strong>, living in the <strong>United States</strong>. I love making <strong>websites</strong> and <strong>Discord bots</strong>. I also used to make games on the platform <a href="https://roblox.com">Roblox</a>. In my free time I like to code, chat with friends, play my guitar, or go on runs.</p>
                            <p className={"text-[17px] text-gray"}><strong>I first started coding in 2019</strong>, when I learned about <strong>Roblox Studio</strong>. <strong>Roblox Studio</strong> is the way to make games on the <strong>Roblox platform</strong>. I instantly <strong>fell in love</strong> with making games. Although I came quickly to realize I <strong>didn't love building</strong> the games, I <strong>loved coding</strong> them!</p>
                        </VStack>
                        <VStack className={"text-center pb-4"}>
                            <h2 className={"font-bold text-[1.756rem] text-center"}>📇 Contact</h2>
                            <p className={"text-[17px]"}>If you want to contact me, you can join my <a href="https://discord.gg/PPtzT8Mu3h">Discord server</a>.</p>
                        </VStack>
                    </VStack>
                    <div style={{ marginTop: "30px" }}>
                        <img className={"m-auto rounded-3xl"} src={"/images/users/kingch1ll.webp"} width={"256px"} height={"256px"} style={{ border: "4px solid #ffeb3b" }} />
                    </div>
                </Stack>
            </Container>

            {/* Skills */}
            <Container maxW={"3xl"} paddingBottom={"7rem"} fontFamily={"Rubik, sans-serif;"} id={"skills"}>
                <Text as={"h2"} fontWeight={"bold"} textAlign={"left"} className={"display-hb"}>💪 Skills</Text>
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
                        <img className={"m-auto rounded-3xl"} src={"/images/stats.svg"} width={"300px"} height={"512px"} style={{ border: "4px solid #ffeb3b" }} />
                    </div>
                </Stack>
            </Container>

            {/* Projects */}
            <VStack maxW={"3xl"} paddingBottom={"10rem"} fontFamily={"Rubik, sans-serif;"} spacing={6} margin={"auto"} id={"projects"}>
                <Text as={"h2"} fontWeight={"bold"} textAlign={"center"} className={"display-hb"}>📂 Projects</Text>
                { /* Tags */}
                <Wrap className={"justify-center max-w-[575px] m-left p-[20px] pb-4 rounded-2xl"}>
                    <Button bg={"blue.400"} _hover={{ bg: "blue.500" }} onClick={() => setTag("all")}>All</Button>
                    <Button bg={"blue.400"} _hover={{ bg: "blue.500" }} onClick={() => setTag("web")}>Web Apps</Button>
                    <Button bg={"purple.400"} _hover={{ bg: "purple.500" }} onClick={() => setTag("game")}>Games</Button>
                    <Button bg={"gray.400"} _hover={{ bg: "gray.500" }} onClick={() => setTag("bot")}>Discord Bots</Button>
                </Wrap>

                { /* Projects */}
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

            {/* Footer */}
            <Footer />
        </Container>
    </>);
};
