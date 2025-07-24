import { Container } from "@mui/material";
import CardStatsDisplay from "./CardStatsDisplay";
import ChartDisplay from "./ChartDisplay";
import DatagridDisplay from "./DatagridDisplay";

export default function Dashboard() {
  return (
    <Container
      maxWidth={null}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        marginBlock: 4,
      }}
    >
      <CardStatsDisplay />
      <ChartDisplay />
      <DatagridDisplay />
    </Container>
  );
}
