import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";

export default function CustomLineChart({ data }) {
  return (
    <Box sx={{ width: 500 }}>
      <Typography sx={{ fontSize: "1.4rem", fontWeight: "bold" }}>
        {data.title}
      </Typography>
      <LineChart
        height={300}
        width={500}
        sx={{
          "& .MuiLineElement-root": {
            strokeWidth: 3,
          },
        }}
        slotProps={{ line: { width: "12px" } }}
        series={[
          {
            data: data.value,
            connectNulls: true,
            color: "#84D6D5",
          },
        ]}
        xAxis={[{ scaleType: "point", data: data.xlabel }]}
        yAxis={[{ scaleType: "point", data: data.ylabel }]}
        margin={{ left: 0, top: 50 }}
      ></LineChart>
    </Box>
  );
}
