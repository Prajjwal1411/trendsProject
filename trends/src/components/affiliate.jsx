/*Created by Aksha Parvadiya (8907588)*/ 

import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Button,
  SimpleGrid,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import image1 from "../media/9.jpg";
import image2 from "../media/14.jpg";
import image3 from "../media/12.jpg";
import image4 from "../media/13.jpg";
import { FaMoneyBillWave, FaGift, FaHandsHelping, FaTools } from "react-icons/fa";


const AffiliatePage = () => {
  return (
    <Box bg="black" color="white" py={10} px={6}>
      {/* Hero Section */}
      <Flex
        direction={["column", "row"]}
        align="center"
        justify="space-between"
        mb={16}
        bg="gray.900"
        p={8}
        borderRadius="lg"
        boxShadow="md"
      >
        <Box maxW="600px">
          <Text fontSize="lg" color="white.500" mb={2}>
            Affiliate Program
          </Text>
          <Heading size="2xl" color="#b9ff38" mb={4} fontWeight="bold">
            Join BetterMe’s Affiliate Program
          </Heading>
          <Text fontSize="lg" color="white.600" mb={6}>
            Promote simple and fun wellness at home with BetterMe and earn
            commissions along the way.
          </Text>
          <Button
            as="a"
            href="/signup"
            bg="gray.700"
            color="white"
            size="lg"
            _hover={{ bg: "gray.600" }}
            mr={4}
          >
            Start Earning
          </Button>
          <Button
            as="a"
            href="#scroll"
            variant="ghost"
            color="gray.700"
            size="lg"
            rightIcon={<ChevronDownIcon />}
          >
            Scroll Down
          </Button>
        </Box>
        <Image
          src={image1}
          alt="Affiliate Program"
          borderRadius="lg"
          maxW="500px"
          mt={[6, 0]}
        />
      </Flex>

      {/* Steps Section */}
      <Box id="scroll" mb={16}>
        <Heading size="xl" textAlign="center" mb={8}>
          Let’s Get Started!
        </Heading>
        <SimpleGrid columns={[1, 3]} spacing={8}>
          {[
            {
              title: "Register",
              description:
                "Get a commission for every new user you bring.",
              step: "Step 1",
              image: image2,
            },
            {
              title: "Promote",
              description:
                "Get a commission for every new user you bring.",
              step: "Step 2",
              image: image3,
            },
            {
              title: "Earn",
              description:
                "Get a commission for every new user you bring.",
              step: "Step 3",
              image: image4,
            },
          ].map((step, index) => (
            <VStack
              key={index}
              bg="white"
              p={6}
              borderRadius="lg"
              boxShadow="md"
              align="center"
              spacing={4}
            >
              <Image
                src={step.image}
                alt={step.title}
                borderRadius="lg"
                mb={4}
              />
              <Text
                bg="gray.100"
                px={4}
                py={1}
                borderRadius="full"
                fontWeight="bold"
                color="gray.700"
              >
                {step.step}
              </Text>
              <Heading color="gray.600" size="md">{step.title}</Heading>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                {step.description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>

      {/* Benefits Section */}
      <Box mb={16}>
        <Heading size="xl" textAlign="center" mb={8}>
          BetterMe Affiliate Benefits
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing={8}>
          {[
            {
              title: "Commissions",
              description:
                "Snag up to 15% from every new user you bring on board and enjoy a 30-day cookie lifespan.",
                icon: <FaMoneyBillWave size={24} color="#E53E3E" />,
            },
            {
              title: "Offers",
              description:
                "Your audience will get special offers and promotions through your affiliate link.",
                icon: <FaGift size={24} color="#38A169" />,
            },
            {
              title: "Support",
              description:
                "Our team will guide you through your affiliate journey and support you along the way.",
                icon: <FaHandsHelping size={24} color="#3182CE" />,
            },
            {
              title: "Resources",
              description:
                "We’ll provide you with marketing materials to help you drive conversions.",
                icon: <FaTools size={24} color="#805AD5" />,
            },
          ].map((benefit, index) => (
            <VStack
            key={index}
            bg="white"
            p={6}
            borderRadius="lg"
            boxShadow="md"
            align="start"
            spacing={4}
          >
            {benefit.icon}
            <Heading color="gray.600" size="md">{benefit.title}</Heading>
            <Text fontSize="sm" color="gray.600">
              {benefit.description}
            </Text>
          </VStack>
          ))}
        </SimpleGrid>
      </Box>

      {/* Call to Action Section */}
      <Box textAlign="center" bg="black" p={8} borderRadius="lg">
        <Heading size="lg" color="white" mb={4}>
          Ready to Join the BetterMe Affiliate Program?
        </Heading>
        <Text fontSize="lg" color="white" mb={6}>
          Start earning today by partnering with one of the most trusted health
          and wellness brands.
        </Text>
        <Button
          as="a"
          href="/signup"
          bg="#b9ff38"
          color="black"
          size="lg"
    
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default AffiliatePage;
