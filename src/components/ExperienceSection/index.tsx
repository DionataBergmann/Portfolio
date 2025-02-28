import { Box, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import bridgeLogo from '../../../public/bridge.png';
import cigamLogo from '../../../public/cigam.png';
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
  const { t } = useTranslation();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      direction="column"
      alignItems="center"
      p={['15px', '40px']}
      position="relative"
      maxW="900px"
      mx="auto"
    >
      <Heading as="h2" fontSize="24px" mb={isMobile ? 10 : 20} textAlign="center" color="white">
        {t('experience.title')}
      </Heading>
      <Box
        position="absolute"
        top="80px"
        transform="translateX(-50%)"
        w="2px"
        bg="tertiary.500"
        h="90%"
        zIndex={1}
      />

      <TimelineItem
        title={t('experience.cigam.title')}
        role={t('experience.cigam.role')}
        description={t('experience.cigam.description', { returnObjects: true }) as string[]}
        date={t('experience.cigam.date')}
        techs={[rnLogo, tsLogo]}
        logo={cigamLogo}
        linkedinUrl="https://www.linkedin.com/company/erpcigam/posts/?feedView=all"
        isLeft={true}
      />

      <TimelineItem
        title={t('experience.bridge.title')}
        role={t('experience.bridge.role')}
        description={t('experience.bridge.description', { returnObjects: true }) as string[]}
        date=""
        techs={[rnLogo, jsLogo]}
        logo={bridgeLogo}
        linkedinUrl="https://www.linkedin.com/company/bridge-mgmt/posts/?feedView=all"
        isLeft={false}
      />

      <TimelineItem
        title={t('experience.brainny.title')}
        role={t('experience.brainny.role')}
        description={t("experience.brainny.description", { returnObjects: true }) as string[]}
        date={t('experience.brainny.date')}
        techs={[rnLogo, nextJsLogo, tsLogo, nestJsLogo, nodeLogo, graphqlLogo, dockerLogo]}
        logo={brainnyLogo}
        linkedinUrl="https://www.linkedin.com/company/brainnyss/"
        isLeft={true}
      />
    </Flex>
  );
};

export default ExperienceSection;