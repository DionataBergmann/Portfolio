import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
  useToast,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement | null>(null);
  const toast = useToast();
  const isMobile = useBreakpointValue({ base: true, sm: true, md: true, lg: false });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    const user_name = form.current.user_name.value.trim();
    const user_email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!user_name || !user_email || !message) {
      toast({
        description: t('contact.toastError'),
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(
        () => {
          toast({
            description: t('contact.toastSuccess'),
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          form.current!.reset();
        },
        (error) => {
          toast({
            title: t('contact.toastSendError'),
            description: error.text,
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <Box p={10} bg="tertiary.800" color="white" id="contact" >
      <Heading as="h2" fontSize='24px' mb={10} mt={10} textAlign="center">
        {t('contact.title')}
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} width={isMobile ? '90%' : "40vw"} mx="auto">
        <Box flex="1" mr={{ md: 8 }} mb={{ base: 8, md: 0 }}>
          <form ref={form} onSubmit={sendEmail}>
            <FormControl id="name" mb={4}>
              <FormLabel>{t('contact.nameLabel')}</FormLabel>
              <Input placeholder={t('contact.namePlaceholder')} name="user_name" />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>{t('contact.emailLabel')}</FormLabel>
              <Input type="email" placeholder={t('contact.emailPlaceholder')} name="user_email" />
            </FormControl>
            <FormControl id="message" mb={4}>
              <FormLabel>{t('contact.messageLabel')}</FormLabel>
              <Textarea placeholder={t('contact.messagePlaceholder')} name="message" />
            </FormControl>
            <Flex flex={1} align='start'>
              <Button size='sm' bgColor='white' color='#000040' type="submit" width="30%">
                {t('contact.submitButton')}
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactSection;
