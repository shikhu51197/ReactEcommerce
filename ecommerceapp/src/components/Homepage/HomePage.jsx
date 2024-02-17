import {
  Flex,
  Box,
  Image,
  Text,
  Stack,
  HStack,
  chakra,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo1 from "../../Image/Shopping during Covid.png";
import logo2 from "../../Image/home.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlY3Ryb25pY3MlMkN8ZW58MHx8MHx8fDA%3D",
      label: "Electronics",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      label: "Clothing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "https://images.unsplash.com/photo-1559070081-648fb00b2ed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
      label: "Accessories",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      img: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFjY2Vzc29yaWVzfGVufDB8fDB8fHww",
      label: "Accessories",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: "https://images.unsplash.com/3/www.madebyvadim.com.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
      label: "Combos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  return (
    <>
      <Flex
        w="full"
        gap={20}
        p={10}
        alignItems="center"
        justifyContent="center"
        mt={100}
      >
        <Flex w="60%" pos="relative" overflow="hidden" borderRadius={200}>
          <Flex h="400px" w="full" {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                <Text
                  color="white"
                  fontSize="xs"
                  p="8px 12px"
                  pos="absolute"
                  top="0"
                ></Text>
                <Image
                  src={slide.img}
                  alt="carousel image"
                  boxSize="full"
                  backgroundSize="cover"
                />
                <Stack
                  p="8px 12px"
                  pos="absolute"
                  bottom="24px"
                  textAlign="center"
                  w="full"
                  mb="8"
                  color="white"
                >
                  <Text fontSize="2xl">{slide.label}</Text>
                  <Text fontSize="lg">{slide.description}</Text>
                </Stack>
              </Box>
            ))}
          </Flex>
          <Text {...arrowStyles} left="0" onClick={prevSlide}>
            &#10094;
          </Text>
          <Text {...arrowStyles} right="0" onClick={nextSlide}>
            &#10095;
          </Text>
          <HStack justify="center" pos="absolute" bottom="8px" w="full">
            {Array.from({
              length: slidesCount,
            }).map((_, slide) => (
              <Box
                key={`dots-${slide}`}
                cursor="pointer"
                boxSize={["7px", null, "15px"]}
                m="0 2px"
                bg={
                  currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"
                }
                rounded="50%"
                display="inline-block"
                transition="background-color 0.6s ease"
                _hover={{
                  bg: "blackAlpha.800",
                }}
                onClick={() => setSlide(slide)}
              ></Box>
            ))}
          </HStack>
        </Flex>
        <Box
          width="40%"
          p={10}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
          borderRadius={200}
        >
          <Image src={logo1} borderRadius={10} width="100%" />
        </Box>
      </Flex>
      <Flex
        color="BLue"
        direction="column"
        align="center"
        justify="center"
        mt={8}
      >
        <Heading>List Of Product Categories</Heading>
        <Image src={logo2} borderRadius={10} width="20%" />
      </Flex>

      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Link to="/category">
          <Flex p={50} w="full" alignItems="center" justifyContent="center">
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              w="sm"
              mx="auto"
            >
              <Box
                bg="gray.300"
                h={64}
                w="full"
                rounded="lg"
                shadow="md"
                bgSize="cover"
                bgPos="center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1529338296731-c4280a44fc48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
              ></Box>

              <Box
                w={{
                  base: 56,
                  md: 64,
                }}
                bg="white"
                _dark={{
                  bg: "gray.800",
                }}
                mt={-10}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
              >
                <chakra.h3
                  py={2}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="gray.800"
                  _dark={{
                    color: "white",
                  }}
                  letterSpacing={1}
                >
                  Electronics
                </chakra.h3>
              </Box>
            </Flex>
          </Flex>
        </Link>
        <Link to="/category">
          <Flex p={50} w="full" alignItems="center" justifyContent="center">
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              w="sm"
              mx="auto"
            >
              <Box
                bg="gray.300"
                h={64}
                w="full"
                rounded="lg"
                shadow="md"
                bgSize="cover"
                bgPos="center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoaW5nfGVufDB8fDB8fHww)",
                }}
              ></Box>

              <Box
                w={{
                  base: 56,
                  md: 64,
                }}
                bg="white"
                _dark={{
                  bg: "gray.800",
                }}
                mt={-10}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
              >
                <chakra.h3
                  py={2}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="gray.800"
                  _dark={{
                    color: "white",
                  }}
                  letterSpacing={1}
                >
                  Clothing
                </chakra.h3>
              </Box>
            </Flex>
          </Flex>
        </Link>

        <Link to="/category">
          <Flex p={50} w="full" alignItems="center" justifyContent="center">
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              w="sm"
              mx="auto"
            >
              <Box
                bg="gray.300"
                h={64}
                w="full"
                rounded="lg"
                shadow="md"
                bgSize="cover"
                bgPos="center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3J5fGVufDB8fDB8fHww)",
                }}
              ></Box>

              <Box
                w={{
                  base: 56,
                  md: 64,
                }}
                bg="white"
                _dark={{
                  bg: "gray.800",
                }}
                mt={-10}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
              >
                <chakra.h3
                  py={2}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="gray.800"
                  _dark={{
                    color: "white",
                  }}
                  letterSpacing={1}
                >
                  Accessories
                </chakra.h3>
              </Box>
            </Flex>
          </Flex>
        </Link>
      </Flex>
    </>
  );
};

export default HomePage;
