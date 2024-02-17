import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Spinner,
  HStack,
  Image,
  Text,
  Tooltip,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import head from "../../Image/Track delivery packages.png";
const itemsPerPage = 6; // Number of items to display per page

const CategoryPage = () => {
  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("popularity");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://ecoapp-json.onrender.com/products")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

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

  const handleSort = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const getPaginatedData = () => {
    if (!products) return [];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return products
      .sort((a, b) => {
        if (sortBy === "popularity") {
          return b.popularity - a.popularity;
        } else if (sortBy === "price") {
          return a.price - b.price;
        }

        return 0;
      })
      .slice(startIndex, endIndex);
  };

  const totalPages = products ? Math.ceil(products.length / itemsPerPage) : 1;

  return (
    <Box p={10} mt={50}>
      <Flex
       color="blue"
        direction="row"
        align="center"
        justify="center"
        mt={8}
      >
        <Heading textAlign="center" mb={8}>
          All Products
        </Heading>
        <Image src={head} alt="head" width="20%" borderRadius={20} />
      </Flex>

      <HStack p={4} spacing={4} justify="center">
        <Button onClick={() => handleSort("popularity")}>
          Sort by Popularity
        </Button>
        <Button onClick={() => handleSort("price")}>Sort by Price</Button>
      </HStack>
      {loading ? (
        <Spinner size="xl" mt={10} />
      ) : (
        <Box>
          <Grid
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
            gap={10}
            mt={8}
          >
            {getPaginatedData().map((product) => (
              <GridItem key={product.id}>
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  p={4}
                  _hover={{ shadow: "md" }}
                  textAlign="center"
                >
                  <Link to={`/category/${product.id}`}>
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      mx="auto"
                      mb={4}
                      boxSize="150px"
                      objectFit="cover"
                      borderRadius="md"
                    />
                    <Heading as="h3" size="md" mb={2}>
                      {product.title}
                    </Heading>
                  </Link>
                  <Text fontSize="sm" color="gray.600" mb={2}>
                    {product.description}
                  </Text>
                  <Text fontWeight="bold" color="teal.500" mb={2}>
                    Price: ${product.price}
                  </Text>
                  <HStack justify="center" mt={4}>
                    <Tooltip
                      hasArrow
                      label="Add Item In cart"
                      bg="gray.600"
                      borderRadius={50}
                    >
                      <Button
                        colorScheme="teal"
                        onClick={handleAddToCart}
                        size="sm"
                      >
                        Add to Cart
                      </Button>
                    </Tooltip>
                    <Tooltip
                      hasArrow
                      label="Add Item In wishlist"
                      bg="gray.600"
                      borderRadius={50}
                    >
                      <Button
                        colorScheme="pink"
                        onClick={handleAddToWishlist}
                        size="sm"
                      >
                        Add to Wishlist
                      </Button>
                    </Tooltip>
                  </HStack>
                </Box>
              </GridItem>
            ))}
          </Grid>
          {totalPages > 1 && (
            <HStack mt={4} spacing={2} justify="center">
              {Array.from({ length: totalPages }).map((_, index) => (
                <Button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  colorScheme={currentPage === index + 1 ? "teal" : "gray"}
                >
                  {index + 1}
                </Button>
              ))}
            </HStack>
          )}
        </Box>
      )}
    </Box>
  );
};

export default CategoryPage;
