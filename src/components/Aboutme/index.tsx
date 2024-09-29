import { Flex, Text, Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import Image from 'next/image';
import personalPicture from '../../../public/personalPicture2.png';

const AboutMe = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex flexDir='column'>
      <Heading as="h2" fontSize='24px' mb={0} mt={10} textAlign="center">
        Sobre mim
      </Heading>
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        px={4}
      >
        <Image
          src={personalPicture}
          alt="Dionatã Bergmann"
          width={180}
          height={230}
          style={{
            borderRadius: '20%',
            zIndex: 1,
            marginRight: isMobile ? 0 : '40px',
            marginTop: isMobile ? 40 : 0,
          }} />
        <Flex direction="column" maxW={isMobile ? '90%' : "900px"} marginTop= {isMobile ? 5 : 0}>
          <Text fontSize="18px" color="tertiary.100" textAlign="justify" textIndent="2em">
            Meu primeiro contato com a programação foi em 2015, quando criei um servidor de Minecraft que rapidamente se popularizou. Mas a área de tecnologia não era tão difundida, ainda mais para um jovem do interior. Após concluir o ensino médio em 2017, passei por diversos cursos na tentativa de me encontrar e em 2019 na área da Tecnologia foi onde encontrei a oportunidade de dar vida às minhas ideias e criar soluções inovadoras. Meu objetivo é continuar aprendendo e crescendo como desenvolvedor Frontend, contribuindo para a criação de produtos digitais que façam a diferença.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutMe;
