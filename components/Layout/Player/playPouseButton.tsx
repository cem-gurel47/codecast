import { IconButton } from "@chakra-ui/react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

const PlayPouseButton = ({ isPlaying, setIsPlaying }) => {
  return (
    <IconButton
      mx={4}
      onClick={() => setIsPlaying(!isPlaying)}
      variant="unstyled"
      aria-label="play-podcast"
      icon={
        isPlaying ? (
          <AiFillPauseCircle fontSize="40px" />
        ) : (
          <AiFillPlayCircle fontSize="40px" />
        )
      }
      color="blue.300"
      w="40px"
      h="40px"
      borderRadius="50%"
      _active={{
        transform: "scale(1.3)",
        transition: "transform 0.3s ease-in-out",
      }}
    />
  );
};

export default PlayPouseButton;
