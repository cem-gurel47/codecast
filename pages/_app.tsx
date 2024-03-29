import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import PlayerLayout from "../components/Layout/layout";
import { store } from "../store/store";
import "reset-css";

const theme = extendTheme({
  colors: {
    primary: "#191414",
    gray: {
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PlayerLayout>
          <Script
            id="Adsense-id"
            data-ad-client="ca-pub-2228495892288218"
            async
            strategy="afterInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          <Component {...pageProps} />
          <Analytics />
        </PlayerLayout>
      </Provider>
    </ChakraProvider>
  );
};

export default MyApp;
