import { Button,  Container, StackDivider, Text, VStack } from '@chakra-ui/react';
import Profile from './Profile';
import OtherSection from './OtherSection';

function Home() {
  return (
    <Container centerContent height={'2000px'} maxWidth={'container.md'}>
      <VStack spacing={8} divider={<StackDivider/>} width={'100%'}>
        <Profile/>
        <Text>{'Hello there this a some text in a Container'}</Text>
        <Button variant={'solid'}>
          {'Button'}
        </Button>
        <OtherSection/>
      </VStack>
    </Container>
  );
}

export default Home;
