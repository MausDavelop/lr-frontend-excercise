import Image from 'next/image';
import { CollectionLogoProps } from './CollectionLogo.props';
import { Box, useColorModeValue } from '@chakra-ui/react';

const CollectionLogo = ({
  src,
  size = { base: 100 },
  priority = false,
  ...props
}: CollectionLogoProps) => {
  const borderColor = useColorModeValue('white', 'gray.800');

  return (
    <Box
      position="relative"
      display="inline-block"
      borderRadius="50%"
      overflow="hidden"
      width={size}
      height={size}
      borderWidth="8px"
      borderColor={borderColor}
      boxShadow="lg"
      {...props}>
      <Image src={src} alt="" fill priority={priority} style={{ objectFit: 'cover' }} />
    </Box>
  );
};

export default CollectionLogo;
