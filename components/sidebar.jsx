import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head';
import NextLink from "next/link";
import NextImage from "next/image";
import Script from "next/script";

import config from '../config';

import { chakra, Box, Flex, HStack, VStack, Text, VisuallyHidden, IconButton, Button, Stack, Collapse, SimpleGrid, Icon, Link, Popover, PopoverTrigger, PopoverContent, Modal, ModalOverlay, ModalContent, FormControl, InputGroup, FormLabel, InputLeftElement, InputRightElement, Input, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Menu, MenuButton, Avatar, MenuList, Center, MenuDivider, MenuItem, useColorModeValue, useBreakpointValue, useDisclosure, useColorMode, Container, Heading, TextUnderline, Spinner, FormErrorMessage } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";

import Header from "../components/head";
import Sidebar from "../components/sidebar";

import { FaFolder } from "react-icons/fa";
import { BsArrowLeftShort, BsSearch, BsChevronDown } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";

const CHome = chakra(FaHome);
const CSearch = chakra(BsSearch);
const CFolder = chakra(FaFolder);
const CStats = chakra(ImStatsBars);

export default function Navbar({ MainPage }) {
    const router = useRouter();

    const [open, setOpen] = useState(true);
    const [subOpen, setSubOpen] = useState(false);

    const Menus = [
        { title: "Home", icon: <CHome w={"5"} color="gray.300" />, href: "/" },
        {
            title: "Projects", icon: <CFolder w={"5"} color="gray.300" />, href: "/projects", items: [
                { title: "Web Apps", href: "/projects?tag=web" },
                { title: "Games", href: "/projects?tag=games" },
                { title: "Discord Bots", href: "/projects?tag=games" },
            ]
        },
        { title: "Skills", icon: <CStats w={"5"} />, href: "/skills" },
    ];

    const [width, setWidth] = useState()
    useEffect(() => {
        setInterval(() => {
            if (window.innerWidth == width) return;
            setWidth(window.innerWidth);
        }, 400)

        if (window.innerWidth <= 578) {
            setOpen(false);
            setSubOpen(false);
        } else {
            setOpen(true);
            setSubOpen(true);
        }
    }, [width]);

    const [ tag, setTag ] = useState("all");

    return (<>
        <div className={"flex w-full"} style={{ fontFamily: "Rubik" }}>
            <div className={`bg-[#000d2b] p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
                { /* Arrow
                <BsArrowLeftShort className={`bg-[#000a23] text-sky-100 text-3xl rounded-full absolute -right-3 top-9 border border-[#000d2b] cursor-pointer${!open ? " rotate-180" : ""}`} onClick={() => setOpen(!open)} />
                */}
                { /* Logo & Title */}
                <Box className={"inline-flex"}>
                    <NextLink href={"/"} passHref>
                        <img src={"/images/users/kingch1ll.webp"} alt={"KingCh1ll Logo"} width={"50px"} height={"50px"} className={"text-4xl rounded-full cursor-pointer block float-left mr-2"} style={{ border: "4px solid #ffeb3b", margin: "auto" }} />
                    </NextLink>
                    <h1 className={`origin-left font-medium text-xl${!open ? " scale-0" : ""}`} style={{ marginLeft: "10px", paddingTop: "10px", fontWeight: "600" }}>{config.name}</h1>
                </Box>

                <ul className={"pt-2"}>
                    {Menus.map((menu, index) => (<>
                        {console.log(menu?.href.slice(1), router.pathname.slice(1).includes(menu?.href.toLowerCase() === "/" ? "" : menu?.href.toLowerCase()))}
                        <li key={index} className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#000a23]${router.pathname.slice(1).includes(menu?.href.toLowerCase() === "/" ? "" : menu?.href.toLowerCase()) ? " bg-[#000a23]" : ""} rounded-lg ${menu.spacing ? "mt-9" : "mt-2"}`}>
                            <NextLink passHref href={menu?.href}>
                                <span className={"flex"}>
                                    <span className={"text-2xl block float-left mx-1"}>{menu.icon}</span>
                                    <span className={`text-base font-medium flex-1 duration-200${!open ? " hidden" : ""}`}>{menu.title}</span>
                                </span>
                            </NextLink>
                            {menu.items && open && (<BsChevronDown className={`${subOpen ? " rotate-180" : ""}`} onClick={() => setSubOpen(!subOpen)} />)}
                        </li>

                        {menu.items && subOpen && (<ul>
                            {menu.items.map((item, index) => (
                                <li key={index} className={"text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-[#000a23] rounded-md"}><NextLink href={item.href}>{item.title}</NextLink></li>
                            ))}
                        </ul>)}
                    </>))}
                </ul>
            </div>

            { /* Content */}
            <div className={"w-full shadow-md"}>
                <div className={"flex bg-[#000d2b] w-full"}>
                    <InputGroup className={`rounded-md p-4 w-full`}>
                        <InputLeftElement pointerEvents="none" color="gray.300"><CSearch color={"gray.400"} h={"4"} w={"4"} /></InputLeftElement>
                        <Input type={"ch1ll_search"} placeholder={"Search"} className={"w-full focus:outline-none bg-zinc backdrop-blur-md text-lg rounded-lg outline focus:outline-sky-500 outline-1 bg-zinc-900/50 outline-zinc-700"} />
                    </InputGroup>
                </div>
                <div className={"p-7 h-full"}><MainPage router={router} width={width} tag={tag} setTag={setTag} /></div>
            </div>
        </div>

        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
    </>);
}
