import {Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { icons } from '../navbar/icons';
import { Player } from '@lottiefiles/react-lottie-player';

export const Features1 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
                  flexDirection: 'row',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column">
               <Text span css={{color: '$blue600'}}>
                  Incase you missed
               </Text>
               <Text h3>Our Services</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                  At Hundred Studios, we offer web development, game development, and custom software solutions. Our focus is on delivering innovative, high-quality digital products tailored to meet your needs. Explore our services to bring your vision to life.
               </Text>

               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  {icons.scale}
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                        Web Development
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Hundred Studios builds perfect, best looking websites for your business,
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  {icons.activity}
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     Game Development
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        We build games that are fun to play and easy to use,
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  {icons.flash}
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     Project Management
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        We also handle your personal/commercial projects, from small to large,
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  {icons.server}
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     Digital Marketing
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Reach the right audience with the right message with us,
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  {icons.user}
                  <Flex direction={'column'}>
                     <Text h4 weight={'medium'}>
                     +Supreme Support
                     </Text>
                     <Text
                        span
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Overcome any challenge with a supporting team ready to respond.
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
            <Flex align={'center'}>
            <Player
                  src="https://lottie.host/70066313-35fd-49c8-b94f-2da6798ac52d/5tsvrXZSY5.json"
                  style={{ width: '400px', height: '400px' }}
                  loop
                  autoplay
               />
            </Flex>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};