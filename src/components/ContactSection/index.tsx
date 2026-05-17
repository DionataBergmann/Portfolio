import React, { useRef, useState } from 'react';

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



const CONTACT_TOAST_ID = 'contact-form-toast';



function getEmailJsErrorMessage(error: unknown): string {

  if (error && typeof error === 'object') {

    const record = error as Record<string, unknown>;

    if (typeof record.text === 'string' && record.text) return record.text;

    if (typeof record.message === 'string' && record.message) return record.message;

  }

  if (typeof error === 'string' && error) return error;

  return '';

}



const ContactSection = () => {

  const { t } = useTranslation();

  const form = useRef<HTMLFormElement | null>(null);

  const isSendingRef = useRef(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const toast = useToast({
    position: 'top-right',
    isClosable: true,
  });

  const isMobile = useBreakpointValue({ base: true, sm: true, md: true, lg: false });



  const showToast = (options: Parameters<typeof toast>[0]) => {

    if (toast.isActive(CONTACT_TOAST_ID)) {

      toast.close(CONTACT_TOAST_ID);

    }

    toast({ id: CONTACT_TOAST_ID, ...options });

  };



  const sendEmail = async (e: React.FormEvent) => {

    e.preventDefault();



    if (isSendingRef.current || !form.current) {

      return;

    }



    const formData = new FormData(form.current);

    const user_name = String(formData.get('user_name') ?? '').trim();

    const user_email = String(formData.get('user_email') ?? '').trim();

    const message = String(formData.get('message') ?? '').trim();



    if (!user_name || !user_email || !message) {

      showToast({

        description: t('contact.toastError'),

        status: 'error',

        duration: 3000,

      });

      return;

    }



    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;



    if (!serviceId || !templateId || !publicKey) {

      showToast({

        title: t('contact.toastSendError'),

        description: t('contact.toastConfigError'),

        status: 'error',

        duration: 5000,

      });

      return;

    }



    isSendingRef.current = true;

    setIsSubmitting(true);



    try {

      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);

      showToast({

        description: t('contact.toastSuccess'),

        status: 'success',

        duration: 3000,

      });

      form.current.reset();

    } catch (error) {

      const detail = getEmailJsErrorMessage(error);

      showToast({

        title: t('contact.toastSendError'),

        description: detail || t('contact.toastSendErrorFallback'),

        status: 'error',

        duration: 5000,

      });

    } finally {

      isSendingRef.current = false;

      setIsSubmitting(false);

    }

  };



  return (

    <Box p={10} bg="tertiary.800" color="white" id="contact" >

      <Heading as="h2" fontSize='24px' mb={10} mt={10} textAlign="center">

        {t('contact.title')}

      </Heading>

      <Flex direction={{ base: 'column', md: 'row' }} width={isMobile ? '90%' : "40vw"} mx="auto">

        <Box flex="1" mr={{ md: 8 }} mb={{ base: 8, md: 0 }}>

          <form ref={form} onSubmit={sendEmail}>

            <FormControl id="name" mb={4} isDisabled={isSubmitting}>

              <FormLabel>{t('contact.nameLabel')}</FormLabel>

              <Input placeholder={t('contact.namePlaceholder')} name="user_name" />

            </FormControl>

            <FormControl id="email" mb={4} isDisabled={isSubmitting}>

              <FormLabel>{t('contact.emailLabel')}</FormLabel>

              <Input type="email" placeholder={t('contact.emailPlaceholder')} name="user_email" />

            </FormControl>

            <FormControl id="message" mb={4} isDisabled={isSubmitting}>

              <FormLabel>{t('contact.messageLabel')}</FormLabel>

              <Textarea placeholder={t('contact.messagePlaceholder')} name="message" />

            </FormControl>

            <Flex flex={1} align='start'>

              <Button

                size='sm'

                bgColor='white'

                color='#000040'

                type="submit"

                width="30%"

                isLoading={isSubmitting}

                loadingText={t('contact.submitting')}

                isDisabled={isSubmitting}

              >

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


