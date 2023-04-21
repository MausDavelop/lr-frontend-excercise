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
            address or any other way to verify ownership.
          </Text>
          <Text mt={2} maxW={500}>
            Futhermore, I couldn&apos;t fetch a list of collections or list the tokens within a
            collection. So I resorted to hardcoding some &quot;known&quot; collections and tokens
            within them.
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default function CollectionsPage() {
  return (
    <Page>
      <Home />
    </Page>
  );
}
