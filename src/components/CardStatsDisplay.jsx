import CardStat from "./CardStat";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MessageIcon from "@mui/icons-material/Message";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Grid } from "@mui/material";

export default function CardStatsDisplay() {
  const iconStyle = { fontSize: 35 };
  const cardStatsData = [
    { icon: <AttachMoneyIcon sx={iconStyle} />, label: "Ventes", value: 1000 },
    { icon: <PeopleAltIcon sx={iconStyle} />, label: "Clients", value: 300 },
    { icon: <MessageIcon sx={iconStyle} />, label: "Messages", value: 5 },
  ];

  return (
    <Grid container size={12} spacing={4}>
      {cardStatsData.map((card) => (
        <Grid key={card.label} item size={4}>
          <CardStat card={card} />
        </Grid>
      ))}
    </Grid>
  );
}
