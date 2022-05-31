import { IconButton, Icon } from "@chakra-ui/react";
import { IoIosShuffle } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { toggleShuffle } from "../../../store/slices/playerSlice";

const ShuffleButton = () => {
  const dispatch = useDispatch();
  const { isShuffling } = useSelector((state: RootState) => state.playerSlice);

  return (
    <IconButton
      mr={4}
      display="flex"
      alignItems="center"
      onClick={() => dispatch(toggleShuffle())}
      variant="unstyled"
      aria-label="shuffle"
      icon={
        <Icon
          as={IoIosShuffle}
          fontSize="30px"
          color={isShuffling ? "blue.300" : "primary"}
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

export default ShuffleButton;
