import {
  Card,
  Box,
  Text,
  Grid,
  VStack,
  List,
  Image,
  Flex
} from "@chakra-ui/react";
import "../App.css";
import { Blockquote } from "../components/ui/blockquote";
import Winthrop from "../assets/winthrop.png";
import CCAF from "../assets/CCAF.png";

function Education() {
  return (
    <Card.Root bgColor="#E2E8F0" shadow="xl" padding={4}>
      <Card.Body>
        <Card.Title
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bolder"
          textAlign="center"
          color="#2D3748"
          mb={10}
        >
          Education
        </Card.Title>
        <VStack align="flex-start" spacing={6} width="100%">
          <Box width="100%">
            <Grid 
              templateColumns={{ base: "1fr", md: "1fr auto 1fr" }} 
              alignItems="center" 
              gap={4}
            >
              <Box textAlign={{ base: "center", md: "left" }}>
                <Text textStyle="xl" fontWeight="bold" color="#2D3748">
                  Winthrop University
                </Text>
              </Box>
              <Flex justifyContent="center">
                <Image src={Winthrop} width={150} height="auto" />
              </Flex>
              <Box textAlign={{ base: "center", md: "right" }}>
                <Text fontWeight="normal" color="#2D3748">
                  January 2020 - May 2024
                </Text>
              </Box>
            </Grid>
            <Text textStyle="md" fontWeight="medium" color="#2D3748">
              B.S. Digital Information Design
            </Text>
            <Text textStyle="md" fontWeight="medium" color="#2D3748">
              Concentration: Web App Development
            </Text>
          </Box>

          <Box>
            <Card.Description mt={6} color="#2D3748">
              Accomplishments
            </Card.Description>
            <Blockquote color="#2D3748">
              <List.Root>
                <List.Item>Graduating GPA: 3.75 / Cum Laude</List.Item>
                <List.Item>7x Dean’s List Recipient</List.Item>
                <List.Item>
                  Member of Upsilon Pi Epsilon - National Honor Society of Computing
                </List.Item>
              </List.Root>
            </Blockquote>
          </Box>

          <Box>
            <Card.Description mt={6} color="#2D3748">
              Projects
            </Card.Description>
            <Blockquote>
              <Text mb={2} textStyle="xl" fontWeight="medium" color="#2D3748">
                Spring 2024 - Grocery Ordering Application
              </Text>
              <List.Root>
                <List.Item color="#2D3748">
                  Led the development and implementation of a responsive mobile
                  grocery ordering application using technologies such as React
                  Native, Node.js, and MongoDB, ensuring seamless user experience
                  and functionality across devices.
                </List.Item>
                <List.Item color="#2D3748">
                  Managed a team of five personnel, including two graphic designers
                  and two full stack developers, to implement advanced features in a
                  responsive mobile grocery ordering application.
                </List.Item>
                <List.Item color="#2D3748">
                  Implemented and created all front-end design principles for a
                  responsive mobile application, ensuring a cohesive and
                  user-friendly interface that enhanced user engagement and
                  satisfaction.
                </List.Item>
                <List.Item color="#2D3748">
                  Designed and developed API endpoints and managed database CRUD
                  operations for a mobile application, ensuring efficient data
                  handling and seamless integration between front-end and back-end
                  systems.
                </List.Item>
              </List.Root>

              <Text mb={2} mt={4} textStyle="xl" fontWeight="medium" color="#2D3748">
                Fall 2023 / Spring 2024 - K-12 Career Development Web Application
              </Text>
              <List.Root>
                <List.Item color="#2D3748">
                  Spearheaded the development of a comprehensive K-12 website
                  dedicated to providing career information, serving as both a
                  frontend and backend developer. Designed and implemented
                  user-friendly interfaces, integrated dynamic content delivery
                  systems, and managed database architecture to ensure optimal
                  performance and accessibility for students, educators, and parents
                  alike.
                </List.Item>
                <List.Item color="#2D3748">
                  Orchestrated and optimized team productivity by creating and
                  managing a meticulous work schedule for a team of six individuals,
                  ensuring efficient resource allocation and timely project
                  delivery.
                </List.Item>
                <List.Item color="#2D3748">
                  Acted as the primary point of contact for the client, ensuring
                  seamless communication and coordination throughout the project
                  lifecycle. Proactively assessed project needs and changes, and
                  diligently monitored schedules to guarantee timely delivery and
                  client satisfaction.
                </List.Item>
              </List.Root>
            </Blockquote>
          </Box>

          <Box width="100%" mt={10}>
            <Grid
              templateColumns={{ base: "1fr", md: "1fr auto 1fr" }}
              alignItems="center"
              gap={4}
            >
              <Box textAlign={{ base: "center", md: "left" }}>
                <Text textStyle="xl" fontWeight="bold" color="#2D3748">
                  Community College of the Air Force
                </Text>
              </Box>
              <Flex justifyContent="center">
                <Image src={CCAF} width={150} height="auto" />
              </Flex>
              <Box textAlign={{ base: "center", md: "right" }}>
                <Text fontWeight="normal" color="#2D3748">
                  January 2017 - December 2019
                </Text>
              </Box>
            </Grid>
            <Text textStyle="md" fontWeight="medium" color="#2D3748">
              A.A.S Criminal Justice
            </Text>
            <Card.Description mt={6} color="#2D3748">
              Accomplishments
            </Card.Description>
            <Blockquote color="#2D3748">
              <List.Root>
                <List.Item>
                  Graduating GPA: 4.0 while balancing academic and military responsibilities.
                </List.Item>
                <List.Item>
                  Mastered foundational subjects such as criminology, criminal law, law enforcement procedures, and ethics in criminal justice.
                </List.Item>
                <List.Item>
                  Utilized academic learning to enhance effectiveness in military law enforcement, security, or related duties.
                </List.Item>
                <List.Item>
                  Strengthened ethical decision-making skills critical to criminal justice and military service.
                </List.Item>
              </List.Root>
            </Blockquote>
          </Box>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}

export default Education;