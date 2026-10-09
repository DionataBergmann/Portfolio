import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import CustomButton from "../Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { setAppLanguage, type AppLanguage } from "@/common/internationalization/i18n";

function Header() {
  const [activeButton, setActiveButton] = useState<string | null>("home");
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { t, i18n } = useTranslation();
  const isPortuguese = i18n.language.toLowerCase().startsWith("pt");

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

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const selectLanguage = (lang: AppLanguage) => {
    const active = lang === "pt-BR" ? isPortuguese : !isPortuguese;
    if (active) return;
    void setAppLanguage(lang);
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
      <Flex alignItems="center" minW={0}>
        <Flex
          role="group"
          aria-label={t("language.label")}
          borderWidth="1px"
          borderColor="whiteAlpha.700"
          borderRadius="md"
          overflow="hidden"
          flexShrink={0}
          ml={2}
          mr={3}
        >
          {(
            [
              { code: "pt-BR", label: "PT" },
              { code: "en", label: "EN" },
            ] as const
          ).map(({ code, label }) => {
            const active = code === "pt-BR" ? isPortuguese : !isPortuguese;

            return (
              <Box
                as="button"
                type="button"
                key={code}
                onClick={() => selectLanguage(code)}
                aria-pressed={active}
                px={2}
                py="6px"
                fontSize="13px"
                fontWeight="bold"
                letterSpacing="0.04em"
                lineHeight="1"
                color={active ? "tertiary.900" : "white"}
                bg={active ? "white" : "transparent"}
                _hover={{ bg: active ? "white" : "whiteAlpha.300" }}
              >
                {label}
              </Box>
            );
          })}
        </Flex>

        <Text fontSize="16px" fontWeight="bold" color="white" noOfLines={1}>
          Dionatã Bergmann
        </Text>
      </Flex>
      <Flex>
        {isMobile ? (
          <>
            <IconButton
              aria-label="Open Menu"
              icon={<RxHamburgerMenu />}
              onClick={onOpen}
              bg="transparent"
              color="white"
            />
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent bgColor="tertiary.900">
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
          <Flex>{renderButtons()}</Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default Header;