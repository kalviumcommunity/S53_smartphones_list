import { useForm } from 'react-hook-form'
import axios from 'axios';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react';


export default function Formpage() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  
  const onSubmit = (data) => {
    const userData=(sessionStorage.getItem("token"))
    console.log(userData)
    const allData={...data,userData}
    axios
      .post("https://smartphones-list.onrender.com/data",allData
        
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("Error:", error); 
      })
     
  };

  return (
    <div style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl minW={"sm"} isInvalid={errors.name}>
        <FormLabel htmlFor='name'>smartphone name</FormLabel>
        <Input
          id='name'
          placeholder='enter smartphone name'
          {...register('name', {
            required: 'name is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
          <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      
      </FormControl>
      <FormControl maxW={"sm"} isInvalid={errors.name}>
        <FormLabel htmlFor='ram'>smartphone ram</FormLabel>
        <Input
          id='name'
          placeholder='enter ram'
          {...register('ram', {
            required: 'ram is required',
            maxLength: { value: 2, message: ' length should be less than 3 digit' },
          })}
        />
          <FormErrorMessage>
          {errors.ram && errors.ram.message}
        </FormErrorMessage>
      
      </FormControl>
      <FormControl maxW={"sm"} isInvalid={errors.name}>
        <FormLabel htmlFor='rom'>rom</FormLabel>
        <Input
          id='rom'
          placeholder='enter rom'
          {...register('rom', {
            required: 'rom is required',
            maxLength: { value: 4, message: ' length should be less than 5 digit' },
          })}
        />
          <FormErrorMessage>
          {errors.rom && errors.rom.message}
        </FormErrorMessage>
      
      </FormControl>


      <FormControl maxW={"sm"} isInvalid={errors.name}>
        <FormLabel htmlFor=''>Review</FormLabel>
        <Input
          id='review'
          placeholder='enter review'
          {...register('review', {
            required: 'review is required'
          })}
        />
          <FormErrorMessage>
          {errors.review && errors.review.message}
        </FormErrorMessage>
      
      </FormControl>


      <FormControl maxW={"sm"} isInvalid={errors.name}>
        <FormLabel htmlFor='price'>smartphone price</FormLabel>
        <Input
          placeholder='enter price'
          {...register('price', {
            required: 'price is required'
          })}
        />
          <FormErrorMessage>
          {errors.price && errors.price.message}
        </FormErrorMessage>
      
      </FormControl>
      
      <FormControl maxW={"sm"} isInvalid={errors.name}>
        <FormLabel htmlFor='Image'>smartphone image</FormLabel>
        <Input
          placeholder='enter smartphone image'
          {...register('image', {
            required: 'image is required'
          })}
        />
          <FormErrorMessage>
          {errors.image && errors.image.message}
        </FormErrorMessage>
      
      </FormControl>

      <FormControl maxW={"sm"} isInvalid={errors.name}>
        <FormLabel htmlFor='price'>smartphone OS</FormLabel>
        <Input
          placeholder='enter Os'
          {...register('os', {
            required: 'OS is required'
          })}
        />
          <FormErrorMessage>
          {errors.os && errors.os.message}
        </FormErrorMessage>
      
      </FormControl>

      <FormControl maxW={"sm"} isInvalid={errors.name}>
        <FormLabel htmlFor='camera'>smartphone camera</FormLabel>
        <Input
          placeholder='enter camera in MP'
          {...register('camera', {
            required: 'camera is required'
          })}
        />
          <FormErrorMessage>
          {errors.camera && errors.camera.message}
        </FormErrorMessage>
      
      </FormControl>

      <FormControl maxW={"sm"} isInvalid={errors.name}>
        <FormLabel htmlFor='battery'>smartphone battery</FormLabel>
        <Input
          placeholder='enter battery in maH'
          {...register('battery', {
            required: 'battery is required'
          })}
        />
          <FormErrorMessage>
          {errors.battery && errors.battery.message}
        </FormErrorMessage>
      
      </FormControl>
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
    </div>

  )
}