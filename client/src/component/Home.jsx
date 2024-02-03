import React from 'react'
import "./Home.css"
import { useState } from 'react'
import {Container, Input,VStack,InputGroup,InputRightElement,IconButton,Icon} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import data from "./Images.json"

const Home = () => {
  const [value,setValue]=useState(0);
  const imageId=data[value];

  const increaseId=()=>{
    if(value==data.length-1){
       setValue(0)
    }
    else{
     setValue(value+1)
    }
  }
  const decreaseId=()=>{
    if(value==0){
      setValue(data.length-1)
    }
    else{
     setValue(value-1)
    }
  }

  return (
    <div>
    <Container marginTop="50px" maxW="container.sm">
      <InputGroup>
        <Input placeholder="Search items here" size="md" />
        <InputRightElement>
          <IconButton backgroundColor="rgb(255, 128, 0)" icon={<SearchIcon />} />
        </InputRightElement>
      </InputGroup>
    </Container>
    <br />
    <div className='banner'>
      <div>
        <Icon onClick={decreaseId} as={FaArrowLeft} w={12} h={12} />
      </div>
      <div>
        <img className='product-image' src={imageId.image} alt="" />
      </div>

      <div>
      <Icon onClick={increaseId} as={FaArrowRight} w={12} h={12} />
      </div>
    </div>
    </div>
  )
}

export default Home