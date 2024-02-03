import React,{useState} from 'react'
import {Text,Flex,Button,Switch,HStack,Icon, Avatar,WrapItem} from '@chakra-ui/react'
// import { Link } from 'react-router-dom'


const Navbar = () => {
    
  return (
    <div>
 
 <HStack width="100%" height="100px" justify="space-evenly" alignItems="center" >
    
     <Text>
        Home
     </Text>

     <Text>
        About
     </Text>

     <Text>
        Contact
     </Text>
     
     <Button colorScheme='blue'>
        Sign in
     </Button>

     <Switch colorScheme='teal' size='lg' />
  <WrapItem>
    <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
  </WrapItem>
   </HStack>
    </div>
  )
}

export default Navbar