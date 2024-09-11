/* eslint-disable @next/next/no-img-element */
import { Divider, Text } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { useTheme as useNextTheme } from 'next-themes';

export const Footer = () => {
   const { theme } = useNextTheme(); // Get the current theme from next-themes

   // Dummy logo names based on theme
   const logoSrc = theme === 'dark' ? '/part logo w.png' : '/part logo b.png';

   return (
      <Flex
         css={{
            py: '$20',
            px: '$6',
         }}
      >
         <Box as={'footer'} css={{ width: '100%' }}>
            <Flex
               justify={'center'}
               wrap={'wrap'}
               align={'center'}
               css={{
                  gap: '$10',
                  '&  ul': {
                     margin: 0,
                  },
               }}
            >
               <Flex
                  css={{ gap: '$5', w: '250px' }}
                  direction={'column'}
                  align={'center'}
               >
                  <img src={logoSrc} alt="Hundred Studios Logo" style={{ width: '60px', height: '60px' }} />
                 {/*  <Box as={'ul'} css={{ gap: '$5', listStyle: 'none' }}>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Home
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Work
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Blog
                        </Text>
                     </Box>
                     
                  </Box> */}
               </Flex>
               <Flex
                  css={{ gap: '$5', w: '250px' }}
                  direction={'column'}
                  align={'center'}
               >
                  <Text h5>Resources</Text>
                  <Box as={'ul'} css={{ gap: '$5', listStyle: 'none' }}>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Blog
                        </Text>
                     </Box>
                     {/* <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Case Studies
                        </Text>
                     </Box> */}
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           FAQ
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Testimonials
                        </Text>
                     </Box>
                  </Box>
               </Flex>
               <Flex
                  css={{ gap: '$5', w: '250px' }}
                  direction={'column'}
                  align={'center'}
               >
                  <Text h5>Contact</Text>
                  <Box as={'ul'} css={{ gap: '$5', listStyle: 'none' }}>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           h100studios@gmail.com
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           +977 1 555 1234
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Kathmandu, Nepal
                        </Text>
                     </Box>
                     {/* <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Follow Us
                        </Text>
                     </Box> */}
                  </Box>
               </Flex>
               <Flex
                  css={{ gap: '$5', w: '250px' }}
                  direction={'column'}
                  align={'center'}
               >
                  <Text h5>Legal</Text>
                  <Box as={'ul'} css={{ gap: '$5', listStyle: 'none' }}>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Terms of Service
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Privacy Policy
                        </Text>
                     </Box>
                     {/* <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Cookie Policy
                        </Text>
                     </Box> */}
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Copyright Information
                        </Text>
                     </Box>
                  </Box>
               </Flex>
               <Flex
                  css={{ gap: '$5', w: '250px' }}
                  direction={'column'}
                  align={'center'}
               >
                  <Text h5>Socials</Text>
                  <Box as={'ul'} css={{ gap: '$5', listStyle: 'none' }}>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Instagram
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           LinkedIn
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Github
                        </Text>
                     </Box>
                     {/* <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Contact Press
                        </Text>
                     </Box> */}
                  </Box>
               </Flex>
            </Flex>
            <Box
               css={{
                  px: '$10',
                  '@md': {
                     px: '$56',
                  },
               }}
            >
               <Divider
                  css={{
                     mt: '$14',
                     display: 'flex',
                     justifyContent: 'center',
                  }}
               />
               <Flex
                  align={'center'}
                  wrap={'wrap'}
                  css={{
                     pt: '$8',
                     gap: '$10',
                     justifyContent: 'center',
                     '@md': {
                        justifyContent: 'space-between',
                     },
                  }}
               >
                  {/* <Flex css={{ gap: '$10' }} wrap={'wrap'}>
                     <img src={logoSrc} alt="Hundred Studios Logo" style={{ width: '60px', height: '60px' }} />
                  </Flex> */}
                  <Flex css={{ gap: '$6' }}>
                     <Text span css={{ color: '$accents8' }}>
                        © Copyright 2024 Hundred Studios
                     </Text>
                  </Flex>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};
