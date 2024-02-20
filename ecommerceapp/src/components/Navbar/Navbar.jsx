import React, { useState } from "react";
import logo from "../../Image/logo.png";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Image,
  useDisclosure,
  Text,
  IconButton,
} from "@chakra-ui/react";

import { FaShoppingCart, FaHeart , FaBars} from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState(null);
  // const { isOpen } = useDisclosure();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen)
  };
  const isLogined = localStorage.getItem("user");
  const handleLogout = () => {
    const data = localStorage.removeItem("user");

    console.log(data);
    setUser(null);
    window.location.reload();
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      bg="white"
      color="black"
      fontSize={{ base: "16px", md: "18px" }}
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      transition="background-color 0.3s, padding 0.3s"
      p={{ base: "1", md: "2" }}
      pl={{ base: "3", md: "10" }}
      pr={{ base: "3", md: "10" }}
      wrap="wrap"
      w="100%"
    >
      <Flex cursor="pointer" flexDirection="row" align="center">
        <RouterLink to="/">
          <Image src={logo} alt="Logo" boxSize={{ base: "50px", md: "70px" }} />
        </RouterLink>
      </Flex>

      <Box display={{ base: "block", md: "none" }} mt={{ base: 2, md: 0 }}>
        <IconButton icon={<FaBars />} size="md" onClick={handleToggle} />
      </Box>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        mt={{ base: 4, md: 0 }}
      >
        <Flex flexDirection="column" align="center" color="#001440">
          <Text mt={{ base: 4, md: 0 }} mr="50px">
            {" "}
            <FaShoppingCart style={{ margin: "auto" }} />
            <RouterLink to="/cart">Cart</RouterLink>
          </Text>
        </Flex>
        <Flex flexDirection="column" align="center" color="#001440">
          <Text mt={{ base: 4, md: 0 }} mr="50px">
            <FaHeart style={{ margin: "auto" }} />
            <RouterLink to="/wishlist">Wishlist</RouterLink>
          </Text>
        </Flex>
      </Box>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        {isLogined ? (
          <>
            <Button
              onClick={handleLogout}
              variant="outline"
              bg="#001440"
              color="white"
              mr={2}
              mt={{ base: 4, md: 0 }}
              _hover={{ color: "black", bg: "#008AD8" }}
            >
              Logout
            </Button>
            <Text>{user}</Text>
          </>
        ) : (
          <>
            <RouterLink to="/signup">
              <Button
                variant="outline"
                bg="#001440"
                color="white"
                mr={2}
                mt={{ base: 4, md: 0 }}
                _hover={{ color: "black", bg: "#008AD8" }}
              >
                Sign Up
              </Button>
            </RouterLink>
            <RouterLink to="/login">
              <Button
                variant="outline"
                bg="#001440"
                color="white"
                mr={2}
                mt={{ base: 4, md: 0 }}
                _hover={{ color: "black", bg: "#008AD8" }}
              >
                Login
              </Button>
            </RouterLink>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
