import React,{useContext, useEffect, useState} from 'react'
import axios from 'axios'
import {Text,Flex,Button,Switch,HStack,Icon, Avatar,WrapItem,Container, Input,VStack,InputGroup,InputRightElement,IconButton,Select} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {SearchIcon} from '@chakra-ui/icons'
import { AppContext } from '../../Context/Parentcontext'
import Product from './Product'



const Navbar = () => {
   const {users,setUsers}=useContext(AppContext);
   const{value,setValue} =useContext(AppContext);

  return (
    <div style={{height:"200px",}}>
 
 <HStack width="100%" height="80px"  justify="space-evenly" alignItems="center" >
    <Link to={"/"}>
    <Text>
        Home
     </Text>
    </Link>
    

     <Text>
        About
     </Text>

    <Link to={"/Product"} >
    <Text>
        Product
     </Text>
    </Link>
     
     <Link to={"/Formpage"}>
     <Button colorScheme='blue'>
        Add
     </Button>
     </Link>

     <Link to={"/Dashboard"}>
     <Button colorScheme='blue'>
        Dashboard
     </Button>
     </Link>

     <Link to={"/signup"}>
     <Button colorScheme='blue'>
       Signup
     </Button>
     </Link>

   


    
   </HStack>
   <Container marginTop="50px" maxW="container.lg">
      <HStack>

      <InputGroup>
        <Input placeholder="Search items here" size="md" />
        <InputRightElement>
          <IconButton backgroundColor="rgb(255, 128, 0)" icon={<SearchIcon />} />
        </InputRightElement>
      </InputGroup>
      <Select onChange={(e)=>{setValue(e.target.value)}} maxW={"xs"} placeholder='Select option'>
       {users.map((user) => (
       <option key={user._id} value={user.username}>
       {user.username}
       </option>
        ))}
     </Select>
      </HStack>
    </Container>
    </div>
  )
}

export default Navbar