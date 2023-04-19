import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { BannerProps } from './Banner.props';
import Image from 'next/image';
import { navbarHeight } from '@Src/theme/themeContants';
import Link from 'next/link';
import { ReactNode } from 'react';

const TitleWrapper = ({ href, children }: { href?: string; children?: ReactNode }) => {
  if (href) {
    return <Link href={href}>{children}</Link>;
  }

  return <>{children}</>;
};

const Banner = ({ src, title, href }: BannerProps) => {
  const overlayColor = useColorModeValue('whiteAlpha.600', 'blackAlpha.800');
  const titleColor = useColorModeValue('gray.800', 'gray.300');

  return (
    <Box height={{ base: 250, md: 400 }} overflow="hidden" position="relative">
      <Box position="absolute" inset="0" backgroundColor={overlayColor} zIndex={-1} />

      <Image src={src} alt="" fill priority style={{ objectFit: 'cover', zIndex: -2 }} />

      {!!title && (
        <TitleWrapper href={href}>
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
              md: `translateY(-65%)`
            }}>
            {title}
          </Heading>
        </TitleWrapper>
      )}
    </Box>
  );
};

export default Banner;
