import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import CustomButton from "../Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";
import Flag from "react-world-flags";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

function Header() {
  const [activeButton, setActiveButton] = useState<string | null>('home');
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

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

  useEffect(() => {
    const sections = document.querySelectorAll(".observe-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveButton(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pt-BR" : "en";
    i18n.changeLanguage(newLang);
  };

  const renderButtons = () => (
    <>
      <CustomButton
        text={t("navigation.home")} 
        scrollToId="home"
        isActive={activeButton === "home"}
        onActivate={() => handleActivate("home")}
      />
      <CustomButton
        text={t("navigation.experience")} 
        scrollToId="experiencia"
        isActive={activeButton === "experiencia"}
        onActivate={() => handleActivate("experiencia")}
      />
      <CustomButton
        text={t("navigation.education")} 
        scrollToId="educacao"
        isActive={activeButton === "educacao"}
        onActivate={() => handleActivate("educacao")}
      />
      <CustomButton
        text={t("navigation.projects")} 
        scrollToId="projetos"
        isActive={activeButton === "projetos"}
        onActivate={() => handleActivate("projetos")}
      />
      <CustomButton
        text={t("navigation.about")} 
        scrollToId="sobre"
        isActive={activeButton === "sobre"}
        onActivate={() => handleActivate("sobre")}
      />
      <CustomButton
        text={t("navigation.contact")} 
        scrollToId="contato"
        isActive={activeButton === "contato"}
        onActivate={() => handleActivate("contato")}
      />
    </>
  );

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
      justifyContent={isMobile ? "space-between" : "space-around"}
      boxShadow="md"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        cursor="pointer"
        onClick={toggleLanguage}>
        {i18n.language === "en" ?
          <Flag code="BR" style={{ width: 30, height: 20, marginRight: 8, marginLeft: 4 }} />
          :
          <Flag code="US" style={{ width: 30, height: 20, marginRight: 8, marginLeft: 4 }} />
        }
        <Text fontSize="16px" fontWeight="bold" color="white">
          Dionatã Bergmann
        </Text>
      </Box>
      <Flex>
        {isMobile ? (
          <>
            <IconButton
              aria-label="Open Menu"
              icon={<RxHamburgerMenu />}
              onClick={onOpen}
              bg="transparent"
              color='white'
            />
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent bgColor='tertiary.900'>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <VStack spacing={4} align="start">
                    {renderButtons()}
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <Flex>
            {renderButtons()}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default Header;