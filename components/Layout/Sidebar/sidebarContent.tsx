import {
  Box,
  BoxProps,
  useColorModeValue,
  Flex,
  CloseButton,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";
import Logo from "../../Logo";
import NavItem from "./navItem";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("primary", "gray.900")}
      //   borderRight="1px"
      //   borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 80 }}
      pos="fixed"
      h="calc(100vh - 80px)"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        mb="8"
        justifyContent="space-between"
      >
        <Logo />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          path={link.name.toLowerCase()}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default SidebarContent;
