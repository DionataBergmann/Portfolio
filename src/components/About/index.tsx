import { Box, Button, Flex, HStack, IconButton, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from 'next/image';
import iosLogo from '../../../public/ios.png';
import androidLogo from '../../../public/android.png';
import windowsLogo from '../../../public/windows.png';
import personalPicture from '../../../public/personalPicture2.png';
import { useRouter } from 'next/router';
import { useTranslation } from "react-i18next";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {
  const router = useRouter();
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });

  const { t } = useTranslation();

  return (
    <Flex direction="column" alignItems="center" mt={24} position="relative" height="250px" mb={370} >
      <Box
        position="relative"
        borderRadius="30%"
        border="2px solid #05131e"
        padding="8px"
        mb={4}
      >
        <Image
          src={personalPicture}
          alt="Dionatã Bergmann"
          width={isMobile ? 200 : 250}
          height={isMobile ? 200 : 250}
          style={{
            borderRadius: '30%',
            zIndex: 1,
          }}
        />
      </Box>
      <Image
        src={androidLogo}
        alt="Android"
        width={40}
        height={40}
        style={{
          position: 'absolute',
          top: '0px',
          left: isMobile ? 'calc(50% - 160px)' : 'calc(50% - 200px)',
          borderRadius: '50%',
          zIndex: 0,
          minHeight: 30,
          minWidth: 30
        }}
      />
      <Image
        src={windowsLogo}
        alt="Windows"
        width={40}
        height={40}
        style={{
          position: 'absolute',
          top: isMobile ? '-70px' : '-80px',
          left: 'calc(50% - 15px)',
          borderRadius: '50%',
          zIndex: 0,
          minHeight: 30,
          minWidth: 30
        }}
      />
      <Image
        src={iosLogo}
        alt="Apple"
        width={40}
        height={40}
        style={{
          position: 'absolute',
          top: '0px',
          left: isMobile ? 'calc(50% + 130px)' : 'calc(50% + 170px)',
          borderRadius: '50%',
          zIndex: 0,
          minHeight: 30,
          minWidth: 30
        }}
      />

      <Text fontSize="24px" fontWeight="bold" color="white" mt={10} align="center" maxW="90%">
        {t("greeting")}
      </Text>
      <Text fontSize="lg" color="white" textAlign={["justify", "center"]} w={{ base: "90%", md: "80%" }} lineHeight={1.6}>
        {t("description")}
      </Text>

      <HStack spacing={6} mt={[10, 10, 6, 6]}>
        <Link href="https://www.instagram.com/dionatabergmann/" isExternal>
          <IconButton
            aria-label="Instagram"
            icon={<FaInstagram />}
            variant="ghost"
            color="white"
            _hover={{ color: 'gray.400', transform: 'scale(1.2)' }}
            fontSize="26px"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/dionat%C3%A3-bergmann-a98387208/" isExternal>
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            variant="ghost"
            color="white"
            _hover={{ color: 'gray.400', transform: 'scale(1.2)' }}
            fontSize="26px"
          />
        </Link>
        <Link href="https://github.com/DionataBergmann" isExternal>
          <IconButton
            aria-label="GitHub"
            icon={<FaGithub />}
            variant="ghost"
            color="white"
            _hover={{ color: 'gray.400', transform: 'scale(1.2)' }}
            fontSize="26px"
          />
        </Link>
      </HStack>
    </Flex >
  );
};

export default About;
