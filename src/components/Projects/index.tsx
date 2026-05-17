import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import ProjectCard from '../ProjectCard';
import { useTranslation } from 'react-i18next';
import { useCareerData } from '@/hooks/useCareerData';

const INITIAL_VISIBLE = 9;

const Projects = () => {
  const { t } = useTranslation();
  const { projects } = useCareerData();
  const [showAll, setShowAll] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE);
  const hasMore = projects.length > INITIAL_VISIBLE;

  return (
    <Flex direction="column" alignItems="center" width="100%" py={isMobile ? 0 : 10}>
      <Heading as="h2" fontSize="24px" mb={10} textAlign="center">
        {t('projects.title')}
      </Heading>
      <Box width={{ base: '90%', md: '70%' }}>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={10}>
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              highlights={project.highlights}
              githubLink={project.githubLink}
              liveUrl={project.liveUrl}
              bgImage={project.bgImage}
              videoUrl={project.videoUrl}
            />
          ))}
        </Grid>

        {hasMore && (
          <Flex justify="center" mt={10}>
            <Button
              variant="outline"
              colorScheme="teal"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? t('projects.showLess') : t('projects.showMore')}
            </Button>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default Projects;
