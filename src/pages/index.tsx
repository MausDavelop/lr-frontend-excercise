import Banner from '@Src/components/layout/Banner/Banner';
import Page from '@Src/components/layout/Page/Page';
import { Container, Heading, Stack, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Banner title="LooksRare excercise submission" src={false} />

      <Container maxWidth="container.xl">
        <Stack padding="32px 0" textAlign="center" alignItems="center">
          <Heading size="xl">About this submission.</Heading>
          <Text marginTop={2} maxWidth={500}>
            As you&apos;ve probably noticed, I didn&apos;t use the LR API for checking ownership.
            Now, this might just be me, but I couldn&apos;t find a way to get the owner&apos;s
            address or any other way to verify ownership in the docs, so I connected to Moralis for
            that.
          </Text>
          <Text marginTop={2} maxWidth={500}>
            Futhermore, I couldn&apos;t fetch a list of collections or list the tokens within a
            collection. So I resorted to hardcoding some &quot;known&quot; collections and tokens
            within them.
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
