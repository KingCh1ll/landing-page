"use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

import { ChakraProvider, extendTheme, ColorModeScript, Container } from "@chakra-ui/react";
// import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";
import { ToastContainer } from "react-toastify";

// import "react-cmdk/dist/cmdk.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./footer";
import config from "../../config";

// function CmdPalette() {
//     const router = useRouter();

//     const [open, setOpen] = useState(false);
//     const [search, setSearch] = useState("");

//     const filteredItems = filterItems([{
//         heading: "Home",
//         id: "home",
//         items: [{
//             id: "home",
//             children: "Home",
//             icon: "HomeIcon",
//             onClick: () => router.push("/")
//         }, {
//             id: "status",
//             children: "Status",
//             icon: "BellAlertIcon",
//             onClick: () => router.push("/status")
//         }, {
//             id: "projects",
//             children: "Projects",
//             icon: "RectangleStackIcon",
//             // closeOnSelect: false,
//             onClick: () => router.push("/#projects")
//         }, {
//             id: "settings",
//             children: "Settings",
//             icon: "CogIcon",
//             onClick: () => alert("Sorry, the settings page isn't done yet.")
//         }],
//     }, {
//         heading: "Other",
//         id: "advanced",
//         items: [{
//             id: "tos",
//             children: "Terms Of Service",
//             icon: "LifebuoyIcon",
//             onClick: () => router.push("/tos")
//         }, {
//             id: "privacy-policy",
//             children: "Privacy policy",
//             icon: "LifebuoyIcon",
//             onClick: () => router.push("/privacy")
//         }, {
//             id: "log-out",
//             children: "Log out",
//             icon: "ArrowRightOnRectangleIcon",
//             onClick: () => alert("Logging out...")
//         }],
//     }], search);

//     useEffect(() => {
//         const down = (e) => {
//             if (e.key === "k" && (e.metaKey || e.ctrlKey)) { e.preventDefault(); setOpen((open) => !open); }
//         }

//         document.addEventListener("keydown", down);
//         return () => document.removeEventListener("keydown", down);
//     }, []);

//     return (
//         <CommandPalette onChangeSearch={setSearch} onChangeOpen={setOpen} search={search} isOpen={open} page={"root"}>
//             <CommandPalette.Page id="root">
//                 {filteredItems.length ? filteredItems.map((list) => (
//                     <CommandPalette.List key={list.id} heading={list.heading}>
//                         {list.items.map(({ id, ...rest }) => (
//                             <CommandPalette.ListItem key={id} index={getItemIndex(filteredItems, id)} {...rest} />
//                         ))}
//                     </CommandPalette.List>
//                 )) : <CommandPalette.FreeSearchAction />}
//             </CommandPalette.Page>

//             {/* <CommandPalette.Page id="projects">
//           </CommandPalette.Page> */}
//         </CommandPalette>
//     )
// }

export default function Modules({ children }) {
    return (<>
        <ChakraProvider theme={extendTheme(config.theme)}>
            <ColorModeScript initialColorMode={"dark"} />
            <ToastContainer position={"top-center"} autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />

            {/* Command Palette */}
            {/* <CmdPalette /> */}

            <Container maxW={"8xl"} padding={"0 40px"} fontFamily={"Rubik, sans-serif;"}>{children}</Container>
            <Footer />
        </ChakraProvider>
    </>);
}
