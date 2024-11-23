import { Box, Flex, Image, Spacer, Button, IconButton, HStack, Link } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom"; // For React Router-based routing
import logo from "../media/logo.svg";

export default function Header() {
  const location = useLocation(); // Get the current route path

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

        {/* Navigation Links */}
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          <Link
            href="/product"
            fontWeight={location.pathname === "/" ? "bold" : "normal"} // Highlight "Product"
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            Home
          </Link>
          <Link
            href="/product"
            fontWeight={location.pathname === "/products" ? "bold" : "normal"} // Highlight "Product"
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            Product
          </Link>
          <Link
            href="/for-business"
            fontWeight={location.pathname === "/for-business" ? "bold" : "normal"} // Highlight "For Business"
            color="white"
            _hover={{ textDecoration: "none" }}
          >
            For Business
          </Link>
          <Button size="sm" variant="link" color="white">
            Privacy policy
          </Button>
          <Button size="sm" variant="outline" color="white" borderColor="white">
            Log in
          </Button>
        </HStack>

        {/* Hamburger Menu for Mobile */}
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
