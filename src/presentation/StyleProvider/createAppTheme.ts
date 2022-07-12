import { useMemo } from "react";
import { createTheme, Shadows } from "@mui/material";
import { ThemeMode } from "../../app/store/slices/theme";

const useCreateAppTheme = (mode: ThemeMode) =>
  useMemo(
    () =>
      createTheme({
        components: {},
        palette: {
          primary: {
            main: "#FFD400",
          },
          secondary: {
            main: "#0C4DCE",
          },
          mode,
        },
        shadows: Array(25).fill("none") as Shadows,
        shape: {
          borderRadius: 8,
        },
      }),
    [mode]
  );

export default useCreateAppTheme;
