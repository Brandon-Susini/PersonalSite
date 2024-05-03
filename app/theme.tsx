"use client";
import { colorsTuple, createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "custom-orange",
  primaryShade: 7,
  colors: {
    "custom-orange": [
      "#fff4e2",
      "#ffe9cc",
      "#ffd09c",
      "#fdb766",
      "#fca13a",
      "#fb931d",
      "#fc8c0c",
      "#e17900",
      "#c86a00",
      "#ae5a00",
    ],
  },
});
