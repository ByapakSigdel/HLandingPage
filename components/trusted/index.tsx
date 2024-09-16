import {Button, Divider, Grid, Link, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from '../navbar/logo';
import {Flex} from '../styles/flex';

export const Trusted = () => {
   return (
      <>
         <Flex
            direction={'column'}
            align={'center'}
            css={{
               'pt': '$20',
               'px': '$6',
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Text h2 css={{textAlign: 'center'}}>
               Loved by over 100+ customers
            </Text>
            <Text
               css={{
                  color: '$accents8',
                  maxWidth: '800px',
                  textAlign: 'center',
               }}
               weight="normal"
               size={'$lg'}
            >
               We keep the customer and client satisfaction as our top priority.
            </Text>
            {/* <Grid.Container
               gap={6}
               alignItems="center"
               justify="center"
               css={{
                  'width': '100%',
                  '@sm': {
                     width: '100%',
                  },
                  '&  span': {
                     whiteSpace: 'pre',
                  },
               }}
            >
               <Grid sm={3} justify="center">
                  <Flex align={'center'} justify={'center'}>
                     <AcmeLogo />
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 1
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 2
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 3
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 4
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 5
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 6
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 7
                     </Text>
                  </Flex>
               </Grid>
               <Grid sm={3} justify="center">
                  <Flex align={'center'}>
                     <AcmeLogo />{' '}
                     <Text weight={'semibold'} span size={'$lg'}>
                        Company 8
                     </Text>
                  </Flex>
               </Grid>
            </Grid.Container> */}
         </Flex>
         <Flex
   css={{
      gap: '$12',
      pt: '$8',
      justifyContent: 'center', // centers horizontally
      alignItems: 'center', // centers vertically
      margin: '$12'
      
   }}
   wrap={'wrap'}
>
<Button>
  <a 
    href='#testimonials' 
    style={{ textDecoration: 'none', color: 'inherit' }} 
    onClick={(e) => {
      e.preventDefault(); // Prevent default anchor behavior
      document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
    }}
  >
    Check Testimonials
  </a>
</Button>



</Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
