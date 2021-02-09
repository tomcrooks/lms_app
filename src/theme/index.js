import { defaultTheme, ThemeProvider } from "evergreen-ui";
import React from "react";

const theme = {
  ...defaultTheme,
};

export const Theme = ({ children }) => (
  <ThemeProvider value={theme}>{children}</ThemeProvider>
);
