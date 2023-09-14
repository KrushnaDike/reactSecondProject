import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

// importing react icons
import { AiOutlineSend } from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>

        {/* First vsctack --> start */}
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
            Subscribe to get updates
          </Heading>

          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input 
              placeholder='Enter Email Here...'
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />

            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0px 20px 20px 0px'}
            >
              <AiOutlineSend size={'20'}/>
            </Button>
          </HStack>
        </VStack>

        {/* Second vstack --> middle */}
        <VStack 
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Video Hub
          </Heading>

          <Text>All rights reserved!</Text>
        </VStack>

        {/* Third vstack --> end */}
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>

          <Button variant={'link'} colorScheme={"purple"}>
            <a href="https://www.youtube.com/channel/UCxqzwxKnQZVragKZRR8xuww" target={'Blank'}>YouTube</a>
          </Button>

          <Button variant={'link'} colorScheme={"purple"}>
            <a href="https://www.instagram.com/krushna_dike_patil" target={'Blank'}>Instagram</a>
          </Button>

          <Button variant={'link'} colorScheme={"purple"}>
            <a href="https://github.com/KrushnaDike" target={'Blank'}>GitHub</a>
          </Button>
          <Button variant={'link'} colorScheme={"purple"}>
            <a href="https://www.linkedin.com/in/krushnadike/" target={'Blank'}>LinkedIn</a>
          </Button>
        </VStack>

      </Stack>
    </Box>
  )
};

export default Footer;