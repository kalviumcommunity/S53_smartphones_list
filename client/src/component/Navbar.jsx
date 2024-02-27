import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Text,
  Flex,
  Button,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Switch,
  HStack,
  Avatar,
  WrapItem,
  Container,
  Input,
  VStack,
  InputGroup,
  InputRightElement,
  IconButton,
  Select,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { FaAlignJustify } from "react-icons/fa";
import { AppContext } from "../../Context/Parentcontext";
import { useDisclosure } from "@chakra-ui/react";

import Product from "./Product";

const Navbar = () => {
  const { users, setUsers } = useContext(AppContext);
  const { value, setValue } = useContext(AppContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ height: "200px" }}>
      <HStack
        width="100%"
        height="80px"
        justify="space-evenly"
        alignItems="center"
      >
        <Link to={"/"}>
          <Text>Home</Text>
        </Link>

        <Text>About</Text>

        <Link to={"/Product"}>
          <Text>Product</Text>
        </Link>

        {screenWidth > 400 ? (
          <>
            <Link to={"/Formpage"}>
              <Button colorScheme="blue">Add</Button>
            </Link>

            <Link to={"/Dashboard"}>
              <Button colorScheme="blue">Dashboard</Button>
            </Link>

            <Link to={"/signup"}>
              <Button colorScheme="blue">Signup</Button>
            </Link>
          </>
        ) : (
          <>
            <Icon
              onClick={onOpen}
              style={{ color: "black" }}
              as={FaAlignJustify}
              color="white"
              w={10}
              h={8}
            />
            {
              <div>
                <>
                  <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />

                      <DrawerBody>
                        <VStack>

                        <Link to={"/Formpage"}>
                          <Button colorScheme="blue">Add</Button>
                        </Link>

                        <Link to={"/Dashboard"}>
                          <Button colorScheme="blue">Dashboard</Button>
                        </Link>

                        <Link to={"/signup"}>
                          <Button colorScheme="blue">Signup</Button>
                        </Link>
                        </VStack>
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                </>
              </div>
            }
          </>
        )}
      </HStack>
      <Container marginTop="50px" maxW="container.lg">
        <HStack>
          <InputGroup>
            <Input placeholder="Search items here" size="md" />
            <InputRightElement>
              <IconButton
                backgroundColor="rgb(255, 128, 0)"
                icon={<SearchIcon />}
              />
            </InputRightElement>
          </InputGroup>
          <Select
            onChange={(e) => setValue(e.target.value)}
            maxW={"xs"}
            placeholder="Select option"
          >
            {users.map((user) => (
              <option key={user._id} value={user.username}>
                {user.username}
              </option>
            ))}
          </Select>
        </HStack>
      </Container>
    </div>
  );
};

export default Navbar;
