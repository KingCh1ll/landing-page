import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import NextImage from "next/image";
import NextLink from "next/link";

import { FaHome } from "react-icons/fa";
import { chakra, Box, Wrap, WrapItem, Flex, HStack, VStack, Text, Tabs, TabList, Tab, TabPanels, TabPanel, VisuallyHidden, IconButton, Button, Stack, Collapse, SimpleGrid, Icon, Link, Popover, PopoverTrigger, PopoverContent, Modal, ModalOverlay, ModalContent, FormControl, InputGroup, FormLabel, InputLeftElement, InputRightElement, Input, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Menu, MenuButton, Avatar, MenuList, Center, MenuDivider, MenuItem, useColorModeValue, useBreakpointValue, useDisclosure, useColorMode, Container, Heading, TextUnderline, Spinner, FormErrorMessage } from "@chakra-ui/react";

import config from "../config";

import Header from "../components/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Render() {
    const router = useRouter();

    return (<>
        <Head><Header name={`${config.name} | 404`} description={`We couldn't find that page on our server. ${config.meta.description}`}></Header></Head>
        <Container maxW={"7xl"} padding={"0 40px"} fontFamily={"Rubik, sans-serif;"}>
            <Navbar name="DisPing" logo="/images/kingch1ll.png" />

            <Container className={"w-full h-full flex flex-col items-center justify-center mt-8 p-[20px] pb-16 text-center m-[7% 0]"} id="home">
                <NextImage defer src={"/images/404.svg"} alt={"DisPing"} width={"450"} height={"250"} style={{ borderRadius: "15px" }} />
                <Text style={{ color: "rgb(255, 255, 255, 0.6)", fontSize: "17.5px", textAlign: "center", marginTop: "20px", marginBottom: "50px", fontWeight: "600" }}>Wait a second... where are we? I think we're lost.</Text>
                <Button leftIcon={<FaHome />} onClick={() => router.push("/")} className={"rounded-sm"}>Home</Button>
            </Container>

            <Footer />
        </Container>
    </>);
}
