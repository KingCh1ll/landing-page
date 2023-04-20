import config from "../../../config";

import Navbar from "../../(components)/navbar";
import Hero from "../../(components)/hero";

// import { FaBolt } from "react-icons/fa";
// import { BsEmojiHeartEyesFill } from "react-icons/bs";
// import { HiPencil } from "react-icons/hi";
// import { VscGear } from "react-icons/vsc";

// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const CEyes = chakra(BsEmojiHeartEyesFill);
// const CPencil = chakra(HiPencil);
// const CBolt = chakra(FaBolt);
// const CGear = chakra(VscGear);
export const metadata = {
    title: "SparkV",
    description: "Create the best Discord server with Discord's #1 Multipurpose Discord bot."
};

export default function Render() {
    return (<>
        <Navbar service={{ name: "SparkV", logo: "/images/sparkv.png", add: config.invites.sparkv }} />

        <Hero
         title={"Evolutionize Your Server!"}
         type={"The All-In-One Bot"}
         shortDesc={"Create the best Discord server with Discord's #1 Multipurpose Discord bot."}
         sideimage={"/images/lightbulb_of_ideas.svg"}
         buttons={[{
            title: "Get Started",
            link: "https://top.gg/bot/884525761694933073/invite",
            color: "blue",
            textColor: "white"
         }, {
            title: "Learn more",
            link: "https://top.gg/bot/884525761694933073"
         }]}
         />

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
    </>);
}
