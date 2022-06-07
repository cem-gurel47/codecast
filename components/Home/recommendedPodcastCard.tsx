import React, { useState } from "react";
import { Box, Image, Icon, IconButton, Center } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Link from "next/link";
import { BestPodcast } from "../../types/podcast";

const RecommendedPodcastCard = ({ info }: { info: BestPodcast }) => {
  const [buttonsVisible, setButtonsVisible] = useState(false);
  return (
    <Link href={`/podcast/${info.id}`} passHref>
      <Box
        borderRadius={32}
        cursor="pointer"
        onMouseEnter={() => setButtonsVisible(true)}
        onMouseLeave={() => setButtonsVisible(false)}
        position="relative"
      >
        <Image
          src={info.image}
          alt="recommended-podcast"
          width="200px"
          height="200px"
          objectFit="cover"
          borderRadius={32}
        />
        <Center
          position="absolute"
          top={0}
          left={0}
          display={buttonsVisible ? "flex" : "none"}
          width="100%"
          height="100%"
          p={4}
          bg="rgba(0,0,0,0.5)"
          borderRadius={32}
        >
          <IconButton
            variant="unstyled"
            aria-label="play"
            icon={
              <Icon as={AiOutlineInfoCircle} fontSize="40px" color="white" />
            }
          />
        </Center>
      </Box>
    </Link>
  );
};

export default RecommendedPodcastCard;
