import { Box } from "@mui/material";
import Dashboard from "./components/Dashboard";
import CustomDrawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const drawerWidth = 80;
  return (
    <>
      <CustomDrawer width={drawerWidth} />
      <Box
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Header />
        <Dashboard />
      </Box>
    </>
  );
}

export default App;
