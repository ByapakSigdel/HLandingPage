import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Statistics = () => {
   return (
      <>
         <Box
            css={{
               pt: '$20',
               pb: '$16',
               px: '$6',
            }}
         >
            <Flex direction={'column'} align={'center'}>
               <Text
                  h3
                  css={{
                     textAlign: 'center',
                  }}
               >
                  Over 2000+ user for our products
               </Text>
               <Text
                  span
                  css={{
                     maxWidth: '800px',
                     textAlign: 'center',
                  }}
               >
                  Over 2000 people are using the products we created on a daily basis and they are loving it.
               </Text>
            </Flex>
            <Flex
               direction={'row'}
               wrap={'wrap'}
               justify={'center'}
               css={{
                  'gap': '4rem',
                  'pt': '$16',
                  '@sm': {
                     gap: '10rem',
                  },
               }}
            >
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     50K+
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Plays&Downloads
                  </Text>
               </Flex>
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     4+
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Products
                  </Text>
               </Flex>
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     10+
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Satisfied Clients
                  </Text>
               </Flex>
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     5+
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Employees
                  </Text>
               </Flex>
            </Flex>
         </Box>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
