import { Box, Card, List, Text, HStack, VStack, Link } from "@chakra-ui/react";
import "../App.css";
import { Blockquote } from "../components/ui/blockquote";
import { Avatar } from "../components/ui/avatar";
import profilePic from "../assets/AlexProfilePic.png";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaJira } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { SiChakraui } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

function Profile() {
  return (
    <Card.Root p={4} bgColor="#E2E8F0" shadow="xl">
      <Box m="auto">
        <Avatar
          name="Alex Spies"
          src={profilePic}
          shape="rounded"
          boxSize="120px"
          shadow="md"
        />
      </Box>
      <Card.Body>
        <VStack>
          <Box mb={5}>
          <Card.Title fontSize="2xl" color="#2D3748">
            Alexander David Spies
          </Card.Title>
          <Card.Description fontWeight="bold"color="#2D3748" textAlign='center'>Full Stack Developer</Card.Description>
          </Box>
          <List.Root>
          <Box mb={6} >
            <Card.Description
              textStyle="xl"
              fontWeight="medium"
              color="#2D3748"
            >
              Contact Information
            </Card.Description>
            <Blockquote>
            <List.Indicator>
              <HStack>
                <IoPhonePortraitOutline color="#2D3748" />
                <Text color="#2D3748">507-429-0615 </Text>
              </HStack>
            </List.Indicator>
            <List.Indicator>
              <HStack>
                <MdEmail color="#2D3748" />
                <Text color="#2D3748">spies.alexander1@gmail.com</Text>
              </HStack>
            </List.Indicator>
            <List.Indicator>
              <HStack>
                <Link href="linkedin.com/in/alexander-spies-3b5615194">
                  <FaLinkedin color="#3182CE" />
                  LinkedIn Profile
                </Link>
              </HStack>
            </List.Indicator>
            <List.Indicator>
              <HStack>
                <Link href="https://github.com/AlexanderSpies">
                  <FaGithub color="#2D3748" />
                  GitHub Profile
                </Link>
              </HStack>
            </List.Indicator>
            </Blockquote>
            </Box>
            <Box mb={6}>
            <Card.Description
              textStyle="xl"
              fontWeight="medium"
              color="#2D3748"
            >
              About me
            </Card.Description>
            <Blockquote color="#2D3748">
            A seasoned professional with 10+ years in the USAF and a passion for technology, I blend leadership, technical expertise, and customer-focused problem-solving. As a Front-End Engineer, Full Stack Developer, and Customer Success Manager, I’ve honed my skills in delivering scalable, user-centered solutions, combining military discipline with innovative development practices to excel in dynamic environments.
            </Blockquote>
            </Box>
            <Box mb={4}>
            <Card.Description
              textStyle="xl"
              fontWeight="medium"

              color="#2D3748"
            >
              Skills
            </Card.Description>
            <Blockquote color="#2D3748">
              <List.Root>
                <List.Item>Collaborative Leadership</List.Item>
                <List.Item>Strategic Decision-Making</List.Item>
                <List.Item>Functional Communication</List.Item>
                <List.Item>Problem-Solving Under Pressure</List.Item>
                <List.Item>Agile Development Facilitation</List.Item>
                <List.Item>Attention to Detail</List.Item>
                <List.Item>Stakeholder Alignment</List.Item>
                <List.Item>Adaptability and Resilience</List.Item>
                <List.Item>Time Management</List.Item>
                <List.Item>Critical Thinking</List.Item>
                <List.Item>Team Building and Mentorship</List.Item>
                <List.Item>Process Optimization</List.Item>
              </List.Root>
            </Blockquote>
            </Box>
            <Box mb={6}>
            <Card.Description
              textStyle="xl"
              fontWeight="medium"
              color="#2D3748"
            >
              Platforms and Languages
            </Card.Description>
            <Blockquote color="#2D3748">
              <Box display="flex" alignItems="center" mb={2}>
                <FaAws size="22px" color="#FF9900" />
                <Text marginLeft={4}>AWS</Text>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <FaJira color="#6554C0" size="22px" />
                <Text marginLeft={4}>Jira</Text>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <FaGitlab color="#E24329" size="22px" />
                <Text marginLeft={4}>GitLab</Text>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <FaGithub color="#000000" size="22px" />
                <Text marginLeft={4}>GitHub</Text>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <FaGitAlt color="#f34f29" size="22px" />
                <Text marginLeft={4}>Git</Text>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <DiMysql color="#00768F" size="22px" />
                <Text marginLeft={4}>MySQL</Text>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <BiLogoPostgresql color="#62B1F6" size="22px" />
                <Text marginLeft={4}>PostgreSQL</Text>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <SiMongodb color="#589638" size="22px" />
                <Text marginLeft={4}>MongoDB</Text>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <FaReact color="#0081a3" size="22px" />
                <Text marginLeft={4}>React</Text>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <IoLogoJavascript color="#f0db4f" size="22px" />
                <Text marginLeft={4}>JavaScript</Text>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <FaHtml5 color="#e34c26" size="22px" />
                <Text marginLeft={4}>HTML5</Text>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <FaCss3Alt color="#264de4" size="22px" />
                <Text marginLeft={4}>CSS3</Text>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <SiChakraui color="#4DB6AC" size="22px" />
                <Text marginLeft={4}>Chakra UI</Text>
              </Box>
              <Box display="flex" alignItems="center">
                <SiDaisyui color="#FF9903" size="22px" />
                <Text marginLeft={4}>Daisy UI</Text>
              </Box>
            </Blockquote>
            </Box>
          </List.Root>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}
export default Profile;
