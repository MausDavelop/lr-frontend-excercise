import Link from '../Link/Link';
import { CardProps } from './Card.props';
import { Card as BaseCard, CardBody, Heading, Image, Text } from '@chakra-ui/react';

const Card = ({ image, title, href, description }: CardProps) => {
  return (
    <Link href={href} style={{ display: 'flex' }}>
      <BaseCard
        maxWidth="sm"
        cursor="pointer"
        transition="all 200ms"
        _hover={{ transform: 'scale(1.025)', boxShadow: 'xl' }}>
        <CardBody display="flex" flexDir="column">
          <Image
            src={image}
            alt=""
            borderRadius="md"
            height={{ base: '150', md: '200' }}
            objectFit="cover"
          />

          <Heading marginTop="2" mb={description ? 2 : 0} size="md" noOfLines={2}>
            {title}
          </Heading>

          {!!description && (
            <Text marginTop="auto" noOfLines={2}>
              {description}
            </Text>
          )}
        </CardBody>
      </BaseCard>
    </Link>
  );
};

export default Card;
