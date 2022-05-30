import { IconButton, Icon } from "@chakra-ui/react";
import { IoIosRepeat } from "react-icons/io";

const RepeatButton = ({ setIsRepeating, isRepeating }) => {
  return (
    <IconButton
      display="flex"
      ml={4}
      alignItems="center"
      onClick={() => setIsRepeating(!isRepeating)}
      variant="unstyled"
      aria-label="shuffle"
      icon={
        <Icon
          as={IoIosRepeat}
          fontSize="30px"
          color={isRepeating ? "blue.300" : "primary"}
        />
      }
      w="40px"
      h="40px"
      borderRadius="50%"
      _focus={{
        border: "none",
      }}
      _active={{
        transform: "scale(1.3)",
        transition: "transform 0.3s ease-in-out",
        border: "none",
      }}
    />
  );
};

export default RepeatButton;
