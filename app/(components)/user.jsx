"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";

import { chakra, Box, Flex, HStack, VStack, Text, IconButton, Button, Stack, Collapse, Icon, Link, Popover, PopoverTrigger, PopoverContent, Modal, ModalOverlay, ModalContent, FormControl, InputGroup, FormLabel, InputLeftElement, InputRightElement, Input, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Menu, MenuButton, Avatar, MenuList, MenuDivider, MenuItem, useColorModeValue, useBreakpointValue, useDisclosure, useColorMode, Container, Heading, Spinner, FormErrorMessage, MenuIcon, SkeletonCircle } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineExitToApp, MdSpaceDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsGear } from "react-icons/bs";

import config from "../../config";

const CUser = chakra(CgProfile);
const CSettings = chakra(BsGear);
const CDashboard = chakra(MdSpaceDashboard);
const CExit = chakra(MdOutlineExitToApp);

export function session() {
  const [user, setSession] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (localStorage.getItem("profile") !== null) {
      setSession(localStorage.getItem("profile") !== "undefined" ? JSON.parse(localStorage.getItem("profile")) : null);
      setStatus("authenticated");
    } else {
      setSession(null);
      setStatus("unauthenticated");
    };
  }, [setSession, setStatus])

  return { status, user };
}

export default function UserDropdown() {
  const [session, setSession] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (localStorage.getItem("profile") !== null) {
      setSession(localStorage.getItem("profile") !== "undefined" ? JSON.parse(localStorage.getItem("profile")) : null);
      setStatus("authenticated");
    } else {
      setSession(null);
      setStatus("unauthenticated");
    };
  }, [setSession, setStatus])

  return session ? (
    <Menu>
      <MenuButton py={2} transition={"all 0.3s"}>
        <HStack>
          <Avatar size={"md"} name={session?.username} src={`https://cdn.discordapp.com/avatars/${session?.id}/${session?.avatar}.png`} />
          <Box display={{ base: 'none', md: 'flex' }}><FiChevronDown /></Box>
        </HStack>
      </MenuButton>
      <MenuList alignItems={"center"} textAlign={"center"}>
        <HStack padding={"8px"}>
          <Box><Avatar size={"md"} name={session?.username} src={`https://cdn.discordapp.com/avatars/${session?.id}/${session?.avatar}.png`} /></Box>
          <Box textAlign={"start"} fontFamily={"Rubik"}>
            <Heading size={"md"} fontWeight={"semibold"} display={"inline-flex"}>{session?.username ?? "Unknown"}<Text fontSize={"large"} color={"gray.400"}>#{session?.discriminator}</Text></Heading>
            <Heading as={Text} size={"sm"} fontWeight={"semibold"} color={"gray.400"}>{session?.email ?? ""}</Heading>
          </Box>
        </HStack>
        <MenuDivider />
        <NextLink href={`/user/${session?.id}`}><MenuItem icon={<CUser w={5} h={5} />}>Profile</MenuItem></NextLink>
        <NextLink href={`/user/${session?.id}/edit`}><MenuItem icon={<CSettings w={5} h={5} />}>Settings</MenuItem></NextLink>
        <MenuDivider />
        <NextLink href={"/dashboard"}><MenuItem icon={<CDashboard w={5} h={5} />}>Dashboard</MenuItem></NextLink>
        <MenuDivider />
        <NextLink href={"/"}><MenuItem color={"red.400"} icon={<CExit w={5} h={5} />} onClick={() => {
          localStorage.setItem("profile", null);
          localStorage.setItem("uid", null);
          localStorage.setItem("token", null);
          setSession(null);
        }}>Logout</MenuItem></NextLink>
      </MenuList>
    </Menu>
  ) : (status === "loading" ? <SkeletonCircle height={"48px"} width={"48px"} /> : (
    <NextLink href={config.login}><Button size={"md"} color={"white"} _hover={{ bg: "white.500" }}>Login</Button></NextLink>
  ))
}

