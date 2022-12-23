import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router"
import Head from "next/head";
import NextImage from "next/image";
import NextLink from "next/link";

import config from "../../config";

import { chakra, Box, Wrap, WrapItem, Flex, HStack, VStack, Text, Tabs, TabList, Tab, TabPanels, TabPanel, VisuallyHidden, IconButton, Button, Stack, Collapse, SimpleGrid, Icon, Link, Popover, PopoverTrigger, PopoverContent, Modal, ModalOverlay, ModalContent, FormControl, InputGroup, FormLabel, InputLeftElement, InputRightElement, Input, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Menu, MenuButton, Avatar, MenuList, Center, MenuDivider, MenuItem, useColorModeValue, useBreakpointValue, useDisclosure, useColorMode, Container, Heading, TextUnderline, Spinner, FormErrorMessage } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

import Header from "../../components/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import { FaBolt, FaPencil } from "react-icons/fa";
import { FiRadio, FiMusic } from "react-icons/fi";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { VscGear } from "react-icons/vsc";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const CEyes = chakra(BsEmojiHeartEyesFill);
const CPencil = chakra(HiPencil);
const CBolt = chakra(FaBolt);
const CGear = chakra(VscGear);

export default function Render() {
    const router = useRouter();

    const [width, setWidth] = useState();
    useEffect(() => {
        setInterval(() => window.innerWidth != width && setWidth(window.innerWidth), 400)
    }, [width]);

    return (<>
        <Head><Header name={"DisPing"} /></Head>

        <Container maxW={"7xl"} padding={"0 40px"} fontFamily={"Rubik, sans-serif;"}>
            <Navbar name={"KingCh1ll"} logo={"/images/users/kingch1ll.webp"} service={{ name: "SparkV", logo: "/images/sparkv.png" }} />

            <Container maxW={"7xl"} fontFamily={"Rubik, sans-serif;"}>
                <Stack align={"center"} spacing={{ base: 8, md: 10 }} pt={"10px"} pb={"60px"} direction={{ base: "column", md: "row" }}>
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                        <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }} textAlign={"center"}>
                            <Text as={"span"} position={"relative"} textTransform={"uppercase"} fontSize={"15px"}>
                                The All-In-One Bot
                            </Text>
                            <br />
                            <Text as={"span"} position={"relative"}>
                                Evolutionize Your Server!
                            </Text>
                        </Heading>
                        <Text color={"#fff9"} fontSize={"20px"} fontFamily={"Satoshi-Regular, sans-serif"} textAlign={"center"}>
                        Create the best Discord server with Discord's #1 Multipurpose Discord bot.
                        </Text>
                        <Stack justifyContent={"center"} spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
                            <Button rounded={"full"} size={"lg"} color={"white"} fontWeight={"normal"} px={6} colorScheme={"blue"} bg={"blue.400"} _hover={{ bg: "blue.500" }} onClick={() => router.push("/invite")}>
                                Get Started
                            </Button>
                            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6} onClick={() => router.push("https://top.gg/bot/884525761694933073")}>
                                Learn More
                                {/*  leftIcon={<PlayIcon h={4} w={4} color={"gray.300"} />} */}
                            </Button>
                        </Stack>
                    </Stack>
                    <Stack justifyContent={"center"} align={"center"} position={"relative"} w={"full"} maxW={"500px"}>
                        <Icon mt={"100px"} width={"100%"} maxH={"425px"} viewBox="0 0 578 440" fill="none" xmlns="http://www.w3.org/2000/svg" w={"200%"} h={"150%"} position={"absolute"} top={"-20%"} left={0} zIndex={-1} color={useColorModeValue("blue.50", "blue.400")}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z" fill="currentColor" />
                        </Icon>
                        <Box position={"relative"} height={"full"} rounded={"2xl"} width={"full"} overflow={"hidden"} justifyContent={"center"}>
                        <NextImage width={"450px"} height={"450px"} src={"/images/lightbulb_of_ideas.svg"} />
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

            {/* <Container maxW={"5xl"} id={"why"}>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }} textAlign={"center"}>
                    <Text as={"span"} position={"relative"} textTransform={"uppercase"} fontSize={"15px"}>
                        Easy, Simple, DisPing
                    </Text>
                    <br />
                    <Text as={"span"} position={"relative"}>
                        Why use DisPing?
                    </Text>
                </Heading>
                <Wrap spacing={8} py={"50px"} justify={"center"}>
                    <WrapItem padding={"50px 10px"} className={"flex flex-col bg-dark-blue-200 text-center rounded-md max-w-[300px] h-[300px]"} style={{ alignItems: "center", borderLeft: "solid #6b72cf 0.3rem" }}>
                        <CEyes w={12} h={12} my={"2.5"} />
                        <Heading as={"h2"} fontWeight={600} lineHeight={1.75}>Beautiful</Heading>
                        <Text as={"p"} color={"rgba(255, 255, 255, 0.6)"}>DisPing's core principles are to make things easy and beautiful.</Text>
                    </WrapItem>
                    <WrapItem padding={"50px 10px"} className={"flex flex-col bg-dark-blue-200 text-center rounded-md max-w-[300px] h-[300px]"} style={{ alignItems: "center", borderLeft: "solid #6b72cf 0.3rem" }}>
                        <CPencil w={12} h={12} my={"2.5"} />
                        <Heading as={"h2"} fontWeight={600} lineHeight={1.75}>Configurable</Heading>
                        <Text as={"p"} color={"rgba(255, 255, 255, 0.6)"}>DisPing is highly configurable. What makes DisPing different is that DisPing has FREE customization. The sort of custimization you'd see in a paid bot.</Text>
                    </WrapItem>
                    <WrapItem padding={"50px 10px"} className={"flex flex-col bg-dark-blue-200 text-center rounded-md max-w-[300px] h-[300px]"} style={{ alignItems: "center", borderLeft: "solid #6b72cf 0.3rem" }}>
                        <CBolt w={12} h={12} my={"2.5"} />
                        <Heading as={"h2"} fontWeight={600} lineHeight={1.75}>24/7</Heading>
                        <Text as={"p"} color={"rgba(255, 255, 255, 0.6)"}>DisPing's 24/7 uptime guarantees that your community will always be engaged when you post.</Text>
                    </WrapItem>
                </Wrap>
            </Container> */}

            {/* Features
            <Container id={"features"} pt={"10rem"}>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }} textAlign={"center"}>
                    <Text as={"span"} position={"relative"} textTransform={"uppercase"} fontSize={"15px"}>
                        Features
                    </Text>
                    <br />
                    <Text as={"span"} position={"relative"}>
                        What's so great about DisPing?
                    </Text>
                </Heading>
                <Tabs isFitted variant={"soft-rounded"} colorScheme={"blue"} pt={5}>
                    <TabList>
                        <Tab><CGear w={6} height={6} /></Tab>
                    </TabList>
                    <TabPanels mt={5} className={"bg-dark-blue-200 rounded-xl"}>
                        <TabPanel className={"items-center text-center"}>
                            <Heading as={"h2"} className={"display-hb"} pb={4}>⚙️ 1. Easy Setup</Heading>
                            <video width={width - 200} className={"rounded-lg mx-auto border-4 max-w-[500px]"} autoPlay muted>
                                <source src="https://cdn.ch1ll.ml/r/disping_easy_settings.mp4" type="video/mp4" />
                                Aw man! Your browser doesn't support videos. Please update your browser or use a different one.
                            </video>
                            <Text as={"p"} pb={6}>Ditch the slow web dashboard notify bots. Do it all in your server!</Text>
                        </TabPanel>
                        <TabPanel className={"items-center text-center"}>
                            <Heading as={"h2"} className={"display-hb"} pb={4}>2. 😂 Memes</Heading>
                            <video width={width - 200} className={"rounded-lg mx-auto border-4 max-w-[500px]"} autoPlay muted>
                                <source src="https://us-east-1.tixte.net/uploads/cdn.ch1ll.tk/reddit_cmd.mp4" type="video/mp4" />
                                Aw man! Your browser doesn't support videos. Please update your browser or use a different one.
                            </video>
                            <Text as={"p"} pb={6}>Laugh with your friends looking at the top rated reddit memes.</Text>
                        </TabPanel>
                        <TabPanel className={"items-center text-center"}>
                            <Heading as={"h2"} className={"display-hb"} pb={4}>3. 🧰 Utility</Heading>
                            <video width={width - 200} className={"rounded-lg mx-auto border-4 max-w-[500px]"} autoPlay muted>
                                <source src={"https://us-east-1.tixte.net/uploads/cdn.ch1ll.tk/updated_info_cmd2.mp4"} type="video/mp4" />
                                Aw man! Your browser doesn't support videos. Please update your browser or use a different one.
                            </video>
                            <Text as={"p"} pb={6}>Lookup users with ease. More utility functions are on the way. Stay tuned for updates!</Text>
                        </TabPanel>
                        <TabPanel className={"items-center text-center"}>
                            <Heading as={"h2"} className={"display-hb"} pb={4}>4. ⬆️ Rank System (Leveling)</Heading>
                            <NextImage src={"/images/features/xp_gain.webp"} width={"450px"} height={"350px"} className={"rounded-lg mx-auto border-4 max-w-[500px]"} />
                            <Text as={"p"} pb={6}>Make your server more active! Studies show that humans love to see numbers go up. DisPing gives users a random amount of xp between 5-25 for each chat message. This generates chat activity!</Text>
                            <Text as={"p"} pb={6}>Pro Tip: Run <Text as={"a"} className={"bg-[#0f0f0f] px-3 py-2"}>/leaderboard type=leveling</Text> to show the leaderboard for your server.</Text>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Container> */}

            {/* Reviews
            <Container maxW={"5xl"} id={"reviews"} pt={"10rem"}>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }} textAlign={"center"}>
                    <Text as={"span"} position={"relative"} textTransform={"uppercase"} fontSize={"15px"}>How can I believe you??</Text>
                    <br />
                    <Text as={"span"} position={"relative"}>Listen to Our Many Reviewers!</Text>
                </Heading>
                <Wrap spacing={8} py={"50px"} justify={"center"}>
                    {config.reviews.map((r) => (
                        <WrapItem key={r.username} className={"flex-col m-3 text-center rounded-md bg-dark-blue-200 w-[400px]"} style={{ borderLeft: "solid #6b72cf 0.3rem", padding: "10px 15px 0px" }}>
                            <Box className={"flex items-center text-[18px] font-semibold text-center"}>
                                <div className={"mt-[5px] mr-1"}><NextImage defer height={"28"} width={"28"} src={r.picture} style={{ borderRadius: "50%" }} alt={`${r.username}'s Review`} /></div>
                                <span className={"align-middle"}>{r.username}</span>
                            </Box>
                            <Text className={"mt-[8px] text-gray"} dangerouslySetInnerHTML={{ __html: r.review }} />
                            <Text className={"mt-[22px] text-gray text-center"} dangerouslySetInnerHTML={{ __html: r.role }} />
                        </WrapItem>
                    ))}
                </Wrap>
            </Container> */}

            {/* Footer */}
            <Footer />
        </Container>
    </>);
}
