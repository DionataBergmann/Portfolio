import { Box, Text, Button, Flex, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { MdSlowMotionVideo } from 'react-icons/md';
import { RxExternalLink } from 'react-icons/rx';
import ReactPlayer from 'react-player';

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
  videoUrl: string;
  secondaryAction?: () => void;
  secondaryLabel?: string;
  bgImage?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  githubLink,
  videoUrl,
  secondaryAction,
  secondaryLabel = "Outro Botão",
  bgImage,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <Box
        w="100%"
        h="250px"
        bgImage={bgImage}
        bgSize="cover" 
        bgPosition="center" 
        bgRepeat="no-repeat"
        borderRadius="md"
        position="relative"
        overflow="hidden"
        boxShadow="lg"
        border="2px solid"
        borderColor="tertiary.500"
        role="group"
        _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease-in-out' }}
      >
        <Text color="white" p={4} fontWeight='bold'>
          {title}
        </Text>
        <Flex
          direction="column"
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          justify="center"
          align="center"
          bg="rgba(0, 0, 0, 0.7)"
          opacity="0"
          transition="opacity 0.3s ease-in-out"
          _groupHover={{ opacity: 1 }}
        >
          <Flex flexDirection='row' >
            <Button
              leftIcon={<MdSlowMotionVideo />}
              colorScheme="gray"
              variant="solid"
              size='sm'
              onClick={handleOpen}
            >
              Demo
            </Button>
            <Button
              leftIcon={<FaGithub />}
              rightIcon={<RxExternalLink />}
              colorScheme="gray"
              variant="solid"
              size='sm'
              ml={5}
              onClick={() => window.open(githubLink)}
            >
              GitHub
            </Button>
          </Flex>
          {secondaryAction && (
            <Button colorScheme="teal" variant="solid" onClick={secondaryAction}>
              {secondaryLabel}
            </Button>
          )}
        </Flex>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          backdropFilter='auto'
          backdropBlur='5px'
        />
        <ModalContent minW={[350, 550, 700, 900, 1200]} bgColor='tertiary.800'>
          <ModalCloseButton zIndex={1} color='white' />
          <ModalBody p={10} display="flex" alignItems="center" justifyContent="center" bgColor='tertiary.800' rounded={15}>
            <Box flexDir='column' w='100%' display="flex" alignItems="center" justifyContent="center">
              <Box display="flex" flexDir="row" alignItems="center" mt={-3}>
                <Text fontWeight="bold" textDecoration='underline'>
                  {title}
                </Text>
                <Button
                  rightIcon={<RxExternalLink />}
                  size="lg"
                  colorScheme="none"
                  onClick={() => window.open(githubLink)}
                  ml={-4}
                />
              </Box>
            <Box borderBottom='1px solid' mb={5} p={2}>
            <Text textAlign='justify' textIndent="30px">
                {description}
              </Text>
            </Box>
              <ReactPlayer
                url={videoUrl}
                width="90%"
                height="60vh"
                controls={true}
                playing={isOpen}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectCard;
