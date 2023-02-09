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
        <Head><Header name={`${config.name} | 500 (Error)`} description={`Wow, you encountered an error! Our team have been notified, and we are working on a fix. ${config.meta.description}`}></Header></Head>
        <Container maxW={"7xl"} padding={"0 40px"} fontFamily={"Rubik, sans-serif;"}>
            <Navbar name={config.name} logo={config.logo} />

            <Container style={{ width: "100%", height: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "2rem", padding: "20px", paddingBottom: "4rem" }} id="home">
                <NextImage defer src={`https://http.cat/500`} alt={`Error Code 500`} width={"400"} height={"250"} style={{ borderRadius: "15px" }} />
                <Text style={{ color: "rgb(255, 255, 255, 0.6)", fontSize: "17.5px", textAlign: "center", marginTop: "20px", marginBottom: "50px", fontWeight: "600" }}>It looks like you've encountered an error! {config.name} has been notified and will fix this problem asap.</Text>
                <Button leftIcon={<FaHome />} onClick={() => router.push("/")} style={{ borderRadius: "100%" }}>Home</Button>
            </Container>
            <Footer />
        </Container>
    </>);
}
