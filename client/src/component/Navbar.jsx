import React,{useContext, useState} from 'react'
import {Text,Flex,Button,Switch,HStack,Icon, Avatar,WrapItem,Container, Input,VStack,InputGroup,InputRightElement,IconButton} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {SearchIcon} from '@chakra-ui/icons'
import { AppContext } from '../../Context/Parentcontext'



const Navbar = () => {
   const {isDark,setIsDark}=useContext(AppContext)
    
  return (
    <div style={{height:"200px",backgroundColor:isDark?"black":"white",color:isDark?"white":'black'}}>
 
 <HStack width="100%" height="80px"  justify="space-evenly" alignItems="center" >
    <Link to={"/Home"}>
    <Text>
        Home
     </Text>
    </Link>
    

     <Text>
        About
     </Text>

    <Link to={"/Product"}>
    <Text>
        Product
     </Text>
    </Link>
     
     <Link to={"/Formpage"}>
     <Button colorScheme='blue'>
        Form
     </Button>
     </Link>

     <Switch onChange={()=>{setIsDark(!isDark)}}  colorScheme='teal' size='lg' />
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