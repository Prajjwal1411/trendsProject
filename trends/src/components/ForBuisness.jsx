import {
    Box,
    Flex,
    Stack,
    Grid,
    Text,
    Image,
    Button,
    VStack,
    HStack,
    Icon,
    Center,
  } from "@chakra-ui/react";
 
  
  export default function ForBuisness() {
    return (
      <Box>
  
        {/* Hero Section */}
        <Box py={12} px={6} bg="black">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12}>
            <VStack fontFamily={"inherit"} align="start" spacing={5} >
              <Text fontSize="8xl" fontWeight="normal" color="#b9ff38">
                Rethinking employee wellbeing
              </Text>
              <Text fontSize="1xl" color="white" mb={3}>
                Helping individuals and teams achieve their full potential through
                personalized wellness programs.
              </Text>
              <Button colorScheme="blue" size="lg">
                Get Started
              </Button>
            </VStack>
            <Image src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,f_auto,q_auto:good/v1/betterme.world/b2b/wellness/bg_haoe9o" alt="Hero Image" 
            borderRadius="15px"
            />
          </Grid>
        </Box>
  
        {/* Statistics Section */}
        <Box py={12} px={6}>
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={6}>
            Why now is the time to invest in team's health?
          </Text>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
  <Box textAlign="center" bg="#EFF1F4" borderRadius="20px">
    <Text fontSize="6xl" fontWeight="bold" m={6} textAlign={"left"}  >
      58%
    </Text>
    <Text textAlign={"left"} m={6}>
      of employees feel disengaged at work
    </Text>
    <Image
      src="https://blog.taxact.com/wp-content/uploads/6-Reasons-to-File-a-Tax-Extension-434324557_Blog.jpg"
      alt="Hero Image"
      borderRadius="0px 0px 20px 20px"
      boxSize="200px" // Uniform image size
      objectFit="cover" // Ensures the image fills the box
      width="100%" // Makes image stretch to match the box
    />
  </Box>

  <Box textAlign="center" bg="#EFF1F4" borderRadius="20px">
    <Text fontSize="6xl" fontWeight="bold" m={6} textAlign={"left"}>
      10%
    </Text>
    <Text textAlign={"left"} m={6}>
      productivity increase with wellness programs
    </Text>
    <Image
      src="https://jacoblund.com/cdn/shop/products/57f789f0bde02b7af262561606fa47e8_grande.jpg?v=1679665856"
      alt="Hero Image"
      borderRadius="0px 0px 20px 20px"
      boxSize="200px"
      objectFit="cover"
      width="100%"
    />
  </Box>

  <Box textAlign="center" bg="#EFF1F4" borderRadius="20px">
    <Text fontSize="6xl" fontWeight="bold" m={6} textAlign={"left"}>
      75%
    </Text>
    <Text textAlign={"left"} m={6}>
      improvement in work-life balance
    </Text>
    <Image
      src="https://www.shutterstock.com/image-photo/unrecognizable-customer-paying-credit-card-600nw-2111152718.jpg"
      alt="Hero Image"
      borderRadius="0px 0px 20px 20px"
      boxSize="200px"
      objectFit="cover"
      width="100%"
    />
  </Box>
</Grid>

        </Box>
  
        {/* Features Section */}
        <Box py={12} px={6} bg="black" color={"white"}>

            <Text fontSize="3xl" fontWeight="bold" mb={4} textAlign={"center"} >
                Our Features
              </Text>
              <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={12}>
  <Box borderRight="4px solid #b9ff38" p={8}>
    <Image 
      src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,f_auto,q_auto:good/v1/betterme.world/b2b/support/bgn_drqybc" 
      alt="Feature 1"
      boxSize="400px"
      objectFit="cover"
      width="100%"
      mb={4}
    />
    <Text fontSize="lg" fontWeight="bold" mb={2}>
      Quick and Effective Office Workouts
    </Text>
    <Text>Short and effective programs designed to fit your team's schedule.</Text>
  </Box>
  <Box borderRight="4px solid #b9ff38" p={8}>
    <Image 
      src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,f_auto,q_auto:good/v1/betterme.world/b2b/burnout/burnout-bg_sxuull" 
      alt="Feature 2"
      boxSize="400px"
      objectFit="cover"
      width="100%"
      mb={4}
    />
    <Text fontSize="lg" fontWeight="bold" mb={2}>
      Burnout Prevention Program
    </Text>
    <Text>Tools and practices to prevent burnout and maintain productivity.</Text>
  </Box>
  <Box p={8}>
    <Image 
      src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,f_auto,q_auto:good/v1/betterme.world/b2b/zoom/zoom_wf4w3p" 
      alt="Feature 3"
      boxSize="400px"
      objectFit="cover"
      width="100%"
      mb={4}
    />
    <Text fontSize="lg" fontWeight="bold" mb={2}>
      Team Workouts on Zoom
    </Text>
    <Text>Interactive Zoom sessions to keep your team engaged and active.</Text>
  </Box>
</Grid>

        </Box>
  
        {/* Testimonials Section */}
        <Box py={12} px={6}>
          <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb={10}>
            See who's talking about us
          </Text>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            <Box>
              <Text fontWeight="bold" fontSize="2xl" mb={2}>
                Enterpreneur
              </Text>
              <Text>"The programs have completely changed how I approach my workday!"</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" fontSize="2xl" mb={2}>
              Enterpreneur
              </Text>
              <Text>"Our team's productivity has skyrocketed since starting these programs."</Text>
            </Box>
            <Box>
              <Text fontWeight="bold" fontSize="2xl" mb={2}>
                HR Specialist 
              </Text>
              <Text>"A simple, effective solution for workplace wellness."</Text>
            </Box>
          </Grid>
        </Box>
  
        
      </Box>
    );
  }
  