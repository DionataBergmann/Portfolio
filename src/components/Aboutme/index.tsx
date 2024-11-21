import { Flex, Text, Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import Image from 'next/image';
import { useTranslation } from "react-i18next";
import personalPicture from '../../../public/personalPicture2.png';

const AboutMe = () => {
  const { t } = useTranslation();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex flexDir='column'>
      <Heading as="h2" fontSize='24px' mb={0} mt={10} textAlign="center">
        {t('aboutMe.title')}
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        px={4}
      >
        <Image
          src={personalPicture}
          alt={t('aboutMe.imageAlt')}
          width={180}
          height={230}
          style={{
            borderRadius: '20%',
            zIndex: 1,
            marginRight: isMobile ? 0 : '40px',
            marginTop: isMobile ? 40 : 0,
          }}
        />
        <Flex
          direction="column"
          maxW={isMobile ? '95%' : "900px"}
          mt={isMobile ? 5 : 0}
        >
          <Text
            fontSize="18px"
            color="tertiary.100"
            textAlign="justify"
            lineHeight={1.8} 
            textIndent={isMobile ? "1em" : "2em"} 
          >
            {t('aboutMe.description')}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutMe;
