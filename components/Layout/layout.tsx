import { useEffect } from "react";
import { Box } from "@chakra-ui/layout";
import { useSelector, useDispatch } from "react-redux";
import Cookie from "js-cookie";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Player from "./Player";
import { RootState } from "../../store/store";
import { setAudioUrl } from "../../store/slices/playerSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { audioUrl } = useSelector((state: RootState) => state.playerSlice);

  useEffect(() => {
    if (audioUrl && Cookie.get("audioUrl") !== audioUrl) {
      Cookie.set("audioUrl", audioUrl);
    } else if (Cookie.get("audioUrl")) {
      dispatch(setAudioUrl(Cookie.get("audioUrl")));
    }
  }, [audioUrl, dispatch]);

  return (
    <Box width="100vw" height="100vh">
      <Sidebar />
      <Content>{children}</Content>
      <Player />
    </Box>
  );
};

export default Layout;
