import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { TimelineItem } from '../Timeline';
import { useCareerData } from '@/hooks/useCareerData';
import { logoMap } from '@/constants/assetMaps';

const EducationSection = () => {
  const { t } = useTranslation();
  const { education } = useCareerData();

  const buildDescription = (item: (typeof education)[0]): (string | React.ReactNode)[] => {
    const desc = item.description;
    const links = item.descriptionLinks ?? [];
    if (links.length === 0) return desc;

    const result: (string | React.ReactNode)[] = [];
    let lastIndex = 0;
    links.forEach((link) => {
      for (let i = lastIndex; i < link.index; i++) result.push(desc[i]);
      result.push(
        <>
          {desc[link.index]}
          <a
            style={{ marginLeft: 5, textDecoration: 'underline' }}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
          .
        </>
      );
      lastIndex = link.index + 1;
    });
    for (let i = lastIndex; i < desc.length; i++) result.push(desc[i]);
    return result;
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      p={['15px', '40px']}
      position="relative"
      maxW="900px"
      mx="auto"
    >
      <Heading as="h2" fontSize="24px" mb={16} textAlign="center" color="white">
        {t('education.title')}
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
      {education.map((edu, index) => (
        <TimelineItem
          key={edu.id}
          title={edu.title}
          role={edu.role}
          description={buildDescription(edu)}
          date={edu.date}
          techs={[]}
          logo={logoMap[edu.logoKey] ?? logoMap.senac}
          linkedinUrl={edu.linkedinUrl}
          isLeft={index % 2 === 0}
        />
      ))}
    </Flex>
  );
};

export default EducationSection;
