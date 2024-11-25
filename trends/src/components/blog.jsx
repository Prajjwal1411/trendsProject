/*Created by Aksha Parvadiya (8907588)*/ 

import React from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Image,
  Button,
  Input,
  Select,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";

import image1 from "../media/1.jpg";
import image2 from "../media/2.jpg";
import image3 from "../media/3.jpg";
import image4 from "../media/4.jpg";
import image5 from "../media/5.jpg";
import image6 from "../media/6.jpg";
import image7 from "../media/7.jpg";
import image10 from "../media/10.jpg";

const Articles = () => {
  const articles = [
    {
      image: image1,
      title: "10 Tips for a Healthy Lifestyle",
      description:
        "Discover simple ways to improve your health and well-being with these 10 easy tips.",
      link: "/articles/healthy-lifestyle-tips",
      category: "Health",
    },
    {
      image: image2,
      title: "The Benefits of Intermittent Fasting",
      description:
        "Learn how intermittent fasting can improve your overall health and help with weight management.",
      link: "/articles/intermittent-fasting-benefits",
      category: "Nutrition",
    },
    {
      image: image3,
      title: "How to Start a Home Fitness Journey",
      description:
        "Kickstart your fitness journey with these beginner-friendly tips for working out at home.",
      link: "/articles/home-fitness-journey",
      category: "Fitness",
    },
    {
      image: image4,
      title: "Top 5 Superfoods You Should Include in Your Diet",
      description:
        "Boost your energy and immunity with these must-have superfoods.",
      link: "/articles/top-5-superfoods",
      category: "Nutrition",
    },
    {
      image: image5,
      title: "Effective Workouts for Beginners",
      description:
        "Start your fitness journey with these simple and effective workouts.",
      link: "/articles/beginner-workouts",
      category: "Fitness",
    },
    {
      image: image6,
      title: "5 Mindfulness Practices for Better Mental Health",
      description:
        "Improve your mental health and reduce stress with these mindfulness techniques.",
      link: "/articles/mindfulness-practices",
      category: "Health",
    },
    {
      image: image7,
      title: "How to Stay Motivated on Your Fitness Journey",
      description:
        "Discover strategies to keep yourself motivated and achieve your fitness goals.",
      link: "/articles/fitness-motivation",
      category: "Fitness",
    },
  ];

  return (
    <Box bg="black" color="white" p={6} minH="100vh">
      {/* Featured Article */}
      <Flex
        direction={["column", "row"]}
        bg="gray.900"
        p={8}
        borderRadius="lg"
        boxShadow="md"
        mb={10}
        align="center"
      >
        <Image
          src={image10}
          alt="Featured Article"
          borderRadius="lg"
          maxW={["100%", "40%"]}
          mr={[0, 6]}
          mb={[6, 0]}
        />
        <Box>
          <Heading size="lg" color="white" mb={4}>
            Featured Article
          </Heading>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Why Mental Health Matters in Today's World
          </Text>
          <Text fontSize="md" color="gray.300" mb={4}>
            Mental health is an essential part of overall well-being. Learn why
            it’s crucial to prioritize your mental health in today’s world.
          </Text>
          <Button
            as="a"
            href="/articles/mental-health"
            bg="#b9ff38"
            color="black"
            size="lg"
            _hover={{ bg: "#99cc2e" }}
          >
            Read More
          </Button>
        </Box>
      </Flex>

      {/* Search and Filter */}
      <Flex
        direction={["column", "row"]}
        justify="space-between"
        align="center"
        mb={6}
      >
        <Input
          placeholder="Search articles..."
          size="lg"
          bg="gray.900"
          color="white"
          _placeholder={{ color: "gray.400" }}
          maxW="70%"
          mb={[4, 0]}
        />
        <Select
          placeholder="All Categories"
          size="lg"
          bg="white.700"
          color="black"
          maxW="30%"
          ml="10px"
          _hover={{ borderColor: "black.900" }}
        >
          <option value="health">Health</option>
          <option value="nutrition">Nutrition</option>
          <option value="fitness">Fitness</option>
        </Select>
      </Flex>

      {/* Articles Grid */}
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {articles.map((article, index) => (
          <Box
            key={index}
            bg="gray.900"
            borderRadius="lg"
            boxShadow="sm"
            p={4}
            transition="transform 0.2s ease-in-out"
            _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          >
            <Image
              src={article.image}
              alt={article.title}
              borderRadius="md"
              mb={4}
            />
            <Heading size="md" mb={2} color="white">
              {article.title}
            </Heading>
            <Text fontSize="17px" color="gray.300" mb={4}>
              {article.description}
            </Text>
            <Link href={article.link}>
              <Button
                bg="#b9ff38"
                color="black"
                size="sm"
                _hover={{ bg: "#99cc2e" }}
              >
                Read More
              </Button>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Articles;
