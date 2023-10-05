// src/theme/index.tsx
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import palette from './palette';

export default function ThemeConfig({
  children,
}: {
  children: JSX.Element,
}): JSX.Element {
  const themeOptions = {
    palette
  };

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
}