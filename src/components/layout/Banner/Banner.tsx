import { Box, Heading, Skeleton, SkeletonText, useColorModeValue } from '@chakra-ui/react';
import { BannerProps } from './Banner.props';
import Image from 'next/image';
import Link from '@Src/components/ui/Link/Link';
import { useState } from 'react';

const Banner = ({ src, title, href }: BannerProps) => {
  const [isLoaded, setLoaded] = useState(false);
  const backgroundColor = useColorModeValue('gray.400', 'gray.900');
  const overlayColor = useColorModeValue('whiteAlpha.600', 'blackAlpha.800');
  const titleColor = useColorModeValue('gray.800', 'gray.300');

  return (
    <Box
      height={{ base: 250, md: 400 }}
      overflow="hidden"
      position="relative"
      backgroundColor={backgroundColor}
      zIndex={0}>
      <Box position="absolute" inset="0" backgroundColor={overlayColor} zIndex={-1} />

      {src !== false && (
        <Skeleton isLoaded={isLoaded} width="100%" height="100%" position="relative" zIndex={-2}>
          {!!src && (
            <Image
              src={src}
              alt=""
              fill
              priority
              style={{ objectFit: 'cover', zIndex: -2 }}
              onLoadingComplete={() => setLoaded(true)}
            />
          )}
        </Skeleton>
      )}

      {!!title && (
        <Link href={href}>
          <Heading
            fontSize={{ base: '4xl', md: '6xl' }}
            color={titleColor}
            fontWeight="black"
            textAlign="center"
            position="absolute"
            top="50%"
            left={16}
            right={16}
            transform={{
              base: `translateY(-35%)`,
              md: `translateY(-50%)`
            }}>
            {title}
          </Heading>
        </Link>
      )}
    </Box>
  );
};

export default Banner;
