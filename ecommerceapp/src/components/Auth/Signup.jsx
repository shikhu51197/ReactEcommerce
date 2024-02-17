import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../Image/image_processing20190919-32761-1vdd0xf.gif";
import { motion } from "framer-motion";

const Signup = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    navigate("/login");
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    handleSignup({ username, email, password });
    toast({
      title: "Account created.",
      description: "Thank you for signing up!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Box width="100%" mt="80px" mb="100px">
        <form
          onSubmit={handleFormSubmission}
          style={{
            width: "30%",
            margin: "auto",
            padding: "40px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            marginTop: "100px",
            borderRadius: "20px",
          }}
        >
          <Box width="40%" align="center" margin="auto">
            <Image src={logo1} borderRadius={10} width="100%" />
          </Box>
          <Heading>Signup Form</Heading>
          <br />
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              name="name"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your Name"
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Password"
            />
          </FormControl>
          <br />
          <Button mt={4} colorScheme="pink" type="submit" width="full">
            Signup
          </Button>
          <Stack pt={6}>
            <Text align={"center"}>
              Already a user?{" "}
              <Button variant={"link"} color={"blue.400"}>
                <Link to="/signin">Login</Link>
              </Button>
            </Text>
          </Stack>
        </form>
      </Box>
    </motion.div>
  );
};

export default Signup;
