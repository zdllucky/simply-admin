import { FC, PropsWithChildren } from "react";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import globalStyle from "./globalStyle";
import useCreateAppTheme from "./createAppTheme";
import { useLocalTheme } from "../../app/store/hooks/theme";

const StyleProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const {
    theme: { mode },
  } = useLocalTheme();
  const theme = useCreateAppTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyle} />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
