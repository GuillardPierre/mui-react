import { Container } from "@mui/material";
import CardStatsDisplay from "./CardStatsDisplay";

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
    </Container>
  );
}
