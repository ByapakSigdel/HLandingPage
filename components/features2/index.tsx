import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Flex} from '../styles/flex';
import { FaUser } from 'react-icons/fa';
import { Player } from '@lottiefiles/react-lottie-player';

export const Features2 = () => {
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
                  gap: '5rem',
                  flexDirection: 'row-reverse',
                  px: '$16',
               },
               '@md': {
                  justifyContent: 'space-evenly',
               },
            }}
         >
            <Flex direction="column" align={'center'}>
               <Text h3 span css={{color: '$blue600'}}>
                  Our Team
               </Text>
               
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                  At Hundred Studios, we pride ourselves on having a small yet highly skilled team that delivers exceptional results. Despite being more on the team you will be talking to two of them at most times,
               </Text>

               <Flex
                  justify={'center'}
                  wrap={'wrap'}
                  css={{
                     py: '$10',
                  }}
               >
                  <Flex
                     css={{
                        py: '$10',
                        gap: '$5',
                     }}
                  >
                     <FaUser style={{ marginTop: '7px' }} />
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>
                           Mahan Sigdel
                        </Text>
                        <Text h6>CTO, Hundred Studios</Text>
                        <Text
                           span
                           css={{
                              maxWidth: '325px',
                              color: '$accents8',
                           }}
                        >
                           “People’s lives don’t end when they die, it ends when they lose faith.”
                        </Text>
                     </Flex>
                  </Flex>
                  <Flex
                     css={{
                        py: '$10',
                        gap: '$5',
                     }}
                  >
                   <FaUser style={{ marginTop: '7px' }} />
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>
                           Sandip Adhikari
                        </Text>
                        <Text h6>CFO, Hundred Studios</Text>
                        <Text
                           span
                           css={{
                              maxWidth: '325px',
                              color: '$accents8',
                           }}
                        >
                          “If you don’t take risks, you can’t create a future!”


                        </Text>
                     </Flex>
                  </Flex>
               </Flex>
            </Flex>
            <Flex align={'center'}>
            
<Player
                  src="https://lottie.host/8b820484-1619-4952-8d73-bd315b2f8625/8zl2pQ6UpX.json"
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
