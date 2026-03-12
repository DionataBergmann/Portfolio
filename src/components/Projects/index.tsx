import { Box, Flex, Grid, Heading, useBreakpointValue } from '@chakra-ui/react';
import ProjectCard from '../ProjectCard';
import { useTranslation } from 'react-i18next';
import { useCareerData } from '@/hooks/useCareerData';

const Projects = () => {
  const { t } = useTranslation();
  const { projects } = useCareerData();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex direction="column" alignItems="center" width="100%" py={isMobile ? 0 : 10}>
      <Heading as="h2" fontSize="24px" mb={10} textAlign="center">
        {t('projects.title')}
      </Heading>
      <Box width={{ base: '90%', md: '70%' }}>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={10}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              bgImage={project.bgImage}
              videoUrl={project.videoUrl}
            />
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};

export default Projects;
