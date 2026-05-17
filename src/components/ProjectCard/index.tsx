import {
  Box,
  Text,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  IconButton,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { MdSlowMotionVideo } from 'react-icons/md';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { RxExternalLink } from 'react-icons/rx';
import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  githubLink: string;
  liveUrl?: string;
  videoUrl: string;
  secondaryAction?: () => void;
  secondaryLabel?: string;
  bgImage?: string;
}

const openExternal = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  highlights,
  githubLink,
  liveUrl,
  videoUrl,
  secondaryAction,
  secondaryLabel = 'Outro Botão',
  bgImage,
}) => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

  const showDetailsButton =
    !videoUrl && Boolean(description || (highlights && highlights.length > 0));

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
        <Box p={4}>
          <Text color="white" fontWeight="bold">
            {title}
          </Text>
          {subtitle && (
            <Text color="gray.300" fontSize="xs" mt={1}>
              {subtitle}
            </Text>
          )}
        </Box>
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
          <Flex flexWrap="wrap" gap={2} justify="center" px={2}>
            {liveUrl && (
              <Button
                leftIcon={<HiOutlineGlobeAlt />}
                rightIcon={<RxExternalLink />}
                colorScheme="gray"
                variant="solid"
                size="sm"
                onClick={() => openExternal(liveUrl)}
              >
                {t('projects.visitSite')}
              </Button>
            )}
            {videoUrl && (
              <Button
                leftIcon={<MdSlowMotionVideo />}
                colorScheme="gray"
                variant="solid"
                size="sm"
                onClick={onOpen}
              >
                Demo
              </Button>
            )}
            {showDetailsButton && (
              <Button colorScheme="gray" variant="solid" size="sm" onClick={onOpen}>
                {t('projects.details')}
              </Button>
            )}
            <Button
              leftIcon={<FaGithub />}
              rightIcon={<RxExternalLink />}
              colorScheme="gray"
              variant="solid"
              size="sm"
              onClick={() => openExternal(githubLink)}
            >
              GitHub
            </Button>
          </Flex>
          {secondaryAction && (
            <Button colorScheme="teal" variant="solid" onClick={secondaryAction} mt={2}>
              {secondaryLabel}
            </Button>
          )}
        </Flex>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="auto" backdropBlur="5px" />
        <ModalContent minW={[350, 550, 700, 900, 1200]} bgColor="tertiary.800">
          <ModalCloseButton zIndex={1} color="white" />
          <ModalBody
            p={isMobile ? 2 : 10}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgColor="tertiary.800"
            rounded={15}
          >
            <Box
              flexDir="column"
              w="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Flex
                align="center"
                justify="center"
                flexWrap="wrap"
                gap={2}
                mt={isMobile ? 0 : -3}
                mb={4}
              >
                <Text fontWeight="bold" textDecoration="underline">
                  {title}
                </Text>
                {liveUrl && (
                  <IconButton
                    aria-label={t('projects.visitSite')}
                    icon={<HiOutlineGlobeAlt size={20} />}
                    variant="ghost"
                    color="white"
                    size="sm"
                    _hover={{ bg: 'transparent', color: 'primary.300' }}
                    onClick={() => openExternal(liveUrl)}
                  />
                )}
                <IconButton
                  aria-label="GitHub"
                  icon={<FaGithub size={20} />}
                  variant="ghost"
                  color="white"
                  size="sm"
                  _hover={{ bg: 'transparent', color: 'primary.300' }}
                  onClick={() => openExternal(githubLink)}
                />
              </Flex>
              {description && (
                <Box borderBottom="1px solid" mb={5} p={2} width="100%">
                  <Text textAlign="justify" textIndent="30px">
                    {description}
                  </Text>
                </Box>
              )}
              {highlights && highlights.length > 0 && (
                <Box as="ul" mb={5} px={4} textAlign="left" width="90%">
                  {highlights.map((item) => (
                    <Box as="li" key={item} mb={1}>
                      <Text fontSize="sm">{item}</Text>
                    </Box>
                  ))}
                </Box>
              )}
              {videoUrl && (
                <ReactPlayer
                  url={videoUrl}
                  width="90%"
                  height={isMobile ? '30vh' : '60vh'}
                  controls={true}
                  playing={isOpen}
                />
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectCard;
