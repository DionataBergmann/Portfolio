import { Box } from "@chakra-ui/react";
import { FaHandPointer } from "react-icons/fa";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export function PulsingClickIcon() {
  return (
    <Box
      as={FaHandPointer}
      color="white"
      fontSize="xl"
      animation={`${pulse} 1s infinite ease-in-out`}
    />
  );
}
