import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRoutes } from "./AppRoutes";
import { AppTabs } from "./AppTabs";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container
        maxWidth="md"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppTabs></AppTabs>
        <Box sx={{ flexGrow: 1, marginY: 2 }}>
          <AppRoutes></AppRoutes>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
