// WishlistPage.js
import React, { useState, useEffect } from "react";
import { Box, Grid, GridItem, Text, Button, Image } from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import empty from "../../Image/wsh.gif";
import head from "../../Image/giphy.gif";
import { Link } from "react-router-dom";
const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlistItems =
      JSON.parse(localStorage.getItem("wishlistItems")) || [];
    setWishlistItems(storedWishlistItems);
  }, []);

  const handleRemoveFromWishlist = (index) => {
    const updatedWishlistItems = [...wishlistItems];
    updatedWishlistItems.splice(index, 1);
    setWishlistItems(updatedWishlistItems);
    localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlistItems));
  };

  const handleClearWishlist = () => {
    setWishlistItems([]);
    localStorage.removeItem("wishlistItems");
  };

  return (
    <Box p={10} mx="auto" width="80%">
      <Image src={head} alt="head" width="20%" mx="auto" />
      {wishlistItems.length > 0 ? (
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" mt={10} gap={6}>
          {wishlistItems.map((item, index) => (
            <GridItem key={index}>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
                <Text fontWeight="bold" mb={5}>
                  {item && item.title}
                </Text>
                <Text mb={5}>Price: ${item && item.price}</Text>
                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={() => handleRemoveFromWishlist(index)}
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
          width={"100%"}
          margin="auto"
          display="flex"
          flexDirection={"Column"}
          justifyContent="center"
        >
          <Image src={empty} width="40%" margin="auto" />

          <Text
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize="22px"
            textColor={"rgb(255,112,67)"}
          >
            Your Wishlist Is Empty!
          </Text>
          <Text textAlign={"center"} color="blue">
            <Link to="/">Go to Homepage</Link>
          </Text>
        </Box>
      )}
      {wishlistItems.length > 0 && (
        <Button mt={20} colorScheme="red" onClick={handleClearWishlist}>
          Clear Wishlist <AiOutlineDelete />
        </Button>
      )}
    </Box>
  );
};

export default WishlistPage;
