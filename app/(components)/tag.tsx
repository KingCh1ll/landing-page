"use client";

import { Tag, TagLabel } from "@chakra-ui/react";
export default function CreateTag({ name, color }: { name: string, color: string }) {
    return (
        <Tag size={"md"} fontFamily={"Rubik, sans-serif;"} colorScheme={color} mx={1}>
            <TagLabel fontWeight={"medium"}>{name}</TagLabel>
        </Tag>
    )
}