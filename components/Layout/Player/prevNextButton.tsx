import { IconButton, Icon } from "@chakra-ui/react";
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setCurrentTime } from "../../../store/slices/playerSlice";

const PrevNextButton = ({ type }) => {
  const dispatch = useDispatch();
  const { currentTime, duration } = useSelector(
    (state: RootState) => state.playerSlice
  );
  return (
    <IconButton
      disabled
      display="flex"
      alignItems="center"
      onClick={() => {
        if (type === "prev") {
          dispatch(setCurrentTime(Math.max(0, currentTime - 10)));
        } else {
          dispatch(setCurrentTime(Math.min(duration, currentTime + 10)));
        }
      }}
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
