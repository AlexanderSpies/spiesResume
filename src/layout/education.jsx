import { Card, Box, Text, Grid, VStack, List } from "@chakra-ui/react";
import "../App.css";
import { Blockquote } from "../components/ui/blockquote";

function Education() {
  return (
    <Card.Root>
      <Card.Body>
        <Card.Title fontSize="2xl" fontWeight="bolder" textAlign="center">
          Education
        </Card.Title>
        <VStack align="flex-start" spacing={2} width="100%">
          <Grid templateColumns="1fr auto" alignItems="center" width="100%">
            <Box>
              <Text textStyle="xl" fontWeight="medium">
                Winthrop University
              </Text>
            </Box>
            <Box textAlign="right">
              <Text fontWeight="normal">January 2020 - May 2024</Text>
            </Box>
          </Grid>
          <Text textStyle="md" fontWeight="medium">
            B.S. Digital Information Design
          </Text>
          <Text textStyle="md" fontWeight="medium">
            Concentration: Web App Development
          </Text>
        </VStack>
        <Card.Description mt={6}> Accomplishments</Card.Description>
        <Blockquote style={{ textAlign: "left", marginTop: "1rem" }}>
          Graduating GPA: 3.75 / Cum Laude
          <br />
          7x Dean’s List Recipient
          <br />
          Member of Upsilon Pi Epsilon - National Honor Society of Computing
        </Blockquote>
        <Card.Description mt={6}> Projects</Card.Description>
        <Blockquote>
          <Text mb={2} textStyle="xl" fontWeight="medium">Spring 2024 - Grocery Odering Application</Text>
          <List.Root>
            <List.Item>
              Led the development and implementation of a responsive mobile
              grocery ordering application using technologies such as React
              Native, Node.js, and MongoDB, ensuring seamless user experience
              and functionality across devices.
            </List.Item>
            <List.Item>
              Managed a team of five personnel, including two graphic designers
              and two full stack developers, to implement advanced features in a
              responsive mobile grocery ordering application.
            </List.Item>
            <List.Item>
              Implemented and created all front-end design principles for a
              responsive mobile application, ensuring a cohesive and
              user-friendly interface that enhanced user engagement and
              satisfaction.
            </List.Item>
            <List.Item>
              Designed and developed API endpoints and managed database CRUD
              operations for a mobile application, ensuring efficient data
              handling and seamless integration between front-end and back-end
              systems.
            </List.Item>
          </List.Root>
          <Text mb={2} mt={4} textStyle="xl" fontWeight="medium">
            Fall 2023 / Spring 2024 - K-12 Career Development Web Application
          </Text>
          <List.Root>
            <List.Item>
              Spearheaded the development of a comprehensive K-12 website
              dedicated to providing career information, serving as both a
              frontend and backend developer. Designed and implemented
              user-friendly interfaces, integrated dynamic content delivery
              systems, and managed database architecture to ensure optimal
              performance and accessibility for students, educators, and parents
              alike.
            </List.Item>
            <List.Item>
              Orchestrated and optimized team productivity by creating and
              managing a meticulous work schedule for a team of six individuals,
              ensuring efficient resource allocation and timely project
              delivery.
            </List.Item>
            <List.Item>
              Acted as the primary point of contact for the client, ensuring
              seamless communication and coordination throughout the project
              lifecycle. Proactively assessed project needs and changes, and
              diligently monitored schedules to guarantee timely delivery and
              client satisfaction.
            </List.Item>
          </List.Root>
        </Blockquote>
      </Card.Body>
    </Card.Root>
  );
}
export default Education;
