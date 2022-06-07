import { useEffect } from "react";
import { Box } from "@chakra-ui/layout";
import { useDispatch, useSelector } from "react-redux";
import Cookie from "js-cookie";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Player from "./Player";
import { updatePodcast, stopPlaying } from "../../store/slices/playerSlice";
import { RootState } from "../../store/store";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { audioUrl, podcastPictureUrl, podcast, title } = useSelector(
    (state: RootState) => state.playerSlice
  );
  const everyDataReadyForAudioPlayer =
    audioUrl && podcastPictureUrl && podcast && title;

  useEffect(() => {
    const cookieState = Cookie.get("audio");
    if (cookieState) {
      dispatch(updatePodcast(JSON.parse(cookieState)));
      dispatch(stopPlaying());
    }
  }, [dispatch]);

  return (
    <Box width="100vw" height="100vh">
      <Sidebar />
      <Content>{children}</Content>
      {everyDataReadyForAudioPlayer && <Player />}
    </Box>
  );
};

export default Layout;
