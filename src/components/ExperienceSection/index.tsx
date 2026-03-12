import { Box, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { TimelineItem } from '../Timeline';
import { useCareerData } from '@/hooks/useCareerData';
import { logoMap, techMap } from '@/constants/assetMaps';

const ExperienceSection = () => {
  const { t } = useTranslation();
  const { experiences } = useCareerData();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      direction="column"
      alignItems="center"
      p={['15px', '40px']}
      mt={['150px', 0, 10, 0]}
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

      {experiences.map((exp, index) => (
        <TimelineItem
          key={exp.id}
          title={exp.title}
          role={exp.role}
          description={exp.description}
          date={exp.date}
          techs={exp.techKeys.map((key) => techMap[key]).filter(Boolean)}
          logo={logoMap[exp.logoKey] ?? logoMap.brainny}
          linkedinUrl={exp.linkedinUrl}
          isLeft={index % 2 === 0}
        />
      ))}
    </Flex>
  );
};

export default ExperienceSection;