import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import NextImage from "next/image";
import $ from 'jquery';

import config from "../config";

import { chakra, Box, Flex, HStack, VStack, Text, IconButton, Button, Stack, Collapse, Icon, Link, Popover, PopoverTrigger, PopoverContent, Modal, ModalOverlay, ModalContent, FormControl, InputGroup, FormLabel, InputLeftElement, InputRightElement, Input, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Menu, MenuButton, Avatar, MenuList, Center, MenuDivider, MenuItem, useColorModeValue, useBreakpointValue, useDisclosure, useColorMode, Container, Heading, TextUnderline, Spinner, FormErrorMessage } from "@chakra-ui/react";
import style from "../styles/sections/navbar.module.css";

import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon, LockIcon, } from "@chakra-ui/icons";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { FaLock, FaUserEdit, FaUserAlt } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { AiFillEye, AiFillEyeInvisible, AiFillSetting } from "react-icons/ai";

const CFaUserAlt = chakra(FaUserAlt);
const CFaUserEdit = chakra(FaUserEdit);
const CFaLock = chakra(FaLock);
const CEye = chakra(AiFillEye);
const CInvisEye = chakra(AiFillEyeInvisible);
const CSetting = chakra(AiFillSetting);

export default function Navbar({ name, logo, user }) {
  const router = useRouter();

  const { isOpen: signUpIsOpen, onOpen: signUpOnOpen, onClose: signUpOnClose } = useDisclosure();
  const { isOpen: logInIsOpen, onOpen: logInOnOpen, onClose: logInOnClose } = useDisclosure();
  const { isOpen: settingsIsOpen, onOpen: settingsOnOpen, onClose: settingsOnClose } = useDisclosure();
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const [showPassword, setShowPassword] = useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const initialRef2 = React.useRef(null);
  const finalRef2 = React.useRef(null);

  const [shownLoginModel, setShownLoginModel] = useState(false);

  const bgColor = useColorModeValue("light-blue.100", "dark-blue.100");
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const navDropdownBGColor = useColorModeValue("blue.50", "gray.900");
  const textColor = useColorModeValue("gray.200", "white");
  const grayColor = useColorModeValue("gray.200", "gray.700");

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.add(style["navbar-no-scroll"]);

    window.addEventListener("scroll", function () {
      if (window.pageYOffset >= 50) {
        navbar.classList.remove(style["navbar-no-scroll"]);
        navbar.classList.add(style["navbar-scroll"]);
      } else {
        navbar.classList.remove(style["navbar-scroll"]);
        navbar.classList.add(style["navbar-no-scroll"]);
      }
    }, { passive: true });
  });

  return (<>
    <Box className="navbar" bg={bgColor} padding={"5px"} position={"sticky"} top={"1rem"} zIndex={"100"} transition={"all 0.4s ease 0s"}>
      <Flex w={"95%"} h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Container as={Flex} maxW={"7xl"} align={"center"}>
          { /* Hamburger */}
          <Flex flex={{ base: 0, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }} mr={{ base: 6, md: 0 }}>
            <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={"ghost"} aria-label={"Toggle Navigation"} />
          </Flex>

          { /* Logo & Title */}
          <Flex flex={{ base: 1, md: "auto" }} justify={{ base: "start", md: "start" }}>
            <Stack direction={"row"} alignItems={"center"} spacing={{ base: 2, sm: 4 }}>
              <NextLink href={"/"} passHref>
                <NextImage src={logo} width={"50px"} height={"50px"} className={"rounded-full hover:cursor-pointer"} />
              </NextLink>
              {/* <Heading as={"h1"} fontSize={"xl"} display={{ base: "none", md: "block" }}>{name}</Heading> */}
            </Stack>
          </Flex>

          <Stack direction={"row"} align={"center"} spacing={{ base: 6, md: 8 }} flex={{ base: 1, md: "auto" }} justify={"flex-end"}>
            <Stack flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
              <Flex display={{ base: "none", md: "flex" }} ml={10}>
                <Stack display={{ base: "none", md: "flex" }} direction={"row"} spacing={4}>
                  {/* Desktop */}
                  {config.navItems.map((navItem, i) => (
                    <Box key={i}>
                      <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger style={{ transitionDelay: `${i * 100}ms` }}>
                          <Link p={2} href={navItem.href ?? "#"} fontSize={"sm"} fontWeight={500} color={linkColor} _hover={{ textDecoration: "none", color: linkHoverColor }}>
                            {navItem.label}
                          </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                          <PopoverContent border={0} boxShadow={"xl"} bg={popoverContentBgColor} p={4} rounded={"xl"} minW={"sm"}>
                            <Stack>
                              {navItem.children.map((child) => (
                                <Link href={child.href} role={"group"} display={"block"} p={2} rounded={"md"} _hover={{ bg: navDropdownBGColor }}>
                                  <Stack direction={"row"} align={"center"}>
                                    <NextLink href={child.href} passHref={true}>
                                      <Stack>
                                        <Box>
                                          <Text transition={"all .3s ease"} _groupHover={{ color: "blue.400" }} fontWeight={500}>{child.label}</Text>
                                          <Text fontSize={"sm"}>{child.subLabel}</Text>
                                        </Box>
                                        <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0} _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
                                          justify={"flex-end"} align={"center"} flex={1}>
                                          <Icon color={"blue.400"} w={5} h={5} as={ChevronRightIcon} />
                                        </Flex>
                                      </Stack>
                                    </NextLink>
                                  </Stack>
                                </Link>
                              ))}
                            </Stack>
                          </PopoverContent>
                        )}
                      </Popover>
                    </Box>
                  ))}
                </Stack>
              </Flex>
            </Stack>

            <Button bg={"blue.500"} _hover={{ bg: "blue.400" }} color={"white"} disabled={true}>Resume</Button>

            {/* <Menu>
                <chakra.button as={MenuButton} bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")} rounded={"full"} w={8} h={8}
            cursor={"pointer"} display={"flex"} alignItems={"center"}
            justifyContent={"center"} transition={"all 0.3s"} _hover={{ bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200") }}>
                    <CSetting color={"gray.400"} />
                </chakra.button>
                <MenuList alignItems={"center"}>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <NextLink href={"/dashboard"} passHref><MenuItem>Dashboard</MenuItem></NextLink>
                  <MenuDivider />
                  <NextLink href={"/api/auth/logout"} passHref><MenuItem color={"red.400"}>Logout</MenuItem></NextLink>
                </MenuList>
              </Menu> */}
            {/* <Button aria-label="Toggle Color Mode" onClick={toggleColorMode} _focus={{ boxShadow: "none" }} w="fit-content">{colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}</Button> */}
          </Stack>
        </Container>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        {/* Mobile */}
        <Stack bg={useColorModeValue("gray.200", "gray.900")} display={{ md: "none" }} p={4} zIndex={9999} pos="fixed" top="60px" w={"full"} minH={"calc(100vh - 60px)"}>
          {config.navItems.map((navItem) => (
            <Stack spacing={4} onClick={navItem.children && onToggle}>
              <Flex py={2} as={Link} href={navItem.href ?? "#"} justify={"space-between"} align={"center"} _hover={{ textDecoration: "none" }}>
                <Text fontWeight={600} color={textColor}>{navItem.label}</Text>
                {navItem.children && (
                  <Icon as={ChevronDownIcon} transition={"all .25s ease-in-out"} transform={isOpen ? "rotate(180deg)" : ""} w={6} h={6} />
                )}
              </Flex>

              <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
                <Stack mt={2} pl={4} borderLeft={1} borderStyle={"solid"} borderColor={grayColor} align={"start"}>
                  {navItem.children && navItem.children.map(child => (
                    <Link key={child.label} py={2} href={child.href}>{child.label}</Link>
                  ))}
                </Stack>
              </Collapse>
            </Stack>
          ))}
        </Stack>
      </Collapse>
    </Box>
  </>);
}
