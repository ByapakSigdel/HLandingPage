/* eslint-disable react/no-unescaped-entities */
import {Card, Divider, Text} from '@nextui-org/react';
import React, { useState } from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { TiArrowSortedUp } from 'react-icons/ti'; // Adjust based on your icon library
import { FaGithub } from 'react-icons/fa'; // Adjust based on your icon library

export const Features3 = () => {
   const [isHovered, setIsHovered] = useState(false);
   return (
      <>
         <Box
            css={{
               px: '$6',
               pb: '$14',
            }}
         >
            <Flex
               direction={'column'}
               justify={'center'}
               align={'center'}
               css={{
                  pt: '$20',
               }}
            >
               <Text span css={{color: '$blue600'}}>
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
               align={'center'}
               justify={'center'}
               wrap={'wrap'}
               css={{
                  gap: '1rem',
                  pt: '$14',
               }}
            >
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Word Clash</Text>
                           <Text span>
                              Word Clash is a fun, multiplayer based word guessing game in which within a party you have to guess the word containing the letters provided by the game.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>LinkUp</Text>
                           <Text span>
                              LinkUp is a relationship based social media, ensuring a fun and interactive media portal for a couple friends. It features RTC for voice and video with media storage.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>
            <Flex
               align={'center'}
               wrap={'wrap'}
               justify={'center'}
               css={{
                  gap: '1rem',
                  pt: '$8',
               }}
            >
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Hundred Studio's CMS</Text>
                           <Text span>
                              Hundred Studio CMS is a content management system which provides real time updates to the project that is being worked on Hundered Studios.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Hundred Studio's Blog</Text>
                           <Text span>
                              This is a interactive blog written by Hundred Studios team being published on a regular basis. This featues infotainment blogs.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>
         </Box>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
