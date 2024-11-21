import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { TimelineItem } from '../Timeline';
import senacLogo from '../../../public/senac.jpg';
import ufpelLogo from '../../../public/ufpel.png';

const EducationSection = () => {
  const { t } = useTranslation();

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
      <TimelineItem
        title={t('education.senac.title')}
        role={t('education.senac.role')}
        description={[
          t('education.senac.description.0'),
          <>
            {t('education.senac.description.1')}
            <a
              style={{ marginLeft: 5, textDecoration: 'underline' }}
              href="https://github.com/neto-virtual/NetoExtension"
              target="_blank"
              rel="noopener noreferrer"
            >
              Neto Virtual
            </a>
            .
          </>,
          <>
            {t('education.senac.description.2')}
            <a
              style={{ marginLeft: 5, textDecoration: 'underline' }}
              href="https://github.com/DionataBergmann/easilyMobile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Easily
            </a>
            .
          </>,
          t('education.senac.description.3')
        ]}
        date={t('education.senac.date')}
        techs={[]}
        logo={senacLogo}
        linkedinUrl=""
        isLeft={false}
      />
      <TimelineItem
        title={t('education.ufpel.title')}
        role={t('education.ufpel.role')}
        description={t('education.ufpel.description', { returnObjects: true }) as string[]}
        date={t('education.ufpel.date')}
        techs={[]}
        logo={ufpelLogo}
        linkedinUrl="https://www.linkedin.com/school/universidade-federal-de-pelotas/"
        isLeft={true}
      />
    </Flex>
  );
};

export default EducationSection;
