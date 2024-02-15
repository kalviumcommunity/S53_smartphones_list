import React, { useState } from 'react';
import axios from 'axios';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button
} from '@chakra-ui/react';

const Loginpage = () => {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://smartphones-list.onrender.com/data/login", {
        username: data.username,
        password: data.password
      });
      console.log(response)
      document.cookie = `token=${response.data.token};expires=Thu, 18 Dec 2025 12:00:00 UTC`;

    } catch (error) {
      console.error(error);
    }
  };

  const deleteCookie = () => {
    document.cookie = `token=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
      <div>

        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input name='username' onChange={handleChange} minW={"md"} type='email' />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input name='password' onChange={handleChange} minW={"md"} type='password' />
          <FormHelperText>We will never share your password</FormHelperText>
        </FormControl> <br />
        <Button onClick={handleSubmit} colorScheme='blue'>
          Login
        </Button>
        <br />
        <br />
        <Button onClick={deleteCookie} colorScheme='blue'>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Loginpage;
