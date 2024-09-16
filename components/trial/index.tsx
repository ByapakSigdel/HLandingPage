import React, { useState } from 'react';
import { Button, Divider, Text } from '@nextui-org/react';
import { Flex } from '../styles/flex';
import { ModalUploadCV } from '../modal'; // Make sure to use the correct import path

export const Trial = () => {
   const [visible, setVisible] = useState(false);
   const handler = () => setVisible(true);
   const closeHandler = () => {
      setVisible(false);
      console.log('closed');
   };

   return (
      <>
         <Flex
            css={{
               py: '$20',
               px: '$6',
               flexDirection: 'column',
               '@md': {
                  flexDirection: 'row',
                  alignItems: 'center',
               },
            }}
         >
            {/* Lottie Animation */}
            <Flex
               css={{
                  flex: '1',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: '$10',
                  '@md': {
                     mb: '0',
                  },
               }}
            >
               <lottie-player
                  src="https://lottie.host/f412e7ff-f159-4df1-b6d7-51d6bf42c877/DpGki9jvqB.json"
                  background="transparent"
                  speed="1"
                  style={{ width: '100%', maxWidth: '400px', height: '400px' }}
                  loop
                  autoplay
                  direction="1"
                  mode="normal"
               />
            </Flex>

            {/* Content */}
            <Flex
               direction={'column'}
               css={{
                  flex: '1',
                  alignItems: 'center',
                  textAlign: 'center',
                  '@md': {
                     alignItems: 'flex-start',
                     textAlign: 'left',
                     pl: '$10',
                  },
               }}
            >
               <Text h3>Want to work with us?</Text>
               <Text
                  span
                  css={{
                     color: '$accents8',
                     pb: '$15',
                     maxWidth: '400px',
                  }}
               >
                  Send us your CV and we will get back to you, if you fit the right candidate match.
               </Text>

               <Button onClick={handler}>Upload CV</Button>

               <ModalUploadCV 
                  visible={visible} 
                  closeHandler={closeHandler}
               />
            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};