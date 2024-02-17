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
} from "@chakra-ui/react";

import { FaShoppingCart, FaHeart } from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const { isOpen } = useDisclosure();

  const handleLogout = () => {
    const data = localStorage.removeItem("user");

    console.log(data);
    setUser(null);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      bg="white"
      color="black"
      fontSize="18px"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      transition="background-color 0.3s, padding 0.3s"
      p={{ base: "1", md: "2" }}
      pl={{ base: "5", md: "10" }}
      pr={{ base: "5", md: "10" }}
      wrap="wrap"
      w="100%"
    >
      <Flex cursor="pointer" flexDirection="row" align="center">
        <RouterLink to="/">
          <Image src={logo} alt="Logo" boxSize="70px" />
        </RouterLink>
      </Flex>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
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
        {user !== null ? (
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
        ) : (
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
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
