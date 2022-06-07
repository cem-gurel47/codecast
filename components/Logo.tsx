import { Icon, Text, Flex, FlexProps } from "@chakra-ui/react";
import { SiGooglepodcasts } from "react-icons/si";
import Link from "next/link";

interface LogoProps extends FlexProps {}

const Logo = (props: LogoProps) => {
  return (
    <Link href="/" passHref>
      <Flex align="center" {...props} cursor="pointer">
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
