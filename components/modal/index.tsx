import React, { useState } from 'react';
import {
   Modal,
   Input,
   Row,
   Checkbox,
   Button,
   Text,
   Navbar,
   Grid,
   Spacer
} from '@nextui-org/react';
import { supabase } from '../../lib/supabaseClient';
import { useContactForm } from '../../hooks/useContactForm';



export const ModalLogin = () => {
   const [visible, setVisible] = React.useState(false);
   const handler = () => setVisible(true);
   const closeHandler = () => {
      setVisible(false);
      console.log('closed');
   };

   return (
      <div>
         <Navbar.Link onClick={handler}>Login</Navbar.Link>
         <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
         >
            <Modal.Header>
               <Text id="modal-title" size={18} css={{ fontFamily: 'Inter' }}>
                  Sign in to
                  <Text b size={18} css={{ fontFamily: 'Inter' }}>
                     Hundred Studios
                  </Text>
               </Text>
               {/* <Text h7>(Employees Only)</Text> */}
            </Modal.Header>
            <Modal.Body>
               <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Email"
                  css={{ fontFamily: 'Inter' }}
               />
               <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Password"
                  css={{ fontFamily: 'Inter' }}
               />
               <Row justify="space-between">
                  <Checkbox>
                     <Text size={14} css={{ fontFamily: 'Inter' }}>Remember me</Text>
                  </Checkbox>
                  <Text size={14} css={{ fontFamily: 'Inter' }}>Forgot password?</Text>
               </Row>
            </Modal.Body>
            <Modal.Footer>
               <Button auto flat color="error" onClick={closeHandler} css={{ fontFamily: 'Inter' }}>
                  Close
               </Button>
               <Button auto onClick={closeHandler} css={{ fontFamily: 'Inter' }}>
                  Sign in
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};

export const ModalContact = () => {
   const [visible, setVisible] = useState(false);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [reason, setReason] = useState<string[]>([]);
   const [message, setMessage] = useState('');
   const [error, setError] = useState<string | null>(null); // State to handle error
 
   const { submitForm } = useContactForm(); // Use the custom hook
 
   const handler = () => setVisible(true);
   const closeHandler = () => setVisible(false);
 
   const handleSubmit = async () => {
     try {
       setError(null); // Clear any previous error
       const data = await submitForm({ name, email, reason, message });
       console.log('Form submitted successfully:', data);
       setVisible(false); // Close modal after success
     } catch (error) {
       setError('Failed to submit form. Please try again.');
     }
   };
 
   return (
     <div>
       <Navbar.Link onClick={handler}>Contact Us</Navbar.Link>
       <Modal
         closeButton
         blur
         aria-labelledby="modal-title"
         open={visible}
         onClose={closeHandler}
         css={{
           width: '600px',
           height: 'auto',
           maxWidth: '90vw',
           maxHeight: '90vh',
         }}
       >
         <Modal.Header>
           <Text id="modal-title" size={18} css={{ fontFamily: 'Inter' }}>
             Get in Touch with{' '}
             <Text b size={18} css={{ fontFamily: 'Inter' }}>
               Hundred Studios
             </Text>
           </Text>
         </Modal.Header>
         <Modal.Body>
           <Grid.Container gap={2}>
             <Grid xs={12} sm={6}>
               <Input
                 clearable
                 bordered
                 fullWidth
                 color="primary"
                 size="lg"
                 placeholder="Full Name"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 css={{ fontFamily: 'Inter' }}
               />
             </Grid>
             <Grid xs={12} sm={6}>
               <Input
                 clearable
                 bordered
                 fullWidth
                 color="primary"
                 size="lg"
                 placeholder="Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 css={{ fontFamily: 'Inter' }}
               />
             </Grid>
             <Grid xs={12} direction="column">
               <Text size={16} css={{ marginBottom: '8px', fontFamily: 'Inter' }}>
                 Why are you contacting us?
               </Text>
               <Grid.Container direction="column" gap={1}>
                 <Grid>
                   <Checkbox value="Web Design" onChange={() => setReason([...reason, 'Web Design'])}>
                     Web Design
                   </Checkbox>
                 </Grid>
                 <Grid>
                   <Checkbox value="Collaboration" onChange={() => setReason([...reason, 'Collaboration'])}>
                     Collaboration
                   </Checkbox>
                 </Grid>
                 <Grid>
                   <Checkbox value="Mobile App Design" onChange={() => setReason([...reason, 'Mobile App Design'])}>
                     Mobile App Design
                   </Checkbox>
                 </Grid>
                 <Grid>
                   <Checkbox value="Others" onChange={() => setReason([...reason, 'Others'])}>
                     Others
                   </Checkbox>
                 </Grid>
               </Grid.Container>
             </Grid>
             <Grid xs={16}>
               <Input
                 clearable
                 bordered
                 fullWidth
                 color="primary"
                 size="lg"
                 placeholder="Your Message"
                 type="textarea"
                 value={message}
                 onChange={(e) => setMessage(e.target.value)}
                 css={{ fontFamily: 'Inter' }}
               />
             </Grid>
           </Grid.Container>
         </Modal.Body>
         <Modal.Footer>
           {error && <Text color="error">{error}</Text>} {/* Show error if exists */}
           <Button auto flat color="error" onClick={closeHandler} css={{ fontFamily: 'Inter' }}>
             Close
           </Button>
           <Button auto onClick={handleSubmit} css={{ fontFamily: 'Inter' }}>
             Send
           </Button>
         </Modal.Footer>
       </Modal>
     </div>
   );
 };

 

 export const ModalUploadCV = ({ visible, closeHandler }) => {
   const [fileName, setFileName] = useState('No file chosen');
   const [selectedFile, setSelectedFile] = useState<File | null>(null);
   const [fullName, setFullName] = useState('');
   const [email, setEmail] = useState('');
   const [agreed, setAgreed] = useState(false);
 
   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const file = event.target.files?.[0];
     if (file) {
       setFileName(file.name);
       setSelectedFile(file);
     } else {
       setFileName('No file chosen');
       setSelectedFile(null);
     }
   };
 
   const handleSubmit = async () => {
     if (!selectedFile || !fullName || !email || !agreed) {
       alert('Please fill in all fields and agree to terms.');
       return;
     }
 
     try {
       // Generate a unique file name to prevent overwriting
       const uniqueFileName = `${Date.now()}_${selectedFile.name}`;
 
       // Upload file to Supabase storage
       const { data, error } = await supabase.storage
         .from('cvs')
         .upload(uniqueFileName, selectedFile);
 
       if (error) {
         throw new Error(error.message);
       }
 
       const fileUrl = `${supabase.storageUrl}/cvs/${data?.Key}`;
 
       // Insert file metadata into the 'cv_submissions' table
       const { error: insertError } = await supabase
         .from('cv_submissions')
         .insert({
           full_name: fullName,
           email,
           file_name: selectedFile.name,
           file_url: fileUrl,
         });
 
       if (insertError) {
         throw new Error(insertError.message);
       }
 
       alert('CV submitted successfully!');
       closeHandler();
     } catch (error) {
       console.error('Failed to submit CV:', error.message);
       alert('Failed to submit CV. Please try again.');
     }
   };
 
   return (
     <Modal closeButton aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
       <Modal.Header>
         <Text h4 id="modal-title">Upload your CV to Hundred Studios</Text>
       </Modal.Header>
       <Modal.Body>
         <Input
           clearable
           bordered
           fullWidth
           color="primary"
           size="lg"
           placeholder="Full Name"
           aria-label="Full Name"
           onChange={(e) => setFullName(e.target.value)}
           value={fullName}
         />
         <Spacer y={0.5} />
         <Input
           clearable
           bordered
           fullWidth
           color="primary"
           size="lg"
           placeholder="Email"
           aria-label="Email"
           onChange={(e) => setEmail(e.target.value)}
           value={email}
         />
         <Spacer y={0.5} />
         <Row align="center">
           <input
             type="file"
             id="cv-upload"
             accept=".pdf,.doc,.docx"
             onChange={handleFileChange}
             style={{ display: 'none' }}
           />
           <Button auto onClick={() => document.getElementById('cv-upload')?.click()}>
             Choose File
           </Button>
           <Spacer x={0.5} />
           <Text size="sm">{fileName}</Text>
         </Row>
         <Spacer y={0.5} />
         <Checkbox checked={agreed} onChange={() => setAgreed(!agreed)}>
           <Text size="sm">I agree to the terms and conditions</Text>
         </Checkbox>
       </Modal.Body>
       <Modal.Footer>
         <Button auto flat color="error" onClick={closeHandler}>
           Close
         </Button>
         <Button auto onClick={handleSubmit}>
           Submit
         </Button>
       </Modal.Footer>
     </Modal>
   );
 };