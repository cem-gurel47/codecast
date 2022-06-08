import {
  Flex,
  FlexProps,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import Logo from "../../Logo";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("primary", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="center"
      position="relative"
      {...rest}
    >
      <IconButton
        bg={useColorModeValue("blue.300", "gray.900")}
        border="none"
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
        position="absolute"
        top="5"
        left="5"
      />
      <Logo />
    </Flex>
  );
};

export default MobileNav;
