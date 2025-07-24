import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function CardStat({ card }) {
  return (
    <Card
      variant="outlined"
      sx={{ boxShadow: " rgba(0, 0, 0, 0.24) 0px 2px 2px" }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: 2,
        }}
      >
        <CardMedia>{card.icon}</CardMedia>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {card.value}
          </Typography>
          <Typography sx={{ color: "grey", fontSize: 12 }}>
            {card.label}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
