import { Box } from "@chakra-ui/react";

const Content = ({ children }) => {
  return (
    <Box marginLeft={{ base: "full", md: 64, lg: 80 }} h="full">
      {children}
    </Box>
  );
};

export default Content;
