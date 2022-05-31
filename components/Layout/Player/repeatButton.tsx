import { IconButton, Icon } from "@chakra-ui/react";
import { IoIosRepeat } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { toggleRepeat } from "../../../store/slices/playerSlice";

const RepeatButton = () => {
  const dispatch = useDispatch();
  const { isRepeating } = useSelector((state: RootState) => state.playerSlice);

  return (
    <IconButton
      display="flex"
      ml={4}
      alignItems="center"
      onClick={() => dispatch(toggleRepeat())}
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
