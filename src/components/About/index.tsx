import { Box, Button, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from 'next/image';
import iosLogo from '../../../public/ios.png';
import androidLogo from '../../../public/android.png';
import windowsLogo from '../../../public/windows.png';
import personalPicture from '../../../public/personalPicture2.png';
import { useRouter } from 'next/router';
import { useTranslation } from "react-i18next";

const About = () => {
  const router = useRouter();
  const isMobile = useBreakpointValue({ base: true, sm: false, md: false });

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
    </Flex >
  );
};

export default About;
