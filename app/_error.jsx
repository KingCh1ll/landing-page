"use client";

import NextImage from "next/image";
import NextLink from "next/link";

import { FaHome } from "react-icons/fa";
import { Text, Button, Container } from "@chakra-ui/react";

import config from "../config";

import Navbar from "./(components)/navbar";

export default function Render() {
    return (
        <>
            <Navbar />
            <Container style={{ width: "100%", height: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "2rem", padding: "20px", paddingBottom: "4rem" }} id="home">
                <NextImage src={`https://http.cat/500`} alt={`Error Code 500`} width={"400"} height={"250"} style={{ borderRadius: "15px" }} />
                <Text style={{ color: "rgb(255, 255, 255, 0.6)", fontSize: "17.5px", textAlign: "center", marginTop: "20px", marginBottom: "50px", fontWeight: "600" }}>It looks like you've encountered an error! {config.name} has been notified and will fix this problem asap.</Text>
                <NextLink href={"/"}>
                    <Button leftIcon={<FaHome />} style={{ borderRadius: "100%" }}>
                        Home
                    </Button>
                </NextLink>
            </Container>
        </>
    );
}
