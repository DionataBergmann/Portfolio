import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

interface CustomButtonProps extends ChakraButtonProps {
  text: string;
  scrollToId: string;
  isActive: boolean;
  onActivate: () => void;
  onSetActive?: (id: string) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, scrollToId, isActive, onActivate, onSetActive, ...props }) => {
  return (
    <ScrollLink
      to={scrollToId}
      smooth={true}
      duration={700}
      offset={scrollToId === 'home' ? -110 : scrollToId === 'sobre' ? -70 : -20}
      onClick={onActivate}
      spy={true} 
      onSetActive={() => onSetActive && onSetActive(scrollToId)}
      style={{ padding: 2 }}
    >
      <ChakraButton
        background='none'
        color={isActive ? 'primary.300' : 'white'}
        size='sm'
        fontSize='16px'
        borderBottom={isActive ? "2px solid" : "none"}
        _hover={{ background: 'none', color: 'primary.300', borderBottom: "2px solid" }}
        {...props}
      >
        {text}
      </ChakraButton>
    </ScrollLink>
  );
};

export default CustomButton;
