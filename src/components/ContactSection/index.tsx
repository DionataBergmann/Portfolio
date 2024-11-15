import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button, Flex, useToast, useBreakpointValue } from '@chakra-ui/react';

const ContactSection = () => {
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
        description: 'Por favor, preencha todos os campos.',
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
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!)
      .then(
        () => {
          toast({
            description: 'Mensagem enviada. Obrigado por entrar em contato!',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          form.current!.reset();
        },
        (error) => {
          toast({
            title: 'Erro ao enviar a mensagem.',
            description: error.text,
            status: 'error',

            duration: 5000,
            isClosable: true,
          });
        },
      );
  };

  return (
    <Box p={10} bg="tertiary.800" color="white" id="contact" >
      <Heading as="h2" fontSize='24px' mb={10} mt={10} textAlign="center">
        Entre em Contato
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} width={isMobile ? '90%' : "40vw"} mx="auto">
        <Box flex="1" mr={{ md: 8 }} mb={{ base: 8, md: 0 }}>
          <form ref={form} onSubmit={sendEmail}>
            <FormControl id="name" mb={4}>
              <FormLabel>Nome</FormLabel>
              <Input placeholder="Seu Nome" name="user_name" />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="seu.email@exemplo.com" name="user_email" />
            </FormControl>
            <FormControl id="message" mb={4}>
              <FormLabel>Mensagem</FormLabel>
              <Textarea placeholder="Sua Mensagem" name="message" />
            </FormControl>
            <Flex flex={1} align='start'>
              <Button size='sm' bgColor='white' color='#000040' type="submit" width="30%">
                Enviar
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactSection;
