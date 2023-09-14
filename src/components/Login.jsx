import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react';

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack 
                spacing={'8'}
                alignItems={'stretch'}
                m={'auto'}
                my={'16'}
                w={['full', '96']}
            >

                <Heading >Welcome Back <span style={{color: '#a855f7'}}>| VIDEO HUB</span> </Heading>
                
                <Input 
                    placeholder={'Email'}
                    type={'email'}
                    required
                    focusBorderColor={'purple.500'}
                />

                <Input 
                    placeholder={'Password'}
                    type={'password'}
                    required
                    focusBorderColor={'purple.500'}
                />

                <Button variant={'link'} alignSelf={'flex-end'}>
                    <Link to={'/forgetpassword'}>Forget Password?</Link>
                </Button>

                <Button colorScheme={'purple'} type={'submit'}>
                    Log In
                </Button>

                <Text textAlign={'right'}>
                    New User? {" "}
                    <Button variant={'link'} colorScheme={'purple'}>
                    <Link to={'/signup'}>Sign Up</Link>
                </Button>
                </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default Login