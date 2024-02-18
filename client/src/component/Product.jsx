import axios from "axios";
import React, { useContext, useEffect, useState } from 'react';
import { Card, CardHeader, Image, CardBody, CardFooter, Stack, Heading, Button, Text, HStack, VStack, Divider, ButtonGroup } from '@chakra-ui/react';
import "./Product.css";
import { AppContext } from "../../Context/Parentcontext";

const Product = () => {
  const [data, setData] = useState([]);
  const { value } = useContext(AppContext);
  useEffect(() => {
    axios.get("https://smartphones-list.onrender.com/data")
      .then(res => setData(res.data))
      .catch(err => console.log("error"));
  }, []);

  return (
    <div>
      {value ? (
        data
          .filter((item) => item.userData === value)
          .map((item) => (
            <Card
              key={item._id}
              className="card"
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
            >
              <HStack className="image-class">
                <Image
                  className="image"
                  src={item.image}
                  alt=''
                />
              </HStack>

              <Stack className="cardbody">
                <CardBody>
                  <Heading size='md'>{item.name}</Heading>
                  <Text py='2'>
                    Ram -{`${item.ram} Gb`} | Rom - {`${item.rom} Gb`}
                  </Text>
                  <Text py='2'>
                    camera - {`${item.camera} MP`} | battery - {`${item.battery} mAh`}
                  </Text>

                  <Text py='2'>
                    operating_system - {item.os}
                  </Text>
                  <Text py='2'>
                    Price - {`$ ${item.price}`}
                  </Text>
                  <Text>
                    Review - {item.review}
                  </Text>
                </CardBody>

                <CardFooter>
                  <Button variant='solid' colorScheme='blue'>
                    Buy now
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          ))
      ) : (
        data.map((item) => (
          <Card
            key={item._id}
            className="card"
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
            <HStack className="image-class">
              <Image
                className="image"
                src={item.image}
                alt=''
              />
            </HStack>

            <Stack className="cardbody">
              <CardBody>
                <Heading size='md'>{item.name}</Heading>
                <Text py='2'>
                  Ram -{`${item.ram} Gb`} | Rom - {`${item.rom} Gb`}
                </Text>
                <Text py='2'>
                  camera - {`${item.camera} MP`} | battery - {`${item.battery} mAh`}
                </Text>

                <Text py='2'>
                  operating_system - {item.os}
                </Text>
                <Text py='2'>
                  Price - {`$ ${item.price}`}
                </Text>
                <Text>
                  Review - {item.review}
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant='solid' colorScheme='blue'>
                  Buy now
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        ))
      )}
    </div>
  );
}

export default Product;
