import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Signuppage = () => {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://smartphones-list.onrender.com/data/signup", {
        username: data.username,
        password: data.password
      });
      console.log(response)

    } catch (error) {
      console.error(error);
    }
    navigate("/Login");
  };



  return (
    <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
      <div>

        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input name='username' onChange={handleChange} minW={"xm"} type='email' />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input name='password' onChange={handleChange} minW={"xm"} type='password' />
          <FormHelperText>We will never share your password</FormHelperText>
        </FormControl> <br />
        <Button onClick={handleSubmit} colorScheme='orange'>
             Sign up
        </Button>
        <br /><br />
        <Text>
            Already signed up login ?
        </Text>
        <br />
        <Link to={"/Login"}>
        <Button colorScheme='blue'>
          Login
        </Button>
        </Link>
       
      </div>
    </div>
  );
};

export default Signuppage;
