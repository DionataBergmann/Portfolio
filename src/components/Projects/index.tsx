import { Box, Flex, Grid, Heading, useBreakpointValue } from '@chakra-ui/react';
import ProjectCard from '../ProjectCard';
import { projectsData } from './projectsData'; 

const Projects = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex direction="column" alignItems="center" width="100%" py={isMobile ? 0 : 10}>
      <Heading as="h2" fontSize="24px" mb={10} textAlign="center">
        Meus Projetos
      </Heading>
      <Box width={{ base: '90%', md: '70%' }}>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={10}>
          {projectsData?.map((project, index) => (
            <ProjectCard
              key={index}
              title={project?.title}
              description={project?.description}
              githubLink={project?.githubLink}
              bgImage={project?.bgImage}
              videoUrl={project?.videoUrl}
            />
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};

export default Projects;
