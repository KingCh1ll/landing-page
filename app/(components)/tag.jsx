"use client";

import { Tag, TagLabel } from "@chakra-ui/react";

export default function CreateTag({ name, color }) {
    return (
        <Tag size={"md"} fontFamily={"Rubik, sans-serif;"} colorScheme={color}>
            <TagLabel fontWeight={"medium"}>{name}</TagLabel>
        </Tag>
    )
}