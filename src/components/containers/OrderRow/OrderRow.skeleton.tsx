import {
  Box,
  BoxProps,
  SkeletonCircle,
  SkeletonText,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';

const SkeletonOrderRow = (props: BoxProps) => {
  return (
    <Box
      borderRadius="md"
      boxShadow="md"
      padding="4"
      backgroundColor={useColorModeValue('white', 'gray.700')}
      {...props}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'start', md: 'center' }}
        spacing="4">
        <SkeletonCircle width="48px" height="48px" />

        <Stack flex="1" spacing="2" width="100%">
          <SkeletonText maxW="300" skeletonHeight={{ base: '4', md: '6' }} noOfLines={1} />
          <SkeletonText
            maxW="500"
            skeletonHeight={{ base: '2', md: '3' }}
            noOfLines={{ base: 2, md: 1 }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default SkeletonOrderRow;
