import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Text } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from 'react-icons/fa';
interface WorkCardProps {
  title: string,
   description: string,
    githubLink: any,
     workingLink: any,
}
const WorkCard:React.FC<WorkCardProps> = ({ title, description, githubLink, workingLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card css={{ width: '100%', maxWidth: '400px', h: '200px', position: 'relative', overflow: 'hidden' }}>
        <Card.Body>
          <motion.div
            initial={{ opacity: 1, height: '100%' }}
            animate={{ opacity: isHovered ? 0 : 1, height: isHovered ? '0%' : '100%' }}
            transition={{ duration: 0.2 }}
          >
            <Flex direction={'column'}>
              <Text h5>{title}</Text>
              <Text span>{description}</Text>
            </Flex>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text h4>{title}</Text>
            {workingLink && (
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <FiArrowUpRight
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    fontSize: '24px',
                    cursor: 'pointer',
                  }}
                  onClick={() => window.open(workingLink, '_blank')}
                />
              </motion.div>
            )}
            {githubLink && (
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <FaGithub
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    fontSize: '24px',
                    cursor: 'pointer',
                  }}
                  onClick={() => window.open(githubLink, '_blank')}
                />
              </motion.div>
            )}
          </motion.div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export const Features3 = () => {
  const works = [
    {
      title: "Word Clash",
      description: "Word Clash is a fun, multiplayer based word guessing game in which within a party you have to guess the word containing the letters provided by the game.",
      githubLink: "https://github.com/example/wordclash",
      workingLink: "https://wordclash.example.com"
    },
    {
      title: "LinkUp",
      description: "LinkUp is a relationship based social media, ensuring a fun and interactive media portal for a couple friends. It features RTC for voice and video with media storage.",
      githubLink: "https://github.com/example/linkup",
      // No working link for this project
    },
    {
      title: "Hundred Studio's CMS",
      description: "Hundred Studio CMS is a content management system which provides real time updates to the project that is being worked on Hundered Studios.",
      // No GitHub link for this project
      workingLink: "https://cms.hundredstudios.com"
    },
    {
      title: "Hundred Studio's Blog",
      description: "This is a interactive blog written by Hundred Studios team being published on a regular basis. This featues infotainment blogs.",
      githubLink: "https://github.com/hundredstudios/blog",
      workingLink: "https://blog.hundredstudios.com"
    }
  ];

  return (
    <Box css={{ px: '$6', pb: '$14' }}>
      <Flex
        direction={'column'}
        justify={'center'}
        align={'center'}
        css={{ pt: '$20' }}
        id='works'
      >
        <Text span css={{ color: '$blue600' }}>
          Checkout some of our works
        </Text>
        <Text h3>Our Works</Text>
        <Text
          span
          css={{
            maxWidth: '800px',
            color: '$accents8',
            textAlign: 'center',
          }}
        >
          At Hundred Studios, we create tailored digital solutions, including websites, apps, games, and custom software, while exploring new technologies to stay ahead.
        </Text>
      </Flex>
      <Flex
        wrap={'wrap'}
        justify={'center'}
        css={{
          gap: '2rem',
          pt: '$14',
          '& > div': {
            flex: '1 1 400px',
            maxWidth: '400px',
            '@media (max-width: 900px)': {
              flex: '1 1 100%',
            },
          },
        }}
      >
        {works.map((work, index) => (
          <WorkCard 
            key={index} 
            title={work.title} 
            description={work.description}
            githubLink={work.githubLink}
            workingLink={work.workingLink}
          />
        ))}
      </Flex>
    </Box>
  );
};