import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";

export default function CustomLineChart({ data }) {
  return (
    <Box sx={{ width: 500 }}>
      <Typography sx={{ fontWeight: "bold" }}>{data.title}</Typography>
      <LineChart
        height={300}
        width={500}
        series={[
          {
            data: data.value,
            connectNulls: true,
            color: "lightblue",
          },
        ]}
        xAxis={[{ scaleType: "point", data: data.xlabel }]}
        yAxis={[{ scaleType: "point", data: data.ylabel }]}
        margin={{ left: 0, top: 50 }}
      ></LineChart>
    </Box>
  );
}
