"use client";

import { useEffect } from "react";
import NextImage from "next/image";
import Link from "next/link";

import { chakra, Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Popover, PopoverTrigger, PopoverContent, useColorModeValue, useDisclosure, Container, Heading, useColorMode, MenuButton, Menu, MenuList, Divider, MenuDivider } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io"

import config from "../../config";
import style from "./navbar.module.css";
import { usePathname } from "next/navigation";

const CColorPalette = chakra(IoMdColorPalette);
interface NavbarItemTypes { label: string, href: string, external?: boolean, children?: { label: string, description?: string, href: string }[] };
function navbar(name: string, logo: string, options: {
  disclose: {
    isOpen: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    onToggle: () => void;
    isControlled?: boolean;
    getButtonProps?: (props?: any) => any;
    getDisclosureProps?: (props?: any) => any;
  }
}) {
  const { isOpen, onToggle } = options.disclose;
  const pathname = usePathname();

  const textColor = useColorModeValue("gray.600", "gray.400");
  const grayColor = useColorModeValue("gray.200", "gray.700");
  const popoverContentBgColor = useColorModeValue("var(--secondary)", "var(--secondary)");
  const navDropdownBGColor = useColorModeValue("var(--tertiary)", "var(--tertiary)");

  return (<>
    <Flex w={"95%"} h={16} alignItems={"center"} justifyContent={"space-between"} fontFamily={"Rubik, sans-serif;"}>
      <Container as={Flex} maxW={"7xl"} align={"center"}>
        { /* Logo & Title */}
        <Flex flex={{ base: 1, md: "auto" }} justify={{ base: "start", md: "start" }} width={"max-content"}>
          <Link href={"/"} passHref>
            <Stack direction={"row"} alignItems={"center"}>
              <NextImage src={logo} width={48} height={48} loading={"lazy"} alt={"Logo"} style={{ cursor: "pointer", borderRadius: "100%" }} />
              {/* <Heading fontSize={"2xl"} fontWeight={"bold"} display={{ base: "none", sm: "block" }} color={"white"} fontFamily={"Rubik, sans-serif;"}>{name}</Heading> */}
            </Stack>
          </Link>
        </Flex>

        <Stack direction={"row"} align={"start"} spacing={{ base: 4, md: 8 }} flex={{ base: 1, md: "auto" }} justify={"flex-end"}>
          <Stack flex={{ base: 1 }} justify={{ base: "center" }}>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <Stack display={{ base: "none", md: "flex" }} direction={"row"} spacing={4}>
                {/* Desktop */}
                {config.navItems.map((navItem: NavbarItemTypes) => (
                  <Box key={navItem.label}>
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                      <PopoverTrigger>
                        <Box className={"transition-opacity"} p={2} borderRadius={"10%"} _hover={{ bg: "var(--tertiary)", cursor: "pointer" }}>
                          <Link href={navItem.href ?? "#"} style={{ fontSize: "1rem", fontWeight: "bold", color: "white !important" }}>
                            <Text fontWeight={"extrabold"} color={textColor} display={"inline-flex"} alignItems={"center"} gap={1} width={"100%"} textDecoration={pathname === "/" && navItem.label.toLowerCase() === "home" ? "underline" : (`/${navItem.label.toLowerCase()}` === pathname ? "underline" : "none")}>
                              {navItem.external === true ? <FaExternalLinkAlt /> : null}
                              {navItem.label}
                            </Text>
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
                                        <Text fontSize={"sm"}>{child.description}</Text>
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

        <Box display={{ md: "flex", base: "none" }}>
          <Menu>
            <MenuButton as={IconButton} icon={<CColorPalette w={6} h={6} />} variant={"ghost"} aria-label={"Select Theme"} transition={"all 0.3s"} />
            <MenuList alignItems={"center"} textAlign={"center"} bg={"var(--secondary)"}>
              <Text fontStyle={"italic"} opacity={.75}>Color Palette - Coming Soon</Text>
              <MenuDivider />
              <Button isDisabled={true}>Navy Blue</Button>
            </MenuList>
          </Menu>
        </Box>

        { /* Hamburger */}
        <Flex flex={{ base: 0, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }} mr={{ base: -8, md: 0 }} gap={2}>
          <Menu>
            <MenuButton as={IconButton} icon={<CColorPalette w={6} h={6} />} variant={"ghost"} aria-label={"Select Theme"} transition={"all 0.3s"} />
            <MenuList alignItems={"center"} textAlign={"center"} bg={"var(--secondary)"}>
              <Text fontStyle={"italic"} opacity={.75}>Color Palette - Coming Soon</Text>
              <MenuDivider />
              <Button isDisabled={true}>Navy Blue</Button>
            </MenuList>
          </Menu>
          <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={"ghost"} aria-label={"Toggle Navigation"} />
        </Flex>
      </Container>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity style={{ zIndex: 9, position: "fixed", left: "85%", transform: "translate(-85%, 0)", top: "6rem", width: "200px", borderRadius: "10px", margin: "auto" }}>
        <Stack bg={useColorModeValue("gray.200", "var(--primary)")} display={{ md: "none" }} py={4} px={2}>
          <Stack>
            {config.navItems.map((navItem: NavbarItemTypes) => (
              <Stack key={navItem.label} spacing={4} onClick={navItem.children && onToggle}>
                <Flex as={Link} href={navItem.href ?? "#"} justify={"space-between"}>
                  <Text fontWeight={"extrabold"} color={textColor} display={"inline-flex"} alignItems={"center"} gap={1} width={"100%"} textDecoration={pathname === "/" && navItem.label.toLowerCase() === "home" ? "underline" : (`/${navItem.label.toLowerCase()}` === pathname ? "underline" : "none")}>
                    {navItem.external === true ? <FaExternalLinkAlt /> : null}
                    {navItem.label}
                  </Text>
                  {navItem.children && (<Icon as={ChevronDownIcon} transition={"all .25s ease-in-out"} w={6} h={6} />)}
                </Flex>

                <Collapse in={isOpen} animateOpacity style={{ marginTop: "0 !important" }}>
                  <Stack pl={4} borderLeft={1} borderStyle={"solid"} borderColor={grayColor} align={"start"}>
                    {navItem.children && navItem.children.map(child => <Link key={child.label} href={child.href}>{child.label}</Link>)}
                  </Stack>
                </Collapse>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Collapse>
    </Flex>
  </>)
}

export default function Navbar({ name = config.name, logo = "/logo.png", service }: { name?: string, logo?: string, service?: { name: string, logo: string, add: string } }) {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    navbar.classList.add(style["navbar-no-scroll"]);
    window.addEventListener("scroll", function () {
      if (!navbar) return;
      if (window.scrollY >= 50) {
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
                  <NextImage src={service.logo} width={48} height={48} alt={"Logo"} loading={"lazy"} style={{ cursor: "pointer", borderRadius: "100%" }} />
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
