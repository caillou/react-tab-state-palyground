import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, Tab, Tabs, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function ApplicationTabs() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        onChange={(_, value) => {
          console.log(value);
          setActiveTab(value);
        }}
        value={activeTab}
      >
        <Tab label="Item One" value={0} />
        <Tab label="Item Two" value={1} />
        <Tab label="Item Three" value={2} />
      </Tabs>
    </Box>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="md">
        <ApplicationTabs></ApplicationTabs>
      </Container>
    </ThemeProvider>
  );
}
