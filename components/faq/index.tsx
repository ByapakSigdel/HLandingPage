import React, { useState } from 'react';
import { Text, Divider } from '@nextui-org/react';
import { ChevronDown } from 'lucide-react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

const FAQItem = ({ question, answer, isInitiallyOpen }) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  return (
    <Box
      css={{
        borderBottom: '1px solid $accents2',
        py: '$4',
        '&:last-child': { borderBottom: 'none' },
      }}
    >
      <Flex
        justify="between"
        align="center"
        css={{ cursor: 'pointer' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text h3 css={{ m: 0, color: isOpen ? '$blue600' : 'inherit' }}>
          {question}
        </Text>
        <ChevronDown
          size={24}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </Flex>
      <Box
        css={{
          maxHeight: isOpen ? '1000px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease, opacity 0.3s ease',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <Text
          span
          css={{
            color: '$accents8',
            display: 'block',
            pt: '$4',
          }}
        >
          {answer}
        </Text>
      </Box>
    </Box>
  );
};

export const Faq = () => {
  const faqData = [
    {
      question: 'What services does Hundred Studios offer?',
      answer: 'Hundred Studios specializes in web development, game development, and various software solutions tailored to meet the unique needs of our clients. We focus on creating innovative digital experiences that drive engagement and growth.',
    },
    {
      question: 'Where is Hundred Studios located?',
      answer: 'Hundred Studios is proudly based in Nepal, a country known for its rich culture and talented workforce. Being located in Nepal allows us to tap into a diverse pool of skilled professionals while also fostering local entrepreneurship. Our geographical location enables us to serve clients not only within Nepal but also internationally, as we leverage modern communication tools to collaborate effectively across borders. We take pride in our roots and aim to contribute positively to the local tech ecosystem.',
    },
    {
      question: 'Do you provide support after project completion?',
      answer: 'Yes, we believe that our responsibility to our clients extends beyond the initial project delivery. At Hundred Studios, we offer comprehensive support and maintenance services to ensure that your project continues to run smoothly after launch. Our team is available to address any issues that may arise, implement updates, and make necessary adjustments based on user feedback. We are committed to fostering long-term relationships with our clients, providing peace of mind that you have a reliable partner to support you as your business evolves.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'The timeline for project completion can vary significantly based on the complexity and scope of the work involved. During our initial consultation, we conduct a thorough assessment of your project requirements, allowing us to provide a detailed timeline tailored to your needs. We follow an agile methodology, which means that we prioritize flexibility and adaptability throughout the development process. Regular communication is key; we will keep you updated on our progress and any adjustments that may be necessary along the way. Our goal is to deliver high-quality results efficiently without compromising on quality.',
    },
  ];

  return (
    <>
      <Flex
        css={{
          py: '$20',
          gap: '$18',
          px: '$6',
        }}
        direction={'column'}
      >
        <Flex align={'center'} direction={'column'}>
          <Text span css={{ color: '$blue600' }}>
            FAQ
          </Text>
          <Text h2>You Have Questions?</Text>
          <Text
            span
            css={{
              maxWidth: '700px',
              color: '$accents8',
              textAlign: 'center',
            }}
          >
            These are the most frequently asked questions. If you have any more questions you can{' '}
            <Text span css={{ color: '$blue600', cursor: 'pointer' }}>
              Contact Us
            </Text>
            .
          </Text>
        </Flex>

        <Flex
          css={{
            gap: '$10',
            '@lg': {
              px: '$64',
            },
          }}
          direction={'column'}
        >
          {faqData.map((item, index) => (
            <FAQItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
              isInitiallyOpen={index === 0}
            />
          ))}
        </Flex>
      </Flex>

      <Divider css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }} />
    </>
  );
};