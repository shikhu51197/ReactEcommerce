import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  Divider,
  Grid,
  GridItem,
  Image,
  Flex,
} from "@chakra-ui/react";
import emptycart from "../../Image/emptycart.gif";
import head from "../../Image/first_white_girl_drbl.gif";


import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleUpdateQuantity = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const calculateSubtotal = (item) => {
    return item && item.price && item.quantity ? item.price * item.quantity : 0;
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateSubtotal(item),
      0
    );
  };

  return (
    <Box p={10} mx="auto" mt={90} width="80%">
      <Flex direction="row" align="center" justify="center" mt={8}>
        <Heading fontSize="3xl" marginLeft="100px">
          My Cart
        </Heading>
        <Image src={head} alt="head" width="10%" borderRadius={20} />
      </Flex>

      {cartItems.length > 0 ? (
        <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
          {cartItems.map((item, index) => (
            <GridItem key={index}>
              <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={5}
                mb={4}
              >
                <Text fontWeight="bold">{item && item.title}</Text>
                <Text mt={7}>Price: ${item && item.price}</Text>
                <Input
                  type="number"
                  placeholder="Quantity"
                  defaultValue={item && item.quantity}
                  min={1}
                  max={10}
                  mt={2}
                  ml={2}
                  mr={2}
                  width="100px"
                  onChange={(e) =>
                    handleUpdateQuantity(index, parseInt(e.target.value))
                  }
                />
                <Text mt={6}>Subtotal: ${calculateSubtotal(item)}</Text>
                <Button
                  mt={2}
                  size="sm"
                  colorScheme="red"
                  onClick={() => handleRemoveFromCart(index)}
                >
                  Remove <AiOutlineDelete />
                </Button>
              </Box>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Box
          backgroundColor={"white"}
          gap={"20px"}
          width={"100%"}
          margin="auto"
          display="flex"
          flexDirection={"Column"}
          justifyContent="center"
        >
          <Image src={emptycart} width="40%" margin="auto" />

          <Text
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize="22px"
            textColor={"rgb(255,112,67)"}
          >
            Your Cart Is Empty!
          </Text>
          <Text textAlign={"center"} color="blue">
            <Link to="/">Go to Homepage</Link>
          </Text>
        </Box>
      )}
      {cartItems.length > 0 && (
        <>
          <Divider my={4} />
          <Text fontWeight="bold">Total: ${calculateTotal()}</Text>
          <Button mt={4} colorScheme="red" onClick={handleClearCart}>
            Clear Cart <AiOutlineDelete />
          </Button>
        </>
      )}
    </Box>
  );
};

export default CartPage;
