import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    height: "54px",
    borderRadius: "5px",
    color: "#949494",
    borderColor: "#949494",
    fontSize: "15px",
    _placeholder: {
      color: "#949494",
      fontWeight: "medium",
    },
  },
});

export const inputTheme = defineMultiStyleConfig({ baseStyle });
