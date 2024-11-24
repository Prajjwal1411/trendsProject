// Created by Gaurav Rana(8936697)

import {
  Box,
  Container,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function FAQPage() {
  const bgColor = "black"; // Full black background
  const textColor = useColorModeValue("white", "white"); // White text color
  const accentColor = "#00b5ad"; // Accent color as per your original code
  const buttonHoverBg = "#1e3a6d"; // Button hover background color

  const faqs = [
    {
      question: "What is BetterMe?",
      answer:
        "BetterMe is a personalized holistic wellness platform that provides customized fitness, nutrition, and mental health solutions. Since 2017, we've been helping people achieve their wellness goals through innovative technology and expert guidance.",
    },
    {
      question: "How does the personalization work?",
      answer:
        "When you start with BetterMe, we collect information about your goals, current fitness level, dietary preferences, and lifestyle. Our AI-powered system then creates a personalized plan that adapts to your progress and needs.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel your subscription at any time. The cancellation will take effect at the end of your current billing period. You'll continue to have access to your program until then.",
    },
    {
      question: "Is BetterMe available in my country?",
      answer:
        "BetterMe is available in over 190 countries worldwide. Our app can be downloaded from both the App Store and Google Play Store in most regions.",
    },
    {
      question: "Do I need any special equipment?",
      answer:
        "Most of our workouts can be done with minimal or no equipment. When equipment is needed, we offer alternative exercises that can be done without it.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "Our customer support team is available 24/7. You can reach us through the app's help center or by emailing support@betterme.world",
    },
  ];

  return (
    <Box minH="100vh" py={20} px={[4, 6, 20]} bg={bgColor} color={textColor}>
      <Container maxW="4xl">
        <VStack spacing={12} align="stretch">
          {/* Header Section */}
          <Box textAlign="center">
            <Heading
              as="h1"
              fontSize={["4xl", "5xl"]}
              color={accentColor}
              mb={4}
            >
              Frequently Asked Questions
            </Heading>
            <Text fontSize="lg">
              Find answers to common questions about BetterMe
            </Text>
          </Box>

          {/* FAQ Accordion */}
          <Accordion allowMultiple>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                border="none"
                mb={4}
                bg="gray.800"
                borderRadius="lg"
                boxShadow="sm"
                _hover={{ boxShadow: "md" }}
              >
                <AccordionButton
                  p={6}
                  _hover={{ bg: "gray.700" }}
                  borderRadius="lg"
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="medium"
                    fontSize="lg"
                  >
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={6} px={6} color="gray.300">
                  {faq.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact Support Section */}
          <Box textAlign="center" mt={8} p={8} bg="gray.800" borderRadius="lg">
            <Text fontSize="lg" mb={4}>
              Still have questions? We're here to help!
            </Text>
            <Button
              size="lg"
              bg={accentColor}
              color="white"
              px={8}
              borderRadius="full"
              _hover={{ bg: buttonHoverBg }}
            >
              Contact Support
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
