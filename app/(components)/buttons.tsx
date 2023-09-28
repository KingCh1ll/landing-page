"use client";


import { chakra, VisuallyHidden, useColorModeValue, Button } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

export function LinkButton({ href, children }: { children: React.ReactNode, href: string }) {
    return <Button isDisabled={href === null || typeof href === "undefined"} display={"inline-flex"} alignItems={"center"} gap={1}><FaExternalLinkAlt />{children}</Button>
};

export function SocialButton({ children, label, href }: {
    children: React.ReactNode,
    label: string,
    href: string
}) {
    return (
        <chakra.button bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")} rounded={"full"} w={8} h={8}
            cursor={"pointer"} as={"a"} href={href} display={"inline-flex"} alignItems={"center"}
            justifyContent={"center"} transition={"background 0.3s ease"} _hover={{ bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200") }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};