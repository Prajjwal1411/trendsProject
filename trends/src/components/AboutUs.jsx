// Created by Gaurav Rana(8936697)

import { ArrowDownIcon, StarIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Flex,
  Button,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaUsers,
  FaGlobeAmericas,
  FaAward,
  FaBolt,
  FaHeart,
  FaBrain,
} from "react-icons/fa";

export default function AboutUs() {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBgColor = useColorModeValue("white", "gray.700");

  return (
    <Box minH="100vh">
      {/* Hero Section */}
      <Box
  position="relative"
  minH="100vh"
  px={[4, 6, 20]}
  py={20}
  display="flex"
  alignItems="center"
>
  <Container maxW="7xl" >
    <Flex
      direction={["column", "column", "row"]}
      alignItems="center"
      justifyContent="space-between"
      gap={10}
    >
      {/* Left Content */}
      <Box flex="1" >
        <Heading
          as="h1"
          fontSize={["4xl", "5xl", "6xl", "7xl"]}
          color="#14264E"
          mb={8}
          maxW="4xl"
        >
          Personalized holistic wellness solution
        </Heading>
        <Text
          fontSize={["xl", "2xl"]}
          color="gray.600"
          maxW="2xl"
          lineHeight="tall"
        >
          Since 2017, we have been on a mission to create a healthier world for
          everyone, regardless of age, sex, physical ability, or background.
        </Text>
      </Box>

      {/* Right Image */}
      <Box
        flex="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
       <Image
          src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,f_auto,q_auto:good/v1/betterme.world/about/vcard-2_lu5ha8" /* Replace with your portrait image URL */
          alt="Holistic wellness"
          borderRadius="2xl"
          boxShadow="lg"
          maxW="100%"
          height="auto"
          objectFit="cover"
        />
      </Box>
    </Flex>

    {/* Scroll Down Indicator */}
    <HStack
      position="absolute"
      bottom={10}
      right={[4, 6, 20]}
      color="gray.600"
      cursor="pointer"
      _hover={{ textDecoration: "underline" }}
    >
      <Text fontSize="sm">Scroll Down</Text>
      <Icon as={ArrowDownIcon} w={4} h={4} animation="bounce 1s infinite" />
    </HStack>
  </Container>
</Box>


      <Box px={[4, 6, 20]} py={20}>
        <Container maxW="7xl" position="relative">
          {/* Image */}
          <Box
            position="relative"
            w="full"
            h={600}
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="lg"
          >
            <Image
              src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,f_auto,q_auto:good/v1/betterme.world/about/ps-1_hlc62w?height=600&width=1200"
              alt="Woman practicing yoga, representing holistic wellness"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>

          {/* Overlay Content */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            color="white"
          >
            <Heading
              as="h2"
              fontSize={["3xl", "4xl", "5xl"]}
              fontWeight="bold"
              mb={4}
            >
              BetterMe: Health Coaching App
            </Heading>
            <Text fontSize={["md", "lg", "xl"]} mb={6}>
              All-in-one health app with 3 000+ workouts, meal plans, water and
              calorie trackers, lifestyle change program, and self-care
              challenges.
            </Text>
            <Button
              bg="white"
              color="#14264E"
              px={8}
              py={6}
              borderRadius="full"
              fontSize="lg"
              _hover={{ bg: "gray.100" }}
            >
              Download
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box px={[4, 6, 20]} py={20} bg={bgColor}>
        <Container maxW="7xl">
          <SimpleGrid columns={[2, 2, 4]} spacing={8}>
            {[
              { icon: FaUsers, number: "100M+", label: "Active Users" },
              { icon: FaGlobeAmericas, number: "190+", label: "Countries" },
              { icon: StarIcon, number: "4.8", label: "App Rating" },
              { icon: FaAward, number: "#1", label: "Health & Fitness App" },
            ].map((stat, index) => (
              <Box
                key={index}
                textAlign="center"
                bg={cardBgColor}
                p={6}
                borderRadius="lg"
                boxShadow="md"
                transition="all 0.3s"
                _hover={{ boxShadow: "lg" }}
              >
                <Icon as={stat.icon} w={12} h={12} color="#14264E" mb={4} />
                <Text
                  fontSize={["3xl", "4xl"]}
                  fontWeight="bold"
                  color="#14264E"
                  mb={2}
                >
                  {stat.number}
                </Text>
                <Text color="gray.600">{stat.label}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box px={[4, 6, 20]} py={20}>
        <Container maxW="7xl">
          <SimpleGrid columns={[1, 1, 2]} spacing={16}>
            <Box>
              <Heading as="h2" fontSize={["3xl", "4xl"]} color="#14264E" mb={6}>
                Our Mission
              </Heading>
              <Text fontSize="lg" color="gray.600" lineHeight="tall">
                We believe that everyone deserves access to personalized
                wellness solutions. Through innovative technology and expert
                guidance, we're making health and wellness accessible, engaging,
                and effective for people worldwide.
              </Text>
            </Box>
            <Box>
              <Heading as="h2" fontSize={["3xl", "4xl"]} color="#14264E" mb={6}>
                Our Approach
              </Heading>
              <Text fontSize="lg" color="gray.600" lineHeight="tall">
                By combining cutting-edge technology with proven wellness
                practices, we create personalized experiences that adapt to each
                individual's needs, goals, and lifestyle. Our holistic approach
                considers all aspects of wellbeing - physical, mental, and
                nutritional.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box px={[4, 6, 20]} py={20} bg={bgColor}>
        <Container maxW="7xl">
          <Heading
            as="h2"
            fontSize={["3xl", "4xl"]}
            color="#14264E"
            mb={12}
            textAlign="center"
          >
            Our Values
          </Heading>
          <SimpleGrid columns={[1, 1, 3]} spacing={8}>
            {[
              {
                icon: FaBolt,
                title: "Innovation",
                description:
                  "We constantly push boundaries to create cutting-edge wellness solutions.",
              },
              {
                icon: FaHeart,
                title: "Empathy",
                description:
                  "We put our users first, understanding and addressing their unique needs.",
              },
              {
                icon: FaBrain,
                title: "Expertise",
                description:
                  "We base our approach on scientific research and collaborate with health professionals.",
              },
            ].map((value, index) => (
              <Box
                key={index}
                bg={cardBgColor}
                p={6}
                borderRadius="lg"
                boxShadow="md"
                transition="all 0.3s"
                _hover={{ boxShadow: "lg" }}
              >
                <Icon as={value.icon} w={12} h={12} color="#14264E" mb={4} />
                <Heading as="h3" fontSize="xl" color="#14264E" mb={2}>
                  {value.title}
                </Heading>
                <Text color="gray.600">{value.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box px={[4, 6, 20]} py={20}>
        <Container maxW="3xl" textAlign="center">
          <Heading as="h2" fontSize={["3xl", "4xl"]} color="#14264E" mb={6}>
            Join Our Wellness Journey
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={8}>
            Experience personalized, holistic wellness tailored just for you.
            Start your journey to a healthier, happier you today.
          </Text>
          <Button
            size="lg"
            bg="#14264E"
            color="white"
            px={8}
            py={6}
            fontSize="lg"
            borderRadius="full"
            _hover={{ bg: "#1e3a6d" }}
          >
            Get Started Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
