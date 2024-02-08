import { useState } from "react";
import axios from "axios";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Center,
  InputGroup,
  InputRightElement,
  Checkbox,
  Link,
  useToast
} from "@chakra-ui/react";

const Formpage = () => {
  const toast = useToast(); // Move the useToast hook inside the functional component

  const [data, setData] = useState({
    name: "",
    ram: "",
    rom: "",
    review: "",
    price: "",
    image: "",
    camera:"",
    battery:"",
    os:""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = () => {
    let postData = {
      name: data.name,
      ram: data.ram,
      rom: data.rom,
      review: data.review,
      price: data.price,
      image: data.image,
      battery:data.battery,
      camera:data.camera ,
      os:data.os
    };

    console.log(postData);
    
    axios
      .post("http://localhost:4000/data", postData)
      .then((res) => {
        console.log(res);
        toast({
          title: 'Data created.',
          description: "Your data is added to our database",
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        toast({
          title: 'Error',
          description: "Failed to create account.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">Add your data here</Heading>
          </Stack>
          <VStack
            as="form"
            boxSize={{ base: "xs", sm: "sm", md: "md" }}
            h="max-content !important"
            bg={useColorModeValue("white", "gray.700")}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
            spacing={8}
          >
            <VStack spacing={4} w="100%">
              <FormControl id="text">
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  onChange={handleChange}
                  rounded="md"
                  type="text"
                />
              </FormControl>

              <FormControl id="text">
                <FormLabel>RAM</FormLabel>
                <Input
                  name="ram"
                  onChange={handleChange}
                  rounded="md"
                  type="text"
                />
              </FormControl>

              <FormControl id="text">
                <FormLabel>ROM</FormLabel>
                <Input
                  name="rom"
                  onChange={handleChange}
                  rounded="md"
                  type="text"
                />
              </FormControl>

              <FormControl id="text">
                <FormLabel>Review</FormLabel>
                <Input
                  name="review"
                  onChange={handleChange}
                  rounded="md"
                  type="text"
                />
              </FormControl>

              <FormControl id="text">
                <FormLabel>Price</FormLabel>
                <Input
                  name="price"
                  onChange={handleChange}
                  rounded="md"
                  type="text"
                />
              </FormControl>

              <FormControl id="text">
                <FormLabel>Image link</FormLabel>
                <Input
                  name="image"
                  onChange={handleChange}
                  rounded="md"
                  type="text"
                />
              </FormControl>

              <FormControl id="text">
                <FormLabel>Operating system</FormLabel>
                <Input
                  name="os"
                  onChange={handleChange}
                  rounded="md"
                  type="text"
                />
              </FormControl>

              <FormControl id="text">
                <FormLabel>Battery</FormLabel>
                <Input
                  name="battery"
                  onChange={handleChange}
                  rounded="md"
                  type="text"
                />
              </FormControl>

              <FormControl id="text">
                <FormLabel>Camera</FormLabel>
                <Input
                  name="camera"
                  onChange={handleChange}
                  rounded="md"
                  type="text"
                />
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Button
                bg="green.300"
                color="white"
                _hover={{
                  bg: "green.500",
                }}
                rounded="md"
                w="100%"
                onClick={handleSubmit}
              >
                Add
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Container>
  );
};

export default Formpage;
