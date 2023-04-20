import Link from '../Link/Link';
import { CardProps } from './Card.props';
import { Card as BaseCard, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';

const Card = ({ image, title, href, description }: CardProps) => {
  return (
    <Link href={href}>
      <BaseCard
        maxW="sm"
        margin="8px"
        cursor="pointer"
        transition="all 200ms"
        _hover={{ transform: 'scale(1.025)', boxShadow: 'xl' }}>
        <CardBody>
          <Image src={image} alt="" borderRadius="md" />

          <Heading mt="2" size="md">
            {title}
          </Heading>

          {!!description && (
            <Text mt="2" noOfLines={2}>
              {description}
            </Text>
          )}
        </CardBody>
      </BaseCard>
    </Link>
  );
};

export default Card;
