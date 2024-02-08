import axios from "axios"
import React, { useEffect, useState } from 'react'
import { Card, CardHeader,Image, CardBody, CardFooter,Stack,Heading,Button,Text, HStack, VStack,Divider,ButtonGroup } from '@chakra-ui/react'
import "./Product.css"

const Product = () => {
  const [data,setData]=useState([]);
  const {isDark,setIsDark}=useState(false)
  useEffect(()=>{
     axios.get("http://localhost:4000/data")
     .then(res=>setData(res.data))
     .catch(err=>console.log("error"))
  },[])
  console.log(data)
  return (
    <div style={{backgroundColor:isDark?"black":"white"}}>
    {data.map((item)=>(
 <Card className="card"
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
     Ram -{`${item.ram} Gb`} |  Rom - {`${item.rom} Gb`}
     </Text>
     <Text py='2'>
     camera - {`${item.camera} MP`} | battery - {`${item.battery} mAh`}
     </Text>
    
     <Text py='2'>
     operating_system - {item.operating_system}
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
    ))}

    </div>
  )
}

export default Product