import Navbar from "../../(components)/navbar";
import Hero from "../../(components)/hero";

// import "react-responsive-carousel/lib/styles/carousel.min.css";

export const metadata = {
   title: "DisPing",
   description: "Integrate your socials to Discord. The easy way. That's DisPing."
};

export default function Render() {
    return (<>
        <Navbar service={{ name: "DisPing", logo: "/images/disping.png", add: "https://top.gg/bot/1027401268227997778/invite" }} />

        <Hero
         title={"Integrate your socials to Discord. The easy way. That's DisPing."}
         type={"The All-In-One Notify Bot"}
         shortDesc={"It shouldn't take a programming genius to integrate their YouTube or Twitter to a Discord channel. Setup YouTube/Twitter integrations in under a minute."}
         sideimage={"/images/notify.svg"}
         buttons={[{
            title: "Get Started",
            link: "https://top.gg/bot/1027401268227997778/invite",
            color: "blue",
            textColor: "white"
         }, {
            title: "Learn more",
            link: "https://top.gg/bot/1027401268227997778"
         }]}
         />
    </>);
}
