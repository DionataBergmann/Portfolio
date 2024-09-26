import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Box, Text, Flex, Button } from '@chakra-ui/react';
import cookieImage from '../../../public/cookie.png';

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    if (cookiesAccepted) {
      setIsVisible(false);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(true);

        setTimeout(() => {
          setIsAnimating(true);
        }, 100); 
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleDecline = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300); 
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      width="100%"
      bg="white"
      color="black"
      zIndex="1000"
      boxShadow="md"
      opacity={isAnimating ? 1 : 0} 
      transition="opacity 1s ease-in-out" 
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" ml={3}>
          <Image
            src={cookieImage}
            alt="Cookies"
            width={50}
            height={50}
          />
          <Text fontSize="small" color='tertiary.800'>
            Este site utiliza cookies. Ao continuar, assumimos que você concorda com o uso de cookies conforme detalhado em nossa <Text as="span" color='tertiary.300' cursor="pointer">Política de Privacidade</Text>.
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Button backgroundColor='tertiary.800' color='white' size='sm' mr={5} ml={2} onClick={handleAccept} _hover={{backgroundColor: 'tertiary.300'}}>
            Entendi
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CookiePopup;