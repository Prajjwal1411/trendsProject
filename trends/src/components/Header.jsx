// Created by Prajjwal Shukla (8910064)



import { Box, Flex, Image, Spacer, Button, IconButton, HStack, Link } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation(); 

  return (
    <Box as="header" px={6} py={4} background="black" borderBottom="1px solid" borderColor="gray.700">
      <Flex alignItems="center">
        {/* Logo Section */}
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
            href="/"
            fontWeight={location.pathname === "/" ? "bold" : "normal"} 
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            Home
          </Link>
          <Link
            href="/blog"
            fontWeight={location.pathname === "/blog" ? "bold" : "normal"} // Highlight "blog"
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            Blog
          </Link>
          <Link
            href="/affiliate"
            fontWeight={location.pathname === "/affiliate" ? "bold" : "normal"} // Highlight "For FAQs"
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            Affiliate Program
          </Link>
          <Link
            href="/for-business"
            fontWeight={location.pathname === "/for-business" ? "bold" : "normal"}
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            For Business
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
          <Button size="sm" variant="link" color="white">
            Privacy policy
          </Button>
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
        />
      </Flex>
    </Box>
  );
}
