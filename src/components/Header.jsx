import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import CustomDrawer from "./Drawer";

export default function Header() {
  const drawerWidth = 90;
  return (
    <>
      <AppBar
        position="static"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h6">Tableau de bord</Typography>

            <Box>
              <IconButton onClick={() => {}}>
                <Avatar />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <CustomDrawer width={drawerWidth} />
    </>
  );
}
