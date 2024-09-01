import { Box, Flex, Text } from "@chakra-ui/react";
import CustomButton from "../Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Header() {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      if (activeButton) {
        setTimeout(() => {
          const element = document.getElementById(activeButton);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 300); 
      }
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [activeButton, router.events]);

  const handleActivate = (scrollToId: string) => {
    if (router.pathname !== "/") {
      router.push("/").then(() => {
        setActiveButton(scrollToId);
      });
    } else {
      setActiveButton(scrollToId);
    }
  };

  return (
    <Flex
      as="header"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      bg="tertiary.900"
      zIndex="1000"
      p={1}
      alignItems="center"
      justifyContent="space-around"
      boxShadow="md"
    >
      <Box>
        <Text fontSize="12px" fontWeight="bold" color="white">
          Dionatã Bergmann
        </Text>
      </Box>
      <Flex>
        <CustomButton
          text="Home"
          scrollToId="home"
          isActive={activeButton === "home"}
          onActivate={() => handleActivate("home")}
        />
        <CustomButton
          text="Experiências"
          scrollToId="experiencia"
          isActive={activeButton === "experiencia"}
          onActivate={() => handleActivate("experiencia")}
        />
        <CustomButton
          text="Educação"
          scrollToId="educacao"
          isActive={activeButton === "educacao"}
          onActivate={() => handleActivate("educacao")}
        />
        <CustomButton
          text="Projetos"
          scrollToId="projetos"
          isActive={activeButton === "projetos"}
          onActivate={() => handleActivate("projetos")}
        />
        <CustomButton
          text="Sobre"
          scrollToId="sobre"
          isActive={activeButton === "sobre"}
          onActivate={() => handleActivate("sobre")}
        />
        <CustomButton
          text="Contato"
          scrollToId="contato"
          isActive={activeButton === "contato"}
          onActivate={() => handleActivate("contato")}
        />
      </Flex>
    </Flex>
  );
}

export default Header;
