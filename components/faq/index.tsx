import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Faq = () => {
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
               <Text span css={{color: '$blue600'}}>
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
                  These are the most frequently asked questions, if you have any more questions you can <a>Contact Us</a>.
               </Text>
            </Flex>

            <Flex
               css={{
                  'gap': '$10',
                  '@lg': {
                     px: '$64',
                  },
               }}
               direction={'column'}
            >
               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     What services does Hundred Studios offer?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Hundred Studios specializes in web development, game development, and various software solutions tailored to meet the unique needs of our clients. We focus on creating innovative digital experiences that drive engagement and growth.
                     </Text>
                     
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     Where is Hundred Studios located?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Hundred Studios is proudly based in Nepal, a country known for its rich culture and talented workforce. Being located in Nepal allows us to tap into a diverse pool of skilled professionals while also fostering local entrepreneurship.
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Our geographical location enables us to serve clients not only within Nepal but also internationally, as we leverage modern communication tools to collaborate effectively across borders. We take pride in our roots and aim to contribute positively to the local tech ecosystem.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     Do you provide support after project completion?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Yes, we believe that our responsibility to our clients extends beyond the initial project delivery. At Hundred Studios, we offer comprehensive support and maintenance services to ensure that your project continues to run smoothly after launch.
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                       Our team is available to address any issues that may arise, implement updates, and make necessary adjustments based on user feedback. We are committed to fostering long-term relationships with our clients, providing peace of mind that you have a reliable partner to support you as your business evolves.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     How long does it take to complete a project?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        The timeline for project completion can vary significantly based on the complexity and scope of the work involved. During our initial consultation, we conduct a thorough assessment of your project requirements, allowing us to provide a detailed timeline tailored to your needs. We follow an agile methodology, which means that we prioritize flexibility and adaptability throughout the development process. Regular communication is key; we will keep you updated on our progress and any adjustments that may be necessary along the way. Our goal is to deliver high-quality results efficiently without compromising on quality.
                     </Text>
                     
                  </Flex>
               </Flex>
            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
