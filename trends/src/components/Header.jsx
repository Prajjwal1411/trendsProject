// Created by Prajjwal Shukla (8910064)



import React, { useState } from "react";
import { 
  Box, 
  Flex, 
  Image, 
  IconButton, 
  Link, 
  HStack, 
  Button, 
  Drawer, 
  DrawerBody, 
  DrawerOverlay, 
  DrawerContent, 
  DrawerCloseButton, 
  VStack, 
  Spacer 
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";
import logo from "../media/logo.svg";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Box as="header" px={6} py={4} background="black" borderBottom="1px solid" borderColor="gray.700">
      <Flex alignItems="center">

        <Link href="/" _hover={{ textDecoration: "none" }}>
          <Image 
            src={logo}
            alt="BetterMe Logo"
            boxSize="80px"
          />
        </Link>

        <Spacer />


        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          <Link
            href="/for-business"
            fontWeight={location.pathname === "/for-business" ? "bold" : "normal"}
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            For Business
          </Link>
          <Link
            href="/blog"
            fontWeight={location.pathname === "/blog" ? "bold" : "normal"}
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            Blog
          </Link>
          <Link
            href="/affiliate"
            fontWeight={location.pathname === "/affiliate" ? "bold" : "normal"}
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            Affiliate Program
          </Link>
          <Link
            href="/about-us"
            fontWeight={location.pathname === "/about-us" ? "bold" : "normal"}
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            About Us
          </Link>
          <Link
            href="/faq"
            fontWeight={location.pathname === "/faq" ? "bold" : "normal"}
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            FAQs
          </Link>
          <Button size="sm" variant="outline" color="white" borderColor="white">
            Log in
          </Button>
        </HStack>

        <IconButton
          aria-label="Menu"
          icon={<HamburgerIcon />}
          size="sm"
          display={{ base: "flex", md: "none" }}
          variant="ghost"
          color="white"
          onClick={toggleMenu}
        />
      </Flex>


      <Drawer isOpen={isMenuOpen} placement="right" onClose={toggleMenu}>
        <DrawerOverlay />
        <DrawerContent bg="black">
          <DrawerCloseButton color="white" />
          <DrawerBody>
            <VStack align="start" spacing={6} mt={4}>
              <Link
                href="/for-business"
                fontWeight={location.pathname === "/for-business" ? "bold" : "normal"}
                color="white"
                _hover={{ textDecoration: "none" }}
              >
                For Business
              </Link>
              <Link
                href="/blog"
                fontWeight={location.pathname === "/blog" ? "bold" : "normal"}
                color="white"
                _hover={{ textDecoration: "none" }}
              >
                Blog
              </Link>
              <Link
                href="/affiliate"
                fontWeight={location.pathname === "/affiliate" ? "bold" : "normal"}
                color="white"
                _hover={{ textDecoration: "none" }}
              >
                Affiliate Program
              </Link>
              <Link
                href="/about-us"
                fontWeight={location.pathname === "/about-us" ? "bold" : "normal"}
                color="white"
                _hover={{ textDecoration: "none" }}
              >
                About Us
              </Link>
              <Link
                href="/faq"
                fontWeight={location.pathname === "/faq" ? "bold" : "normal"}
                color="white"
                _hover={{ textDecoration: "none" }}
              >
                FAQs
              </Link>
              <Button size="sm" variant="outline" color="white" borderColor="white" w="100%">
                Log in
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
