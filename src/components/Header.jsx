import React, { Fragment } from 'react';
import {Drawer, 
        DrawerBody, 
        DrawerHeader, 
        DrawerOverlay, 
        DrawerContent, 
        DrawerCloseButton,
        Button,
        useDisclosure,
        VStack,
        HStack,
    } from "@chakra-ui/react";

import {Link} from "react-router-dom";

// importing react icons
import {BiMenuAltLeft} from "react-icons/bi"

const Header = () => {

  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Fragment>
        <Button 
          pos={'fixed'}
          top={'4'}
          left={'4'}
          colorScheme='purple'
          p={'0'}
          w={'10'}
          h={'10'}
          borderRadius={'full'}
          onClick={onOpen}
          zIndex={'overlay'}
        >
            <BiMenuAltLeft size={'20'} />
        </Button>

        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay />
            
            <DrawerContent>
              
              <DrawerCloseButton />
              <DrawerHeader>VIDEO HUB</DrawerHeader>
              
              <DrawerBody>
                <VStack alignItems={'flex-start'}>    {/* display: flex; align-items: center; flex-direction: column; */}
                   <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                      <Link to={'/'}>Home</Link>
                   </Button> 
                   
                   <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                      <Link to={'/videos'}>Videos</Link>
                   </Button> 

                   <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                      <Link to={'/videos?category=free'}>Free Videos</Link>
                   </Button> 

                   <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                      <Link to={'/upload'}>Upload Video</Link>
                   </Button> 
                </VStack>

                <HStack 
                  pos={'absolute'}
                  bottom={'10'}
                  left={'0'}
                  w={'full'}
                  justifyContent={'space-evenly'}
                  > {/* bydefault flex-direction: row; can't change */}
                    <Button onClick={onClose} colorScheme='purple'>
                      <Link to={"/login"}>Log In</Link>
                    </Button>

                    <Button onClick={onClose} variant={'outline'} colorScheme='purple'>
                      <Link to={"/signup"}>Sign Up</Link>
                    </Button>
                </HStack>
              </DrawerBody>

            </DrawerContent>
        </Drawer>
    </Fragment>
  );
};

export default Header;