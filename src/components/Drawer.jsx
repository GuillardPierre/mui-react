import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

export default function CustomDrawer({ width }) {
  const DrawerList = (
    <Box role="presentation" sx={{ width: width, mt: 9 }}>
      <List>
        {[
          <HomeIcon />,
          <GridOnOutlinedIcon />,
          <AddOutlinedIcon />,
          <PeopleAltIcon />,
          <BarChartIcon />,
          <SettingsIcon />,
        ].map((icon, index) => (
          <ListItem key={index}>
            <ListItemButton sx={{ paddingBlock: "2px" }}>
              <ListItemIcon>{icon}</ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Drawer variant="permanent" open={true}>
        {DrawerList}
      </Drawer>
    </>
  );
}
