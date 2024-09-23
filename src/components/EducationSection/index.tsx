import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { TimelineItem } from '../Timeline';
import ufpelLogo from '../../../public/ufpel.png';
import senacLogo from '../../../public/senac.jpg';

const EducationSection = () => {
  return (
    <Flex direction="column"
      alignItems="center"
      p="40px"
      position="relative"
      maxW="900px"
      mx="auto"
    >
      <Heading as="h2" fontSize="24px" mb={16} textAlign="center" color='white'>
        Formação Acadêmica
      </Heading>
      <Box
        mt={5}
        position="absolute"
        top="80px"
        transform="translateX(-50%)"
        w="2px"
        bg='tertiary.500'
        h="85%"
        zIndex={1}
      />
      <TimelineItem
        title="Senac RS"
        role="Tecnologia em Análise e Desenvolvimento de Sistemas"
        description={[
          "Desenvolvi e aperfeiçoei minhas habilidades em desenvolvimento de software Full Stack, abrangendo Backend, Web, Mobile, UI/UX.",
          <>
            🥇 Dezembro de 2023 - Primeiro lugar geral no Hackathon com o projeto
            <a style={{marginLeft: 5, textDecoration:'underline'}} href="https://github.com/neto-virtual/NetoExtension" target="_blank" rel="noopener noreferrer">
              Neto Virtual
            </a>.
          </>,
          <>
            🥈 Dezembro de 2022 - Segundo lugar geral no Hackathon com o projeto 
            <a style={{marginLeft: 5, textDecoration:'underline'}} href="https://github.com/DionataBergmann/easilyMobile" target="_blank" rel="noopener noreferrer" >
               Easily
            </a>.
          </>,
          "💼 Dezembro de 2021 - Fui convidado a estagiar na Brainny pelo CTO da empresa, que também foi meu professor e coordenador."
        ]}
        date="Março 2020 - Dezembro 2023"
        techs={[]}
        logo={senacLogo}
        linkedinUrl=""
        isLeft={false}
      />
      <TimelineItem
        title="Universidade Federal de Pelotas"
        role="Engenharia de Computação"
        description={[
          "Foco em algoritmos, lógica, estruturas de dados.",
          "Decidi transferir meu foco para o curso de Análise e Desenvolvimento de Sistemas no Senac, para alinhar melhor minha formação com minhas oportunidades de trabalho."
        ]}

        date="Março 2019 - Dezembro 2021"
        techs={[]}
        logo={ufpelLogo}
        linkedinUrl="https://www.linkedin.com/school/universidade-federal-de-pelotas/"
        isLeft={true}
      />
    </Flex>
  );
};

export default EducationSection;
