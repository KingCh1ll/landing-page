"use client";

import React, { useEffect } from "react";
import NextLink from "next/link";
import NextImage from "next/image";

import config from "../../config";

import { chakra, Box, Flex, HStack, VStack, Text, IconButton, Button, Stack, Collapse, Icon, Link, Popover, PopoverTrigger, PopoverContent, Modal, ModalOverlay, ModalContent, FormControl, InputGroup, FormLabel, InputLeftElement, InputRightElement, Input, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Menu, MenuButton, Avatar, MenuList, MenuDivider, MenuItem, useColorModeValue, useBreakpointValue, useDisclosure, useColorMode, Container, Heading, Spinner, FormErrorMessage, MenuIcon } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

import style from "./navbar.module.css";
import UserDropdown from "./user";

export default function Navbar({ name = config.name, logo = config.logo, service }) {
  const { isOpen, onToggle } = useDisclosure();

  const linkColor = useColorModeValue("gray.600", "gray.400");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const navDropdownBGColor = useColorModeValue("blue.50", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.400");
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
    {service ? (<>
      <Box padding={"5px"} bg={"#000d2b"} overflow={"visible"} width={"100vw"} marginLeft={"calc(50% - 50vw);"} zIndex={98} fontFamily={"Rubik, sans-serif;"}>
        <Flex w={"95%"} h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Container as={Flex} maxW={"7xl"} align={"center"}>
            { /* Hamburger */}
            <Flex flex={{ base: 0, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }} mr={{ base: 6, md: 0 }}>
              <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={"ghost"} aria-label={"Toggle Navigation"} />
            </Flex>

            { /* Logo & Title */}
            <Flex flex={{ base: 1, md: "auto" }} justify={{ base: "start", md: "start" }}>
              <Stack direction={"row"} alignItems={"center"} spacing={{ base: 2, sm: 4 }}>
                <NextLink href={"/"}>
                  <NextImage src={logo} width={48} height={48} alt={"Logo"} style={{ cursor: "pointer", borderRadius: "100%" }} />
                </NextLink>
                <Heading fontSize={"2xl"} display={{ base: "none", sm: "block" }} color={"white"} fontFamily={"Rubik"}>{name}</Heading>
              </Stack>
            </Flex>

            { /* Stack */}
            <Stack direction={"row"} align={"center"} spacing={{ base: 6, md: 8 }} flex={{ base: 1, md: "auto" }} justify={"flex-end"}>
              <Stack flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
                <Flex display={{ base: "none", md: "flex" }} ml={10}>
                  <Stack display={{ base: "none", md: "flex" }} direction={"row"} spacing={4}>
                    {/* Desktop */}
                    {config.navItems.map((navItem) => (
                      <Box key={navItem.label}>
                        <Popover trigger={"hover"} placement={"bottom-start"}>
                          <PopoverTrigger>
                            <Link onClick={(e) => { e.preventDefault() }} p={2} href={navItem.href ?? "#"} fontSize={"sm"} fontWeight={"bold"} color={linkColor} _hover={{ textDecoration: "none", color: linkHoverColor }}>
                              {navItem.label}
                              {navItem.children && <Icon w={5} h={5} as={ChevronDownIcon} />}
                            </Link>
                          </PopoverTrigger>

                          {navItem.children && (
                            <PopoverContent border={0} boxShadow={"xl"} bg={popoverContentBgColor} p={4} rounded={"xl"} minW={"sm"} zIndex={999999}>
                              <Stack>{navItem.children.map((child, i) => (
                                <NextLink key={i} href={child.href}>
                                  <Box role={"group"} p={2} _hover={{ bg: navDropdownBGColor }} style={{ display: "block", cursor: "pointer", borderRadius: "10px" }}>
                                    <Stack direction={"row"} align={"center"}>
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
                                    </Stack>
                                  </Box>
                                </NextLink>
                              ))}</Stack>
                            </PopoverContent>
                          )}
                        </Popover>
                      </Box>
                    ))}
                  </Stack>
                </Flex>
              </Stack>

              <UserDropdown />
            </Stack>
          </Container>
        </Flex>
      </Box>
      <Box className={"navbar"} bg={"1A202C"} padding={"5px"} position={"sticky"} top={"1rem"} zIndex={"9"} transition={"all 0.4s ease 0s"} fontFamily={"Rubik, sans-serif;"}>
        <Flex w={"95%"} h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Container as={Flex} maxW={"7xl"} align={"center"}>
            { /* Logo & Title */}
            <Flex flex={{ base: 1, md: "auto" }} justify={{ base: "start", md: "start" }}>
              <Stack direction={"row"} alignItems={"center"} spacing={{ base: 2, sm: 4 }}>
                <NextLink href={"/"} passHref>
                  <NextImage src={service.logo} width={48} height={48} alt={"Logo"} style={{ cursor: "pointer", borderRadius: "100%" }} />
                </NextLink>
                <Heading fontSize={"2xl"} display={{ base: "none", sm: "block" }} color={"white"} fontFamily={"Rubik"}>{service.name}</Heading>
              </Stack>
            </Flex>

            <NextLink href={service.add}><Button size={"md"} bg={"blue.400"} color={"white"} _hover={{ bg: "blue.500" }}>Get Started</Button></NextLink>
          </Container>
        </Flex>
      </Box>
    </>) : (
      <Box className={"navbar"} bg={"1A202C"} padding={"5px"} position={"sticky"} top={"1rem"} zIndex={98} transition={"all 0.4s ease 0s"} fontFamily={"Rubik, sans-serif;"}>
        <Flex w={"95%"} h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Container as={Flex} maxW={"7xl"} align={"center"}>
            { /* Hamburger */}
            <Flex flex={{ base: 0, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }} mr={{ base: 6, md: 0 }}>
              <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={"ghost"} aria-label={"Toggle Navigation"} />
            </Flex>

            { /* Logo & Title */}
            <Flex flex={{ base: 1, md: "auto" }} justify={{ base: "start", md: "start" }}>
              <Stack direction={"row"} alignItems={"center"} spacing={{ base: 2, sm: 4 }}>
                <NextLink href={"/"}><NextImage src={logo} width={48} height={48} alt={"Logo"} style={{ cursor: "pointer", borderRadius: "100%" }} /></NextLink>
                <Heading fontSize={"2xl"} display={{ base: "none", sm: "block" }} color={"white"}>{name}</Heading>
              </Stack>
            </Flex>

            <Stack direction={"row"} align={"center"} spacing={{ base: 6, md: 8 }} flex={{ base: 1, md: "auto" }} justify={"flex-end"}>
              <Stack flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
                <Flex display={{ base: "none", md: "flex" }} ml={10}>
                  <Stack display={{ base: "none", md: "flex" }} direction={"row"} spacing={4}>
                    {/* Desktop */}
                    {config.navItems.map((navItem) => (
                      <Box key={navItem.label}>
                        <Popover trigger={"hover"} placement={"bottom-start"}>
                          <PopoverTrigger>
                            <Link href={navItem.href ?? "#"} onClick={(e) => e.preventDefault()} p={2} fontSize={"sm"} fontWeight={"bold"} color={linkColor} _hover={{ textDecoration: "none", color: linkHoverColor }}>
                              {navItem.label}
                              {navItem.children && <Icon w={5} h={5} as={ChevronDownIcon} />}
                            </Link>
                          </PopoverTrigger>

                          {navItem.children && (
                            <PopoverContent border={0} boxShadow={"xl"} bg={popoverContentBgColor} p={4} rounded={"xl"} minW={"sm"}>
                              <Stack>
                                {navItem.children.map((child, i) => (
                                  <NextLink key={i} href={child.href}>
                                    <Box role={"group"} p={2} _hover={{ bg: navDropdownBGColor }} style={{ display: "block", cursor: "pointer", borderRadius: "10px" }}>
                                      <Stack direction={"row"} align={"center"}>
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
                                      </Stack>
                                    </Box>
                                  </NextLink>
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
            </Stack>

            <UserDropdown />
          </Container>
        </Flex>
      </Box>
    )}
    {/* Mobile Menu */}
    <Collapse in={isOpen} animateOpacity style={{ zIndex: 9999999, position: "sticky", top: "1rem" }}>
      <Stack bg={useColorModeValue("gray.200", "gray.900")} display={{ md: "none" }} p={4} pos={"fixed"} top={0} left={-.5} w={"50vh"} minH={"100vh"}>
        <HStack justify={"end"} w={"full"}>
          <Flex flex={{ base: 0, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }} mr={{ base: 6, md: 0 }}>
            <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={"ghost"} aria-label={"Toggle Navigation"} />
          </Flex>
        </HStack>
        <Stack>
          {config.navItems.map((navItem) => (
            <Stack spacing={4} onClick={navItem.children && onToggle}>
              <Flex py={2} as={Link} href={navItem.href ?? "#"} justify={"space-between"} _hover={{ textDecoration: "none" }}>
                <Text fontWeight={"extrabold"} color={textColor}>{navItem.label}</Text>
                {navItem.children && (<Icon as={ChevronDownIcon} transition={"all .25s ease-in-out"} transform={isOpen ? "rotate(180deg)" : ""} w={6} h={6} />)}
              </Flex>

              <Collapse in={isOpen} animateOpacity style={{ marginTop: "0 !important" }}>
                <Stack mt={2} pl={4} borderLeft={1} borderStyle={"solid"} borderColor={grayColor} align={"start"}>
                  {navItem.children && navItem.children.map((child, i) => (
                    <Link key={child.label} py={2} href={child.href}>{child.label}</Link>
                  ))}
                </Stack>
              </Collapse>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Collapse>
  </>);
}
