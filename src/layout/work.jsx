import { Card, List, Text, HStack, Image } from "@chakra-ui/react";
import "../App.css";
import { Blockquote } from "../components/ui/blockquote";
import Ally from "../assets/Ally.png";
import NewForge from "../assets/NewForge.png";
import USAF from "../assets/USAF.png";

function WorkExp() {
  return (
    <Card.Root p={4} bgColor="#E2E8F0" shadow="xl">
      <Card.Title
        fontSize="3xl"
        fontWeight="bolder"
        mb={8}
        textAlign="center"
        color="#2D3748"
      >
        Work Experience
      </Card.Title>
      <List.Root>
        <Image src={Ally} width={100} h="auto" />
        <HStack display="flex" justifyContent="space-between">
          <List.Item textStyle="xl" fontWeight="medium" color="#2D3748">
            Front End Engineer - Ally Financial
          </List.Item>
          <Text color="#2D3748">July 2024 - Current</Text>
        </HStack>
      </List.Root>
      <Blockquote mb={8} color="#2D3748">
        <List.Root>
          <List.Item>
            Developed a multi-page React application with reusable components
            for frontend consistency and scalability, integrating RESTful APIs
            to enhance responsiveness and user experience.
          </List.Item>
          <List.Item>
            Engineered and optimized prompts for an LLM, refining structures and
            thoroughly testing responses to ensure accuracy and usability.
          </List.Item>
          <List.Item>
            Received Technology Achievement Award for reducing audit processing
            time by 25% through workflow automation, significantly boosting
            productivity and operational efficiency.
          </List.Item>
          <List.Item>
            Deployed and managed applications on AWS, using CloudWatch for
            monitoring and proactively maintaining uptime, ensuring reliable
            performance during peak usage.
          </List.Item>
          <List.Item>
            Designed and deployed API proxies on Apigee Edge, implementing
            robust security features like OAuth 2.0 and API key validation while
            ensuring seamless integration with backend services to enhance
            scalability and maintainability.
          </List.Item>
          <List.Item>
            Designed and implemented PostgreSQL database schemas and tables to
            efficiently store and manage large volumes of data, ensuring data
            integrity and supporting seamless scalability for high-demand
            applications.
          </List.Item>
        </List.Root>
      </Blockquote>
      <List.Root>
        <Image src={NewForge} width={100} h="auto" />
        <HStack display="flex" justifyContent="space-between">
          <List.Item textStyle="xl" fontWeight="medium" color="#2D3748">
            Full Stack Developer - New Forge LLC
          </List.Item>
          <Text color="#2D3748">May 2022 - July 2024</Text>
        </HStack>
      </List.Root>
      <Blockquote mb={8} color="#2D3748">
        <List.Root>
          <List.Item>
            Collaborated with cross-functional teams, including sales,
            marketing, and product management, to align web development efforts
            with broader customer-focused strategies, ensuring cohesive
            execution and a seamless user experience across all digital
            channels.
          </List.Item>
          <List.Item>
            Built and optimized responsive web applications utilizing React,
            Node.js, and MongoDB, increasing cross-platform user engagement by
            enhancing performance and responsiveness.
          </List.Item>
          <List.Item>
            Developed an in-app video calling feature within a Chrome extension
            using TypeScript and created a companion Android APK, significantly
            enhancing real-time user interaction and accessibility across
            multiple platforms.
          </List.Item>
          <List.Item>
            Led Agile development cycles, reducing project timelines by 25% and
            doubling deployment frequency.
          </List.Item>
          <List.Item>
            Integrated an AI-driven chat assistant using React, increasing user
            satisfaction by 25% through enhanced, on-demand support and
            engagement.
          </List.Item>
          <List.Item>
            Developed and implemented custom dashboards with dynamic data
            visualization using Chart.js, enabling stakeholders to gain
            actionable insights and make data-driven decisions in real time.
          </List.Item>
          <List.Item>
            Designed and developed a user-friendly interface for an LLM-powered
            chatbot, incorporating features like conversation threading, context
            retention, and adaptive response rendering to enhance usability and
            interactivity.
          </List.Item>
        </List.Root>
      </Blockquote>
      <List.Root>
        <Image src={USAF} width={100} h="auto" />
        <HStack display="flex" justifyContent="space-between">
          <List.Item textStyle="xl" fontWeight="medium" color="#2D3748">
            Security Forces Leader - United States Air Force Reserve
          </List.Item>
          <Text color="#2D3748">February 2013 - Current</Text>
        </HStack>
      </List.Root>
      <Blockquote mb={8} color="#2D3748">
        <List.Root>
          <List.Item>
            Directed the Standardization and Evaluation program for a team of
            132 personnel, achieving 100% inspection compliance by implementing
            streamlined processes and creating innovative Excel-based tracking
            tools. These initiatives improved accountability and deployment
            efficiency by 20%, setting a high standard for operational
            effectiveness.
          </List.Item>
          <List.Item>
            Established and led the S5/Plans & Programs functional area from the
            ground up, optimizing unit participation tracking and developing
            detailed reporting systems that informed strategic decision-making.
            Recognized by command leadership for exceptional attention to detail
            and impactful contributions to mission success, directly supporting
            operational readiness.
          </List.Item>
          <List.Item>
            Spearheaded the integration of a digital reporting system that
            enhanced incident response efficiency by 30%. Managed the deployment
            of advanced security equipment to safeguard $4.3 billion in U.S.
            nuclear assets, ensuring protection against potential threats and
            elevating overall security posture.
          </List.Item>
          <List.Item>
            Provided rapid, armed response to over 50 security incidents,
            maintaining the safety of personnel and assets under high-stakes
            conditions. Received the 'Superior Performer' award during a Nuclear
            Surety Inspection, demonstrating excellence in security protocols,
            operational readiness, and leadership under pressure.
          </List.Item>
        </List.Root>
      </Blockquote>
    </Card.Root>
  );
}
export default WorkExp;
