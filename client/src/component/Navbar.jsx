import React,{useContext, useState} from 'react'
import {Text,Flex,Button,Switch,HStack,Icon, Avatar,WrapItem,Container, Input,VStack,InputGroup,InputRightElement,IconButton} from '@chakra-ui/react'
// import { Link } from 'react-router-dom'
import {SearchIcon} from '@chakra-ui/icons'
import { AppContext } from '../../Context/Parentcontext'



const Navbar = () => {
   const {isDark,setIsDark}=useContext(AppContext)
    
  return (
    <div style={{height:"180px"}}>
 
 <HStack width="100%"  justify="space-evenly" alignItems="center" >
    
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

     <Switch  colorScheme='teal' size='lg' />
  <WrapItem>
    <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
  </WrapItem>
   </HStack>
   <Container marginTop="50px" maxW="container.sm">
      <InputGroup>
        <Input placeholder="Search items here" size="md" />
        <InputRightElement>
          <IconButton backgroundColor="rgb(255, 128, 0)" icon={<SearchIcon />} />
        </InputRightElement>
      </InputGroup>
    </Container>
    </div>
  )
}

export default Navbar