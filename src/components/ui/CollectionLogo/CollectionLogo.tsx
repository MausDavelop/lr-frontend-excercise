import Image from 'next/image';
import { CollectionLogoProps } from './CollectionLogo.props';
import { Box, Skeleton, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';

const CollectionLogo = ({
  src,
  size = { base: 100 },
  priority = false,
  ...props
}: CollectionLogoProps) => {
  const [isLoaded, setLoaded] = useState(false);
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
      <Skeleton isLoaded={isLoaded} position="relative" width="100%" height="100%">
        {!!src && (
          <Image
            src={src}
            alt=""
            fill
            priority={priority}
            style={{ objectFit: 'cover' }}
            onLoadingComplete={() => setLoaded(true)}
          />
        )}
      </Skeleton>
    </Box>
  );
};

export default CollectionLogo;
