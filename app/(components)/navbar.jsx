"use client";

import { useEffect } from "react";
import NextImage from "next/image";
import Link from "next/link";

import { chakra, Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Popover, PopoverTrigger, PopoverContent, useColorModeValue, useDisclosure, Container, Heading, useColorMode } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FaMoon, FaSun } from "react-icons/fa";

import config from "../../config";
import UserDropdown from "./user";
import style from "./navbar.module.css";

const Moon = chakra(FaMoon);
const Sun = chakra(FaSun);

function navbar(name, logo, options) {
  const { isOpen, onToggle } = options.disclose;
  const { colorMode, toggleColorMode } = useColorMode()

  const textColor = useColorModeValue("gray.600", "gray.400");
  const grayColor = useColorModeValue("gray.200", "gray.700");
  const popoverContentBgColor = useColorModeValue("var(--dark-blue-2)", "var(--dark-blue-2)");
  const navDropdownBGColor = useColorModeValue("var(--dark-blue-3)", "var(--dark-blue-3)");

  return (<>
    <Flex w={"95%"} h={16} alignItems={"center"} justifyContent={"space-between"} fontFamily={"Rubik, sans-serif;"}>
      <Container as={Flex} maxW={"7xl"} align={"center"}>
        { /* Logo & Title */}
        <Flex flex={{ base: 1, md: "auto" }} justify={{ base: "start", md: "start" }} width={"max-content"}>
          <Link href={"/"} passHref>
            <Stack direction={"row"} alignItems={"center"}>
              <NextImage src={logo} width={48} height={48} alt={"Logo"} style={{ cursor: "pointer", borderRadius: "100%" }} />
              <Heading fontSize={"2xl"} fontWeight={"bold"} display={{ base: "none", sm: "block" }} color={"white"} fontFamily={"Rubik, sans-serif;"}>{name}</Heading>
            </Stack>
          </Link>
        </Flex>

        <Stack direction={"row"} align={"start"} spacing={{ base: 4, md: 8 }} flex={{ base: 1, md: "auto" }} justify={"flex-end"}>
          <Stack flex={{ base: 1 }} justify={{ base: "center" }}>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <Stack display={{ base: "none", md: "flex" }} direction={"row"} spacing={4}>
                {/* Desktop */}
                {config.navItems.map((navItem) => (
                  <Box key={navItem.label}>
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                      <PopoverTrigger>
                        <Box className={"transition-opacity"} p={2} borderRadius={"10%"} _hover={{ bg: "var(--dark-blue-3)", cursor: "pointer" }}>
                          <Link href={navItem.href ?? "#"} style={{ fontSize: "1rem", fontWeight: "bold", color: "white !important" }}>
                            {navItem.label}
                            {navItem.children && <Icon w={5} h={5} as={ChevronDownIcon} />}
                          </Link>
                        </Box>
                      </PopoverTrigger>

                      {navItem.children && (
                        <PopoverContent border={0} boxShadow={"xl"} bg={popoverContentBgColor} p={4} rounded={"xl"} minW={"sm"}>
                          <Stack>
                            {navItem.children.map((child, i) => (
                              <Link key={i} href={child.href}>
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
        </Stack>

        <Box display={{ md: "flex", sm: "none" }}><UserDropdown /></Box>

        { /* Hamburger */}
        <Flex flex={{ base: 0, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }} mr={{ base: -8, md: 0 }} gap={2}>
          <IconButton onClick={toggleColorMode} icon={colorMode === "light" ? <Moon w={5} h={5} /> : <Sun w={5} h={5} />} variant={"ghost"} aria-label={"Toggle Theme"} isDisabled={true} />
          <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={"ghost"} aria-label={"Toggle Navigation"} />
        </Flex>
      </Container>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity style={{ zIndex: 9, position: "fixed", left: "50%", transform: "translate(-50%, 0)", top: "6rem", width: "80vw", borderRadius: "10px", margin: "auto" }}>
        <Stack bg={useColorModeValue("gray.200", "var(--dark-blue)")} display={{ md: "none" }} py={4} px={2}>
          <Stack>
            {config.navItems.map((navItem) => (
              <Stack key={navItem.label} spacing={4} onClick={navItem.children && onToggle}>
                <Flex as={Link} href={navItem.href ?? "#"} justify={"space-between"}>
                  <Text fontWeight={"extrabold"} color={textColor}>{navItem.label}</Text>
                  {navItem.children && (<Icon as={ChevronDownIcon} transition={"all .25s ease-in-out"} w={6} h={6} />)}
                </Flex>

                <Collapse in={isOpen} animateOpacity style={{ marginTop: "0 !important" }}>
                  <Stack pl={4} borderLeft={1} borderStyle={"solid"} borderColor={grayColor} align={"start"}>
                    {navItem.children && navItem.children.map(child => <Link key={child.label} py={2} href={child.href}>{child.label}</Link>)}
                  </Stack>
                </Collapse>
              </Stack>
            ))}
          </Stack>

          <Box py={2}><UserDropdown /></Box>
        </Stack>
      </Collapse>
    </Flex>
  </>)
}

export default function Navbar({ name = config.name, logo = config.logo, service }) {
  const { isOpen, onToggle } = useDisclosure();

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
        {navbar(name, logo, { disclose: { isOpen, onToggle } })}
      </Box>
      <Box className={"navbar"} bg={"1A202C"} padding={"5px"} position={"sticky"} top={"1rem"} zIndex={"9"} transition={"all 0.4s ease 0s"} fontFamily={"Rubik, sans-serif;"}>
        <Flex w={"95%"} h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Container as={Flex} maxW={"7xl"} align={"center"}>
            { /* Logo & Title */}
            <Flex flex={{ base: 1, md: "auto" }} justify={{ base: "start", md: "start" }}>
              <Stack direction={"row"} alignItems={"center"} spacing={{ base: 2, sm: 4 }}>
                <Link href={"/"} passHref>
                  <NextImage src={service.logo} width={48} height={48} alt={"Logo"} style={{ cursor: "pointer", borderRadius: "100%" }} />
                </Link>
                <Heading fontSize={"2xl"} display={{ base: "none", sm: "block" }} color={"white"} fontFamily={"Rubik"}>{service.name}</Heading>
              </Stack>
            </Flex>

            <Link href={service.add}><Button size={"md"} bg={"blue.400"} color={"white"} _hover={{ bg: "blue.500" }}>Get Started</Button></Link>
          </Container>
        </Flex>
      </Box>
    </>) : <Box className={"navbar"} bg={"1A202C"} padding={"5px"} position={"sticky"} top={"1rem"} zIndex={"9"} transition={"all 0.4s ease 0s"} fontFamily={"Rubik, sans-serif;"}>
      {navbar(name, logo, { disclose: { isOpen, onToggle } })}
    </Box>}
  </>);
}
