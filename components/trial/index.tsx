import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';
import {ModalUploadCV} from '../modal'; // Make sure to use the correct import path

export const Trial = () => {
   const [visible, setVisible] = React.useState(false);
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
            }}
            justify={'center'}
            direction={'column'}
            align={'center'}
         >
            <Text h3>Want to work with us?</Text>
            <Text
               span
               css={{
                  color: '$accents8',
                  pb: '$15',
                  textAlign: 'center',
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

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};