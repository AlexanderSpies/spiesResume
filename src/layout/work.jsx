import { Card, List, Text, HStack, Image } from "@chakra-ui/react";
import "../App.css";
import { Blockquote } from "../components/ui/blockquote";
import Ally from "../assets/Ally.png";
import NewForge from "../assets/NewForge.png";
import USAF from "../assets/USAF.png";

function WorkExp() {
  return (
    <Card.Root p={4}>
      <Card.Title
        fontSize="3xl"
        fontWeight="bolder"
        mb="6.1rem"
        textAlign="center"
      >
        Work Experience
      </Card.Title>
      <List.Root>
        <Image src={Ally} width={100} h="auto" />
        <HStack display="flex" justifyContent="space-between">
          <List.Item textStyle="xl" fontWeight="medium">
            Front End Engineer - Ally Financial
          </List.Item>
          <Text>July 2024 - Current</Text>
        </HStack>
      </List.Root>
      <Blockquote mb={12}>
        Developed a multi-page React application with reusable components for
        frontend consistency and scalability, integrating RESTful APIs to
        enhance responsiveness and user experience.
        <br />
        <br />
        Engineered and optimized prompts for an LLM, refining structures and
        thoroughly testing responses to ensure accuracy and usability.
        <br />
        <br />
        Received Technology Achievement Award for reducing audit processing time
        by 25% through workflow automation, significantly boosting productivity
        and operational efficiency.
        <br />
        <br />
        Deployed and managed applications on AWS, using CloudWatch for
        monitoring and proactively maintaining uptime, ensuring reliable
        performance during peak usage.
      </Blockquote>
      <List.Root>
        <Image src={NewForge} width={100} h="auto" />
        <HStack display="flex" justifyContent="space-between">
          <List.Item textStyle="xl" fontWeight="medium">
            Full Stack Developer - New Forge LLC
          </List.Item>
          <Text>May 2022 - July 2024</Text>
        </HStack>
      </List.Root>
      <Blockquote mb={12}>
        Collaborated with cross-functional teams, including sales, marketing,
        and product, to align web development efforts with broader
        customer-focused strategies, ensuring cohesive execution and a seamless
        user experience across all digital channels.
        <br />
        <br />
        Built and optimized responsive web applications utilizing React,
        Node.js, and MongoDB, achieving 30% faster load times and a 15% boost in
        cross-platform user engagement by enhancing performance and
        responsiveness.
        <br />
        <br />
        Developed an in-app video calling feature within a Chrome extension
        using TypeScript and created a companion Android APK, significantly
        enhancing real-time user interaction and accessibility across multiple
        platforms.
        <br />
        <br />
        Led Agile development cycles, reducing project timelines by 25% and
        doubling deployment frequency. Integrated an AI-driven chat assistant
        using React, increasing user satisfaction by 25% through enhanced,
        on-demand support and engagement.
      </Blockquote>
      <List.Root>
        <Image src={USAF} width={100} h="auto" />
        <HStack display="flex" justifyContent="space-between">
          <List.Item textStyle="xl" fontWeight="medium">
            Security Forces Leader - United States Air Force Reserve
          </List.Item>
          <Text>February 2013 - Current</Text>
        </HStack>
      </List.Root>
      <Blockquote mb={12}>
        Directed the Standardization and Evaluation program for a team of 132
        personnel, achieving 100% inspection compliance by implementing
        streamlined processes and creating innovative Excel-based tracking
        tools. These initiatives improved accountability and deployment
        efficiency by 20%, setting a high standard for operational
        effectiveness.
        <br />
        <br />
        Established and led the S5/Plans & Programs functional area from the
        ground up, optimizing unit participation tracking and developing
        detailed reporting systems that informed strategic decision-making.
        Recognized by command leadership for exceptional attention to detail and
        impactful contributions to mission success, directly supporting
        operational readiness.
        <br />
        <br />
        Spearheaded the integration of a digital reporting system that enhanced
        incident response efficiency by 30%. Managed the deployment of advanced
        security equipment to safeguard $4.3 billion in U.S. nuclear assets,
        ensuring protection against potential threats and elevating overall
        security posture.
        <br />
        <br />
        Provided rapid, armed response to over 50 security incidents,
        maintaining the safety of personnel and assets under high-stakes
        conditions. Received the 'Superior Performer' award during a Nuclear
        Surety Inspection, demonstrating excellence in security protocols,
        operational readiness, and leadership under pressure.
      </Blockquote>
    </Card.Root>
  );
}
export default WorkExp;
