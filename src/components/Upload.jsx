import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'

// importing icon
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
            <AiOutlineCloudUpload size={'10vmax'} />

            <form>
                <HStack>
                    <Input 
                        required 
                        cursor={'pointer'}
                        type={'file'}
                        css={{
                            '&::file-selector-button': {
                                border: 'none',
                                color: 'purple',
                                backgroundColor: 'white',
                                // width: 'calc(100% + 36px)',
                                height: '100%',
                                marginLeft: '-18px',
                            }
                        }}
                    />
                    <Button colorScheme={'purple'} type={'submit'}>
                        Upload
                    </Button>
                </HStack>
            </form>
        </VStack>
    </Container>
  )
}

export default Upload