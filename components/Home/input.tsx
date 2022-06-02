import React from "react";
import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = () => {
  return (
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
  );
};

export default SearchInput;
