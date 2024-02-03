import React from 'react'
import "./Home.css"
import { useState,useContext } from 'react'
import {Icon} from '@chakra-ui/react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import data from "./Images.json"
import { AppContext } from '../../Context/Parentcontext'

const Home = () => {
  const [value,setValue]=useState(0);
  const {isDark,setIsDark}=useContext(AppContext)
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

    <div style={{backgroundColor:isDark?"black":"white"}}>
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