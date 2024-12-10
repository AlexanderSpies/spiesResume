import { Box, Card, List, Text, HStack, VStack } from "@chakra-ui/react";
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

function Profile() {
  return (
    <Card.Root p={4}>
      <Box m="auto">
        <Avatar
          name="Alex Spies"
          src={profilePic}
          shape="rounded"
          boxSize="120px"
        />
      </Box>
      <Card.Body>
        <VStack>
          <Card.Title fontSize="2xl">Alexander David Spies</Card.Title>
          <List.Root>
            <Card.Description textStyle="xl" fontWeight="medium" mb={2}>
              Contact Information
            </Card.Description>

            <List.Indicator>
              <HStack>
                <IoPhonePortraitOutline />
                <Text>507 - 429 - 0615 </Text>
              </HStack>
            </List.Indicator>
            <List.Indicator>
              <HStack>
                <MdEmail />
                <Text>spies.alexander1@gmail.com</Text>
              </HStack>
            </List.Indicator>
            <Card.Description textStyle="xl" fontWeight="medium" mb={2}>
              About me
            </Card.Description>
            <Blockquote>
              With 10+ years in the USAF, recent experience as a Front-End
              Engineer at Ally Financial, and a solid foundation from a
              four-year web development program, I bring a unique mix of
              leadership, technical expertise, and problem-solving skills. My
              military background instilled discipline and resilience, while my
              role at Ally Financial honed my skills in building scalable,
              user-centered applications. Experienced in delivering high quality
              solutions under pressure, I am well-prepared to excel in dynamic
              web development environments.
            </Blockquote>
            <Card.Description textStyle="xl" fontWeight="medium" mb={2}>
              Skills
            </Card.Description>
            <Blockquote>
              Leadership & Strategic Planning
              <br />
              <br />
              Problem-Solving & Adaptability
              <br />
              <br />
              Effective Communication & Collaboration
              <br />
              <br />
              Project Management & Time Management
              <br />
              <br />
              Client Relationship Management User-Centered Design & Creative
              Thinking
            </Blockquote>
            <Card.Description textStyle="xl" fontWeight="medium" mb={2}>
              Platforms and Skills
            </Card.Description>
            <Blockquote mb={4}>
              <div
                style={{ display: "flex", alignItems: "center", padding: 4 }}
              >
                <FaAws size="30px" style={{ marginRight: 8 }} />
                <span>AWS</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", padding: 4 }}
              >
                <FaJira size="30px" style={{ marginRight: 8 }} />
                <span>Jira</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", padding: 4 }}
              >
                <FaGitlab size="30px" style={{ marginRight: 8 }} />
                <span>GitLab</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", padding: 4 }}
              >
                <FaGithub size="30px" style={{ marginRight: 8 }} />
                <span>GitHub</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", padding: 4 }}
              >
                <DiMysql size="30px" style={{ marginRight: 8 }} />
                <span>MySQL</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", padding: 4 }}
              >
                <BiLogoPostgresql size="30px" style={{ marginRight: 8 }} />
                <span>PostgreSQL</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", padding: 4 }}
              >
                <SiMongodb size="30px" style={{ marginRight: 8 }} />
                <span>MongoDB</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", padding: 4 }}
              >
                <FaGitAlt size="30px" style={{ marginRight: 8 }} />
                <span>Git</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", padding: 4 }}
              >
                <FaReact size="30px" style={{ marginRight: 8 }} />
                <span>React</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", padding: 4 }}
              >
                <IoLogoJavascript size="30px" style={{ marginRight: 8 }} />
                <span>JavaScript</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", padding: 4 }}
              >
                <FaHtml5 size="30px" style={{ marginRight: 8 }} />
                <span>HTML5</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", padding: 4 }}
              >
                <FaCss3Alt size="30px" style={{ marginRight: 8 }} />
                <span>CSS3</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", padding: 4 }}
              >
                <SiChakraui size="30px" style={{ marginRight: 8 }} />
                <span>Chakra UI</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", padding: 4 }}
              >
                <SiDaisyui size="30px" style={{ marginRight: 8 }} />
                <span>Daisy UI</span>
              </div>
            </Blockquote>
          </List.Root>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}
export default Profile;
