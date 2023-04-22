import Banner from '@Src/components/layout/Banner/Banner';
import Page from '@Src/components/layout/Page/Page';
import { Container, Heading, Stack, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Banner title="LooksRare excercise submission" src={false} />

      <Container maxW="container.xl">
        <Stack padding="32px 0" textAlign="center" alignItems="center">
          <Heading size="xl">About this submission.</Heading>
          <Text mt={2} maxW={500}>
            As you&apos;ve probably noticed, I didn&apos;t use the LR API for checking ownership.
            Now, this might just be me, but I couldn&apos;t find a way to get the owner&apos;s
            address or any other way to verify ownership in the docs, so I connected to Moralis for
            that.
          </Text>
          <Text mt={2} maxW={500}>
            Futhermore, I couldn&apos;t fetch a list of collections or list the tokens within a
            collection. So I resorted to hardcoding some &quot;known&quot; collections and tokens
            within them.
          </Text>

          <Heading size="lg">What can be improved?</Heading>
          <Text mt={2} maxW={500}>
            I really should be routing my calls to Moralis through the nextJS api, since my API key
            is now exposed to anyone looking for it.
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default function HomePage() {
  return (
    <Page>
      <Home />
    </Page>
  );
}
