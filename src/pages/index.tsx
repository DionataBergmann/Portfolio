import AboutSection from "@/components/About";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Projects from "@/components/Projects";
import { Flex, Box } from "@chakra-ui/react";
import About from "@/components/About";
import AboutMe from "@/components/Aboutme";

const HomePage = () => {
  return (
    <Flex direction="column" >
      <Box id="home" className="observe-section">
        <About />
      </Box>
      <Box id="experiencia" className="observe-section">
       <ExperienceSection />
      </Box>
      <Box id="educacao" className="observe-section">
       <EducationSection />
      </Box>
      <Box id="projetos" className="observe-section">
        <Projects />
      </Box>
      <Box id="sobre" className="observe-section">
       <AboutMe />
      </Box>
      <Box id="contato" className="observe-section">
       <ContactSection />
      </Box>
    </Flex>
  );
};

export default HomePage;
