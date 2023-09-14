import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

// importing carousel
import { Carousel } from 'react-responsive-carousel';

// importing carousel css
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// images defined that used in carousel below
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png'; // vector graphic img

// object of heading options that used in carousel below
const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '2xl',
};

const Home = () => {
  return (
    <Box> {/* is nothing but the div */}
      {/* This is carousel */}
      <MyCarousel />

      <Container minH={'100vh'} maxW={'container.xl'} p="16">
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          borderBottom={'2px solid'}
          w={'fit-content'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']} // Responsiveness will be handled like column==> mobile & row==> laptop or tab
        >
          <Image
            src={img5}
            h={['40', '400']}
            filter={'hue-rotate(-130deg)'}
          ></Image>

          <Text 
            letterSpacing={'widest'} 
            lineHeight={'190%'} 
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            pariatur, quisquam delectus, nemo nisi odit accusantium explicabo
            similique veritatis laborum laudantium reprehenderit corrupti libero
            suscipit iure aliquam eius soluta magni quod officia temporibus.
            Voluptatibus vero veniam itaque, nihil deleniti nemo ad dolorem
            dolorum doloribus nesciunt modi enim. Ducimus vitae, deserunt dolor
            numquam voluptas in laudantium recusandae aspernatur perferendis
            sunt veniam voluptatibus, commodi porro quae odit. Accusantium nam
            qui iure vero aut in blanditiis asperiores libero nulla, consectetur
            aliquam quae voluptas vitae repudiandae dolorum fugit odio sit
            beatae optio, ex, doloremque pariatur suscipit obcaecati laborum!
            Soluta quibusdam laborum tenetur iure at.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={3000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the Future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
