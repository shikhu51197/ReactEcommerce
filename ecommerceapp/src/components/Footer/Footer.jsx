import React from 'react';
import { Box, Center, Text, Link, IconButton } from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="white"  bottom="0" w='100%'  p={2} mt={8}>
    <Center>
      <IconButton
        as={Link}
        href="https://twitter.com"
        target="_blank"
        aria-label="Twitter"
        icon={<FaTwitter />}
        mr={2}
      />
      <IconButton
        as={Link}
        href="https://facebook.com"
        target="_blank"
        aria-label="Facebook"
        icon={<FaFacebook />}
        mr={2}
      />
      <IconButton
        as={Link}
        href="https://instagram.com"
        target="_blank"
        aria-label="Instagram"
        icon={<FaInstagram />}
        mr={2}
      />
      <IconButton
        as={Link}
        href="https://linkedin.com"
        target="_blank"
        aria-label="LinkedIn"
        icon={<FaLinkedin />}
      />
    </Center>
    <Center mt={2}>
      <Text fontSize="sm" >
        © 2023 Your Company. All rights reserved.
      </Text>
    </Center>
  </Box>
  
  );
};

export default Footer;