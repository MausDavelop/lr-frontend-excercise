import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
} from '@chakra-ui/react';
import { FindTokenModalProps } from './FindTokenModal.props';
import { useState } from 'react';
import { useRouter } from 'next/router';

const FindTokenModal = (props: FindTokenModalProps) => {
  const [collectionAddress, setCollectionAddress] = useState('');
  const [tokenId, setTokenId] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/collections/${collectionAddress}/${tokenId}`);
  };

  return (
    <Modal {...props}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Find your collection / NFT</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Stack spacing="4">
            <Input
              placeholder="collection address"
              value={collectionAddress}
              onChange={(e) => setCollectionAddress(e.target.value)}
            />
            <Input
              placeholder="token id"
              value={tokenId}
              onChange={(e) => setTokenId(e.target.value)}
            />
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleSubmit}>Go!</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FindTokenModal;
