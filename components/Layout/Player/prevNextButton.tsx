import { IconButton, Icon } from "@chakra-ui/react";
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs";

const PrevNextButton = ({ type }) => {
  return (
    <IconButton
      display="flex"
      alignItems="center"
      // onClick={() => setIsRepeating(!isRepeating)}
      variant="unstyled"
      aria-label="shuffle"
      icon={
        <Icon
          as={type === "prev" ? BsFillSkipBackwardFill : BsFillSkipForwardFill}
          fontSize="30px"
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

export default PrevNextButton;
