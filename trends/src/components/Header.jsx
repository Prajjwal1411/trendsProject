import { Box, Flex, Image, Spacer, Button, IconButton, HStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../media/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box as="header" px={6} py={4} background="black" borderBottom="1px solid" borderColor="gray.700">
      <Flex alignItems="center">
        {/* Logo Section */}
        
        <Link to="/">
            <Image 
                src={logo}
                alt="BetterMe Logo"
                boxSize="80px" 
            />
        </Link>

        <Spacer />

        {/* Right Section */}
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Button size="sm" variant="link" color="white"> {/* Changed text color */}
            Privacy policy
          </Button>
          <Button size="sm" variant="outline" color="white" borderColor="white"> {/* Adjusted button text and border */}
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
          color="white" // Changed menu icon color
        />
      </Flex>
    </Box>
  );
}
