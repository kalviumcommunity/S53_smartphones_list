import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  Image,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Text,
  HStack,
  VStack,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import "./Product.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const { isDark, setIsDark } = useState(false);
  const [inputValue, setValue] = useState({
    rom: "",
    image: "",
    price: "",
    review: "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    axios
      .get("https://smartphones-list.onrender.com/data")
      .then((res) => setData(res.data))
      .catch((err) => console.log("error"));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://smartphones-list.onrender.com/data/${id}`)
      .then(() => {
        location.reload()
      })
      .catch((err) => console.log("error"));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    axios
      .patch(`https://smartphones-list.onrender.com/data/${selectedItemId}`, {
        rom: inputValue.rom,
        price: inputValue.price,
        image: inputValue.image,
        review: inputValue.review,
      })
      .then(() => {
        onClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ backgroundColor: isDark ? "black" : "white" }}>
      {data.map((item) => (
        <div key={item._id}>
          <Card
            className="card"
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <HStack className="image-class">
              <Image className="image" src={item.image} alt="" />
            </HStack>

            <Stack className="cardbody">
              <CardBody>
                <Heading size="md">{item.name}</Heading>
                <Text py="2">
                  Ram -{`${item.ram} Gb`} | Rom - {`${item.rom} Gb`}
                </Text>
                <Text py="2">
                  camera - {`${item.camera} MP`} | battery -{" "}
                  {`${item.battery} mAh`}
                </Text>

                <Text py="2">operating_system - {item.os}</Text>
                <Text py="2">Price - {`$ ${item.price}`}</Text>
                <Text>Review - {item.review}</Text>
              </CardBody>

              <CardFooter>
                <HStack>
                  <Button
                    onClick={() => {
                      setSelectedItemId(item._id);
                      onOpen();
                    }}
                    variant="solid"
                    colorScheme="blue"
                  >
                    update
                  </Button>
                  <Button
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                    variant="solid"
                    colorScheme="blue"
                  >
                    Delete
                  </Button>
                </HStack>
              </CardFooter>
            </Stack>
          </Card>
        </div>
      ))}

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backgroundColor="rgba(0, 0, 0, 0.1)" />
        <ModalContent>
          <ModalHeader>Update smartphone</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>updated rom</FormLabel>
              <Input
                onChange={handleChange}
                name="rom"
                placeholder="smartphone rom"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>New price</FormLabel>
              <Input onChange={handleChange} name="price" placeholder="price" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>New Image Link</FormLabel>
              <Input
                onChange={handleChange}
                name="image"
                placeholder="image link"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Review</FormLabel>
              <Input
                onChange={handleChange}
                name="review"
                placeholder="updated review"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleUpdate} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Dashboard;
