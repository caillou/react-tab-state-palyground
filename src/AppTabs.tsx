import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import AddTab from "./AddTab";
import { useNavigate } from "react-router-dom";

export function AppTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Tabs
        sx={{ flexGrow: 1, flexShrink: 1 }}
        onChange={(_, value) => {
          if (value === 0) {
            navigate("/");
          }
          setActiveTab(value);
        }}
        value={activeTab}
      >
        <Tab label="Home" value={0} />
      </Tabs>
      <AddTab></AddTab>
    </Box>
  );
}
