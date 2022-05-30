import { Icon, Text, Flex, FlexProps, Link } from "@chakra-ui/react";
import { SiGooglepodcasts } from "react-icons/si";

interface LogoProps extends FlexProps {}

const Logo = (props: LogoProps) => {
  return (
    <Link
      href="/"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex align="center" {...props}>
        <Icon as={SiGooglepodcasts} color="blue.300" fontSize="4xl" />
        <Text
          marginLeft="15px"
          color="blue.300"
          fontWeight="bold"
          fontSize="3xl"
        >
          Codecast
        </Text>
      </Flex>
    </Link>
  );
};

export default Logo;
