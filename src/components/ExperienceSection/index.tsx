import { Box, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';

import bridgeLogo from '../../../public/bridge.png';
import brainnyLogo from '../../../public/brainny.png';
import rnLogo from '../../../public/react_native.png';
import jsLogo from '../../../public/js.png';
import tsLogo from '../../../public/ts.png';
import nextJsLogo from '../../../public/nextjs.png';
import nestJsLogo from '../../../public/nestjs.png';
import nodeLogo from '../../../public/node.png';
import graphqlLogo from '../../../public/graphql.png';
import dockerLogo from '../../../public/docker.png';

import { TimelineItem } from '../Timeline';

const ExperienceSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      direction="column"
      alignItems="center"
      p={['20px', '40px']}
      position="relative"
      maxW="900px"
      mx="auto"
    >
      <Heading as="h2" fontSize="24px" mb={isMobile ? 10 : 20} textAlign="center" color='white'>
        Experiência Profissional
      </Heading>
      <Box
        position="absolute"
        top="80px"
        transform="translateX(-50%)"
        w="2px"
        bg='tertiary.500'
        h="90%"
        zIndex={1}
      />

      <TimelineItem
        title="Bridge MT como Outsourcing"
        role="Desenvolvedor Frontend Mobile"
        description={[
          "Atuação em projetos internacionais.",
          "Desenvolvimento e manutenção de aplicativos Android e iOS utilizando React Native em uma base de código de mais de 8 anos.",
          "Recuperação e republicação de um aplicativo obsoleto (SDK 27), realizando as atualizações necessárias para torná-lo novamente compatível com os requisitos das lojas (SDK 34).",
          "Implementação de melhorias de UX, usabilidade e responsividade.",
          "Alteração da identidade visual, incluindo a redefinição de temas, imagens e layout.",
          "Atualização de bibliotecas e dependências para garantir a conformidade com as versões mais recentes do SDK, atendendo aos requisitos das lojas."
        ]}
        date=""
        techs={[rnLogo, jsLogo]}
        logo={bridgeLogo}
        linkedinUrl='https://www.linkedin.com/company/bridge-mgmt/posts/?feedView=all'
        isLeft={false}
      />

      <TimelineItem
        title="Brainny Smart Solutions"
        role="Desenvolvedor Frontend"
        description={[
          "Atuação em mais de 15 projetos de diferentes propostas, incluindo projetos com média de 3 mil acessos diários, garantindo estabilidade, escalabilidade e otimização de performance.",
          "Desenvolvimento e manutenção Full Stack de aplicações web responsivas e mobile utilizando React.js, NextJS, React Native e NestJS, com foco principal em Frontend. ",
          "Implementação de melhorias de UX e usabilidade, focando na criação de interfaces intuitivas e eficientes.",
          "Publicações e atualização de aplicações mobile na Play Store e App Store.",
          "Trabalho direto com clientes para manutenção contínua e conforme necessário de uma aplicação com usuários internacionais.",
          "Colaboração com equipes ágeis utilizando a metodologia Scrum para garantir a entrega contínua e melhorias iterativas. ",
        ]}
        date="Dezembro 2021 - Agosto 2024"
        techs={[rnLogo, nextJsLogo, tsLogo, nestJsLogo, nodeLogo, graphqlLogo, dockerLogo]}
        logo={brainnyLogo}
        linkedinUrl='https://www.linkedin.com/company/brainnyss/'
        isLeft={true}
      />
    </Flex>
  );
};

export default ExperienceSection;