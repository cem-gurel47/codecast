import { Box } from "@chakra-ui/layout";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Player from "./Player";

const Layout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Sidebar />
      <Content>{children}</Content>
      <Player />
    </Box>
  );
};

export default Layout;
