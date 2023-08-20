import { extendTheme } from "@chakra-ui/react";
import { inputTheme } from "./chakra-components/input";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    heading: "lufga",
    body: "lufga",
    default: "Inter",
  },
  colors: {
    brand: {
      500: "#fd4f00",
      600: "#fd560e",
    },
    black: {
      500: "#262626",
      600: "#020202",
    },
  },
  components: { Input: inputTheme },
});

export default theme;
