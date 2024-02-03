import React from "react";
import "./Footer.css";
import { Image, HStack, VStack, Icon, Text,Box } from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <HStack>
        <VStack  className="Vstack-footer">
          <HStack>
            <Box className="icon">
                <Icon as={MdLocationPin} color="white" w={10} h={10} />
            </Box>
            <Box className="icon-texts">
             <Text>
             LPU , phagwara ,Punjab, <br />
              India
             </Text>
            </Box>
          </HStack>


          <HStack>
            <Box className="icon">
                <Icon as={FaPhoneAlt} color="white" w={10} h={8} />
            </Box>
            <Box className="icon-texts">
             <Text>
             9234440694
             </Text>
            </Box>
          </HStack>

          <HStack>
            <Box className="icon">
                <Icon as={SiGmail} color="white" w={10} h={8} />
            </Box>
            <Box className="icon-texts">
             <Text>
              addarshkumar2005@gmail.com
             </Text>
            </Box>
          </HStack>

        </VStack>
        <VStack  className="Vstack-footer">
          <Text>
            About the website
          </Text>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Modi fugit aperiam quibusdam culpa porro incidunt recusandae <br /> officiis aspernatur soluta! Nihil fugiat ullam architecto beatae <br /> temporibus at veritatis deserunt, perferendis minima?
          </Text>
          <HStack>
          <Box className="icon">
                <Icon as={FaFacebook} color="white" w={10} h={8} />
            </Box>


          <Box className="icon">
                <Icon as={FaInstagram} color="white" w={10} h={8} />
            </Box>


          <Box className="icon">
                <Icon as={FaTwitter} color="white" w={10} h={8} />
            </Box>


          <Box className="icon">
                <Icon as={FaGithub} color="white" w={10} h={8} />
            </Box>
          </HStack>
            
        </VStack>
      </HStack>
    </div>
  );
};

export default Footer;
