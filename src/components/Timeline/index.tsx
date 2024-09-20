import { Box, Flex, Heading, Text, HStack, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const TimelineItem = ({ title, role, description, techs, date, logo, isLeft, linkedinUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isMobile = useBreakpointValue({ base: true, sm: true, md: true, lg: false });

  return (
    <Flex
      direction={isMobile ? 'column' : isLeft ? 'row' : 'row-reverse'}
      alignItems="center"
      mb="20px"
      position="relative"
      w="100%"
      p={isMobile ? '10px' : '20px'}
    >
      {isMobile && (
        <Flex
          alignItems="center"
          justifyContent="center"
          mb="16px"
          bg="primary.800"
          borderRadius="full"
          boxSize="60px"
          overflow="hidden"
          border="2px solid"
          borderColor="tertiary.500"
          onClick={() => window.open(linkedinUrl, "_blank")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          cursor="pointer"
        >
          <Image
            src={logo}
            alt={title}
            width={60}
            height={60}
            style={{
              objectFit: 'cover',
              filter: isHovered ? 'brightness(0.5)' : 'none',
              transition: 'filter 0.3s ease',
              zIndex: 1
            }}
          />
          {isHovered && (
            <FaExternalLinkAlt
              color="white"
              size={16}
              style={{ position: 'relative', zIndex: 1 }}
            />
          )}
        </Flex>
      )}

      <Box flex={isMobile ? 'none' : '1'} />

      <Box
        p="20px"
        bg="tertiary.900"
        borderRadius="md"
        boxShadow="md"
        maxW="600px"
        ml={isMobile ? 0 : isLeft ? '460px' : '-220px'}
        mr={isMobile ? 0 : isLeft ? '-220px' : '460px'}
        zIndex={1}
      >
        {!isMobile && (
          <Flex
            position="absolute"
            left="50%"
            top="45%"
            transform="translateX(-50%)"
            bg="primary.800"
            borderRadius="full"
            boxSize="45px"
            zIndex={2}
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
            border='2px solid'
            borderColor='tertiary.500'
            onClick={() => window.open(linkedinUrl, "_blank")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            cursor="pointer"
          >
            <Image
              src={logo}
              alt={title}
              width={55}
              height={55}
              style={{
                objectFit: 'cover',
                filter: isHovered ? 'brightness(0.5)' : 'none',
                transition: 'filter 0.3s ease',
              }}
            />
            {isHovered && (
              <FaExternalLinkAlt
                color="white"
                size={16}
                style={{ position: 'relative', zIndex: 1 }}
              />
            )}
          </Flex>
        )}

        <Heading as="h3" size="lg" color="tertiary.200" fontSize="22px">{title}</Heading>
        <Text fontSize="18px" color="tertiary.200" mb="8px">{role}</Text>
        <Box fontSize="18px" color="gray.300" mb="16px">
          {description.map((desc, index) => (
            <Text textAlign='justify' lineHeight={1.6} marginBottom={5} key={index}>● {desc}</Text>
          ))}
        </Box>
        <Text fontSize="14px" color="gray.500" mb="16px">{date}</Text>
        <HStack mt="8px">
          {techs.map((tech, index) => (
            <Image key={index} src={tech} alt="tech" width={30} height={30} />
          ))}
        </HStack>
      </Box>
    </Flex>
  );
};
