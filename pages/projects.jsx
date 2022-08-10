import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head';
import NextLink from "next/link";
import NextImage from "next/image";

import config from '../config';

import { chakra, Box, Flex, Wrap, HStack, VStack, Text, VisuallyHidden, IconButton, Button, Stack, Collapse, SimpleGrid, Icon, Link, Popover, PopoverTrigger, PopoverContent, Modal, ModalOverlay, ModalContent, FormControl, InputGroup, FormLabel, InputLeftElement, InputRightElement, Input, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Menu, MenuButton, Avatar, MenuList, Center, MenuDivider, MenuItem, useColorModeValue, useBreakpointValue, useDisclosure, useColorMode, Container, Heading, TextUnderline, Spinner, FormErrorMessage } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";

import Header from "../components/head";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

import { FaFolder } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FiChevronDown, FiExternalLink } from "react-icons/fi";
import { route } from 'next/dist/server/router';

const CHome = chakra(FaHome);
const CSearch = chakra(BsSearch);
const CFolder = chakra(FaFolder);
const CLink = chakra(FiExternalLink);

const MainPage = ({ router, width, tag, setTag }) => {
    return (<>
        <VStack spacing={"6"}>
            { /* Tags */}
            <Wrap className={"bg-[#000d2b] justify-center max-w-[575px] m-auto p-[20px] pb-4 rounded-2xl"}>
                <Button bg={"blue.400"} _hover={{ bg: "blue.500" }} onClick={() => setTag("all")}>All</Button>
                <Button bg={"blue.400"} _hover={{ bg: "blue.500" }} onClick={() => setTag("web")}>Web Apps</Button>
                <Button bg={"purple.400"} _hover={{ bg: "purple.500" }} onClick={() => setTag("game")}>Games</Button>
                <Button bg={"gray.400"} _hover={{ bg: "gray.500" }} onClick={() => setTag("bot")}>Discord Bots</Button>
            </Wrap>

            { /* Projects */}
            <Wrap justify={"center"} className={"bg-[#000d2b] m-w-[1000px] p-[20px] rounded-2xl"}>
                {config.projects?.map(card => (
                    <Box key={card.name} margin={"auto"} bg={"rgb(0, 10, 35)"} w={width <= 1080 ? "350px" : "300px"} className={`flex flex-col rounded-2xl${tag !== "all" ? (tag === card.tag ? "" : " hidden") : ""}`}>
                        <Flex className={"p-4"}>
                            <span className={"w-full"}><NextImage src={card.image} width={"75px"} height={"75px"} alt={card.name} className={"rounded-xl"} /></span>
                            <span className={"w-10"}><Button onClick={() => router.push(card.link)}><CLink w={"4"} h={"4"} /></Button></span>
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
    </>)
}

export default function Render() {
    const router = useRouter();

    return (<>
        <Head><Header /></Head>

        <Sidebar MainPage={MainPage} />

        {/* <section className="container-sm" id="features" style={{ padding: "5rem 0", maxWidth: "700px" }}>
            <div style={{ background: "#000d2b", borderRadius: "15px", padding: "30px", fontFamily: "Rubik, sans-serif" }}>
                <div style={{ paddingTop: "1rem", paddingBottom: "3rem" }}>
                    <div style={{ color: "white", fontSize: "24px", display: "inline-grid", justifyContent: "center", width: "100%" }}>
                        <img src={`/images/users/kingch1ll.png`} height={200} width={200} alt="logo" style={{ borderRadius: "50%", border: "5px solid #ffeb3b", margin: "auto" }} />
                        <h1 style={{ display: "inline", textAlign: "center", paddingTop: "10px", fontWeight: "600" }}>{config.name}</h1>
                        <h2 style={{ display: "inline", textAlign: "center", fontSize: 18, padding: 10 }}>{config.description}</h2>
                        <div style={{ justifyContent: "space-evenly", display: "flex", width: "250px", margin: "auto" }}>
                            <a href="https://twitter.com/KingCh1ll" style={{ color: "white" }}>
                                <i className="fab fa-twitter" style={{ fontSize: "22px" }}></i>
                            </a>
                            <a href="https://github.com/KingCh1ll" style={{ color: "white" }}>
                                <i className="fab fa-github" style={{ fontSize: "22px" }}></i>
                            </a>
                            <a href="https://discord.com/users/571811686617710592" style={{ color: "white" }}>
                                <i className="fab fa-discord" style={{ fontSize: "22px" }}></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCvOB4pLdL7V4FmPdyNdfFeQ" style={{ color: "white" }}>
                                <i className="fab fa-youtube" style={{ fontSize: "22px" }}></i>
                            </a>
                            <a href="https://open.spotify.com/artist/anx4tm5z1m6lpg1ulxfbmxele" style={{ color: "white" }}>
                                <i className="fab fa-spotify" style={{ fontSize: "22px" }}></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div style={{ paddingTop: "1rem", paddingBottom: "3rem" }}>
                        {user?.activities?.map((activity) => (
                            <div key={activity.applicationId} style={{ maxWidth: "575px", margin: "auto", color: "rgb(255, 255, 255)", background: "rgb(0, 10, 35)", margin: "auto", borderRadius: "20px", padding: "20px" }}>
                                <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                                    {activity.name}
                                    <small style={{ marginInlineStart: "10px", color: "grey", fontSize: "small" }}>{activity.name.toLowerCase().includes("music") ? "Listening" : (activity.name.toLowerCase().includes(`youtube`) ? 'Watching' : (activity.name.toLowerCase().includes(`code`) ? "Developing" : (activity.name.toLowerCase().includes("github") ? 'Browsing' : 'Playing')))}</small>
                                </span>
                                <div style={{ display: "flex" }}>
                                    <div style={{ position: "relative", marginTop: "6px" }}>
                                        {activity.assets.large.image ?
                                            <img src={activity.assets.large.image} title={activity.details} alt={activity.details} className="img-fluid" style={{ height: "80px", borderRadius: "6px" }} />
                                            : <></>
                                        }
                                        {activity.assets.small.image ?
                                            <img src={activity.assets.small.image} title={activity.name} alt={activity.name} className="img-fluid" style={{ position: "absolute", height: "28px", top: "62px", left: "66px", borderRadius: "6px", backgroundColor: "rgb(32, 29, 36)", borderRadius: "10px", outline: "rgb(32, 29, 36) solid 0.2rem" }} />
                                            : <></>
                                        }
                                    </div>
                                    <div style={{ marginTop: "14px", marginLeft: "8px", fontFamily: "Rubik, sans-serif" }}>
                                        <span style={{ display: "flex" }}>
                                            <HiOutlineFolder style={{ minHeight: 22, minWidth: 22, marginInlineEnd: "5px" }} />
                                            {activity.details}
                                        </span>
                                        <span style={{ display: "flex" }}>
                                            <HiOutlineMenuAlt2 style={{ minHeight: 22, minWidth: 22, marginInlineEnd: "5px" }} />
                                            {activity.state}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> */}

        {/* Footer */}
        <Footer />
    </>);
};
