import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Text,
  Button,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdFavoriteBorder, MdOutlineShare } from "react-icons/md";

const Home = () => {
  return (
    <Box
      w="full"
      h="full"
      px="10"
      py="5"
      bgGradient="linear(to-br,red.400,red.100)"
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={AiOutlineSearch} />
        </InputLeftElement>
        <Input
          px={8}
          variant="filled"
          placeholder="search podcasts, technologies, artists"
          _placeholder={{ color: "gray.600" }}
          w={{ base: "full", md: "md" }}
          color="white"
          borderRadius={32}
        />
      </InputGroup>
      <Box mt={20} maxW={{ md: "3xl" }}>
        <Text
          color="white"
          fontSize="7xl"
          fontWeight="medium"
          lineHeight="shorter"
        >
          The hottest coding podcasts of the week.
        </Text>
        <Text color="white" my={8} fontSize="xl" fontWeight="thin">
          Fresh music vibes for great mood full your day with energy and
          passion!
        </Text>
        <Flex>
          <Button fontWeight="bolder" borderRadius={32} color="red.400">
            PLAY NOW
          </Button>
          <IconButton
            aria-label="add-to-favourites"
            ml={4}
            borderRadius={32}
            bg="transparent"
            border="1px solid white"
          >
            <Icon as={MdFavoriteBorder} color="white" />
          </IconButton>
          <IconButton
            aria-label="add-to-favourites"
            ml={4}
            borderRadius={32}
            bg="transparent"
            border="1px solid white"
          >
            <Icon as={MdOutlineShare} color="white" />
          </IconButton>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
