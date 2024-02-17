import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import head from "../../Image/E-commerce.png";
import head1 from "../../Image/Online Shop Delivery.png";

import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
  Flex,
  Tag,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
const SingleProductPage = () => {
  const { categoryId } = useParams();
  const [product, setProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRelatedProduct, setSelectedRelatedProduct] = useState(null);

  const openModal = (relatedProduct) => {
    setSelectedRelatedProduct(relatedProduct);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    fetch(`https://ecoapp-json.onrender.com/products/${categoryId}`)
      .then((response) => response.json())
      .then((product) => setProduct(product))
      .catch((error) => console.error("Error fetching product data:", error));
  }, [categoryId]);

  const handleAddToCart = () => {
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = [...existingCartItems, product];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    alert("Product added to cart!");
  };

  const handleAddToWishlist = () => {
    const existingWishlistItems =
      JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const updatedWishlistItems = [...existingWishlistItems, product];
    localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlistItems));
    alert("Product added to wishlist!");
  };

  return (
    <>
      <Flex
        color="blue"
        direction="row"
        align="center"
        justify="center"
        mt="100px"
      >
        <Heading textAlign="center">Products Details Page</Heading>
        <Image src={head} alt="head" width="20%" />
      </Flex>
      <Box p={20} mt={10}>
        {product ? (
          <Box>
            <Box border="2px solid black" borderRadius={50} p={5}>
              <Heading mb={4} textAlign="center" fontSize="3xl">
                Title :- {product.title}
              </Heading>

              <Grid
                templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
                p={10}
                mt={10}
              >
                <GridItem>
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width="100%"
                    borderRadius="md"
                  />
                </GridItem>
                <GridItem colSpan={2}>
                  <Box>
                    <Text fontSize="xl">{product.description}</Text>

                    <Tag
                      variant="solid"
                      mt={4}
                      fontSize="xl"
                      colorScheme="gray"
                    >
                      Price: ${product.price}
                    </Tag>

                    <Text fontSize="xl" mt={4} color="green">
                      Specifications:-
                    </Text>
                    <List spacing={3} mt={2}>
                      {product.specifications.map((spec, index) => (
                        <ListItem key={index}>
                          <ListIcon as={MdCheckCircle} color="green.500" />
                          {spec}
                        </ListItem>
                      ))}
                    </List>

                    <Button
                      mx={10}
                      mt={4}
                      size="md"
                      colorScheme="teal"
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      mx={10}
                      mt={4}
                      size="md"
                      colorScheme="pink"
                      onClick={handleAddToWishlist}
                    >
                      Add to Wishlist
                    </Button>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
            {product.relatedProducts && product.relatedProducts.length > 0 && (
              <Box mt={20}>
                <Heading size="md" textAlign="center" mb={6}>
                  Related Products
                </Heading>
                <Grid
                  templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                  gap={10}
                >
                  {product.relatedProducts.map((relatedProduct) => (
                    <GridItem key={relatedProduct.id}>
                      <Box
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p={4}
                        _hover={{ shadow: "md" }}
                      >
                        <Image
                          src={relatedProduct.thumbnail}
                          alt={relatedProduct.title}
                          mx="auto"
                          mb={4}
                          boxSize="150px"
                          objectFit="cover"
                          borderRadius="md"
                        />
                        <Text fontWeight="bold" color="#2D3748">
                          {relatedProduct.title}
                        </Text>
                        <Tag fontSize="sm" mt={3} colorScheme="gray">
                          Price: ${relatedProduct.price}
                        </Tag>

                        <Text fontSize="sm" color="#718096">
                          {relatedProduct.description}
                        </Text>
                        <Button
                          size="sm"
                          colorScheme="teal"
                          onClick={() => openModal(relatedProduct)}
                        >
                          View Details
                        </Button>
                      </Box>
                    </GridItem>
                  ))}
                </Grid>
              </Box>
            )}
            <Modal isOpen={isModalOpen} onClose={closeModal} size="xl">
              <ModalOverlay />
              <ModalContent borderRadius="md" boxShadow="xl">
                <ModalHeader textAlign="center" fontSize="2xl">
                  {selectedRelatedProduct
                    ? selectedRelatedProduct.title
                    : "Loading..."}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {selectedRelatedProduct ? (
                    <>
                      <Flex
                        direction="row"
                        align="center"
                        justify="center"
                        mt="10px"
                      >
                        {" "}
                        <Box>
                          <Text>{selectedRelatedProduct.description}</Text>
                          <Tag variant="solid" mt={7} colorScheme="gray">
                            Price: ${selectedRelatedProduct.price}
                          </Tag>
                          <Text fontSize="lg" color="blue" mt="20px">
                            Specifications:
                          </Text>
                          <List spacing={3} mt={2}>
                            {selectedRelatedProduct.specifications.map(
                              (spec, index) => (
                                <ListItem key={index}>
                                  <ListIcon
                                    as={MdCheckCircle}
                                    color="green.500"
                                  />
                                  {spec}
                                </ListItem>
                              )
                            )}
                          </List>
                        </Box>
                        <Image src={head1} alt="head" width="40%" />
                      </Flex>
                    </>
                  ) : (
                    <Text>Loading...</Text>
                  )}
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="teal"
                    onClick={() => handleAddToCart(selectedRelatedProduct)}
                  >
                    Add to Cart
                  </Button>

                  <Button
                    ml="50px"
                    colorScheme="pink"
                    onClick={() => handleAddToWishlist(selectedRelatedProduct)}
                  >
                    Add to Wishlist
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        ) : (
          <Text>Loading...</Text>
        )}
      </Box>
    </>
  );
};

export default SingleProductPage;
