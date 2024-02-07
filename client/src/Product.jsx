import React from 'react'
import { Card, CardHeader,Image, CardBody, CardFooter,Stack,Heading,Button,Text, HStack, VStack,Divider,ButtonGroup } from '@chakra-ui/react'

const Product = () => {
  return (
    <div>
 <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '400px' }}
    src='https://cdn.dxomark.com/wp-content/uploads/medias/post-71687/Xperia5II.jpg'
    alt=''
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Sony Xperia 5 II</Heading>
      <Text py='2'>
        Ram -8Gb
      </Text>
      <Text py='2'>
      Rom - 128Gb
      </Text>
      <Text py='2'>
      operating_system - "MIUI 12"
      </Text>
      <Text py='2'>
      Price - 849 $
      </Text>
      <Text>
        Review -The Sony Xperia 5 II is a compact flagship device  with a focus on multimedia and gaming. With 8GB of RAM and 128GB of storage, it provides a smooth performance. Running on Android 10, it offers a clean and intuitive user interface. The device's high refresh rate display and impressive audio capabilities make it a unique choice for entertainment enthusiasts.,

      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
       Buy now
      </Button>
    </CardFooter>
  </Stack>
</Card>
    </div>
  )
}

export default Product