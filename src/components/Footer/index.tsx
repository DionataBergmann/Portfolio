import { Box, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/dionatabergmann/",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dionat%C3%A3-bergmann-a98387208/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/DionataBergmann",
    icon: FaGithub,
  },
];

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <Box as="footer" px={6} pt={4} pb={10}>
      <Box h="1px" bg="whiteAlpha.300" maxW="720px" mx="auto" mb={6} />
      <HStack spacing={5} justify="center" mb={3}>
        {socialLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            isExternal
            aria-label={item.label}
            color="whiteAlpha.700"
            _hover={{ color: "white" }}
          >
            <Icon as={item.icon} boxSize="18px" />
          </Link>
        ))}
      </HStack>
      <Text fontSize="13px" color="whiteAlpha.700" textAlign="center">
        {t("footer.copyright", { year })}
      </Text>
    </Box>
  );
}

export default Footer;
