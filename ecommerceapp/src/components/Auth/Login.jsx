import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../Image/two-step-verification-2.gif";
import { motion } from "framer-motion";

const Login = () => {
  const [user, setUser] = useState(null);
  const toast = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (userData) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === userData.email &&
      storedUser.password === userData.password
    ) {
      setUser(userData);
    }
    navigate("/");
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
    toast({
      title: "Login Success.",
      description: "Thank you for signing !",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Box display="flex" width="100%" mt={100}>
          <Box width="50%" mt="50px" p={10}>
            <Image src={logo1} borderRadius={10} width="100%" />
          </Box>
          <Box width="70%">
            <form
              onSubmit={handleFormSubmission}
              style={{
                width: "50%",
                margin: "auto",
                padding: "40px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                marginTop: "100px",
                borderRadius: "20px",
              }}
            >
              {" "}
              <Heading>Signin Form</Heading>
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
              <Button mt={4} colorScheme="pink" type="submit" w="full">
                Signin
              </Button>
              <Stack pt={6}>
                <Text align={"center"}>
                  Not Registered?{" "}
                  <Button variant={"link"} color={"blue.400"}>
                    <Link to="/signup">Signup</Link>
                  </Button>
                </Text>
              </Stack>
            </form>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default Login;
