import {ChakraProvider} from '@chakra-ui/react';
import './App.css';
import { Input, Stack, Flex} from '@chakra-ui/react';
import { Heading, Box, Text} from '@chakra-ui/react';
import { AttachmentIcon } from '@chakra-ui/icons'
import React from "react";
import AlertDialogExample from "./trans.js"; // Adjust the import path
import { useState} from 'react'; // Import useState
import axios from 'axios'; 


function App() {
  const [longURL, setLongURL] = useState('');
  const handleInputChange = (e) => {
    setLongURL(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page refresh)
  
    // Use Axios (or fetch) to send the long URL to your backend
    try {
      const response = await axios.post('https://url-shortcut-generator.onrender.com/shortURL', {
        longURL: longURL,
      });
  
      console.log(response.data); // This will be the shortened URL returned by your backend
    } catch (error) {
      console.error(error);
    }
  };

  
  const styles = {
  mr: '50px',
  ml: '50px',
  p:'50px',
  bgGradient:'linear(bisque, bisque, white)',
  borderRadius: '15px',
  boxShadow: '0 8px 8px  #9b9b9b,0 8px 8px   #9b9b9b',
  }
  return (
    <ChakraProvider>
      <Flex>
        <AttachmentIcon boxSize={16}  color="red.500" m="20px" textShadow="0 8px 8px  #e4e4e4"/>
      <Text color="red.500" m="20px" fontSize="45px" fontWeight="bold" textShadow="0 8px 8px  #e4e4e4">SHORTURL</Text>
      </Flex>

      <Flex height="100vh" // Set the height to 100% of the viewport height
      width="100vw"  // Set the width to 100% of the viewport width
      justify="space-between" 
      wrap="wrap" 
      gap="1" 
      mt="100px" 
      bgGradient="linear(white, #f7efef, #f7efef)">

        <Box maxW='32rem' ml="50px" mr="50px">
  <Heading mb={4}>Welcome in SHORTURL</Heading>
  <Text fontSize='xl' >
  Are your links long, unruly, and difficult to share? Look no further! We're here to make your online experience smoother and more efficient. With <strong>SHORTURL</strong>, you can transform those lengthy URLs into concise, easy-to-share links.
  </Text>
</Box>
    <form onSubmit={handleSubmit}>
      <Box sx={styles} 
      width={{ base: "40%", md: "40%" }}
      height={{ base: "50%", md: "55%" }}
      flexGrow="1">
        <Stack spacing={4} >
          <h5 textShadow="5px 5px 5px #ffffff">shorten any url from here!</h5>
          <Input
          type="text"
          value={longURL}
          onChange={handleInputChange}
          placeholder="https://example.com"
          width={{ base: "70%", md: "70%" }}
           color='black' bg="#00000" margin="auto" />
          <AlertDialogExample />
        </Stack>
      </Box></form>
      
      </Flex>
    </ChakraProvider>
  );
}

export default App;
