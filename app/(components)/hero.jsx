"use client";

import NextLink from "next/link";
import NextImage from "next/image";

import { Box, Text, Button, Stack, Icon, Modal, ModalOverlay, InputLeftElement, InputRightElement, Input, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Menu, MenuButton, Avatar, MenuList, Center, MenuDivider, MenuItem, useColorModeValue, useBreakpointValue, useDisclosure, useColorMode, Container, Heading, Spinner, FormErrorMessage } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

import { FaTwitter, FaYoutube, FaInstagram, FaGithub, FaDiscord, FaSpotify } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

export default function Head({ title, type, shortDesc, sideimage, buttons }) {
    return (
        <Container maxW={"7xl"} fontFamily={"Rubik, sans-serif;"}>
            <Stack align={"center"} spacing={{ base: 8, md: 10 }} pt={"10px"} pb={"60px"} direction={{ base: "column", md: "row" }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }} textAlign={"center"}>
                        <Text as={"span"} position={"relative"} textTransform={"uppercase"} fontSize={"15px"}>{type}</Text>
                        <br />
                        <Text as={"span"} position={"relative"}>{title}</Text>
                    </Heading>
                    <Text color={"#fff9"} fontSize={"20px"} fontFamily={"Satoshi-Regular, sans-serif"} textAlign={"center"}>{shortDesc}</Text>
                    {buttons ? (
                        <Stack justifyContent={"center"} spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
                            {buttons.map((b) => (
                                <NextLink href={b.link}>
                                    <Button rounded={"full"} size={"lg"} color={b?.textColor ?? null} fontWeight={"normal"} px={6} colorScheme={b?.color ?? null} bg={b?.color ? `${b?.color ?? "blue"}.400` : null} _hover={b?.color ? { bg: `${b?.color}.500` } : null}>
                                        {b.title}
                                    </Button>
                                </NextLink>
                            ))}
                        </Stack>
                    ) : null}
                </Stack>
                <Stack justifyContent={"center"} align={"center"} position={"relative"} w={"full"} maxW={"500px"}>
                    <Icon mt={"100px"} width={"100%"} maxH={"425px"} viewBox="0 0 578 440" fill="none" xmlns="http://www.w3.org/2000/svg" w={"200%"} h={"150%"} position={"absolute"} top={"-20%"} left={0} zIndex={-1} color={useColorModeValue("blue.50", "blue.400")}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z" fill="currentColor" />
                    </Icon>
                    <Box position={"relative"} height={"full"} rounded={"2xl"} width={"full"} overflow={"hidden"} justifyContent={"center"}>
                        <NextImage width={450} height={450} src={sideimage} alt={"Side Image"} />
                        {/* <IconButton aria-label={"Play Button"} variant={"ghost"}
                    _hover={{ bg: "transparent" }} size={"lg"} color={"white"}
                    position={"absolute"} left={"50%"} top={"50%"}
                    transform={"translateX(-50%) translateY(-50%)"}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                    } /> */}
                        {/* <iframe width={"560"} height={"315"} src={"https://www.youtube-nocookie.com/embed/LMlCN6_vUvs"} frameborder={0} allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"} allowfullscreen /> */}
                    </Box>
                    {/* <Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src="/images/notify.svg"></img>
                </div>
                <div>
                    <Box position={"relative"} height={"300px"} rounded={"2xl"} width={"full"} overflow={"hidden"} justifyContent={"center"}>
                        <IconButton aria-label={"Play Button"} variant={"ghost"}
                            _hover={{ bg: "transparent" }} size={"lg"} color={"white"}
                            position={"absolute"} left={"50%"} top={"50%"}
                            transform={"translateX(-50%) translateY(-50%)"}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                            } />
                        <video autoplay loop muted>
                        <source type="video/mp4" src="https://cdn.ch1ll.ml/r/disping_easy_settings.mp4" style={{ borderRadius: "6px", margin: "auto" }} />
                        Your browser does not support the video tag.
                    </video>
                    </Box>
                </div>
            </Carousel> */}
                </Stack>
            </Stack>
        </Container>
    );
}
