import CustomLineChart from "./CustomLineChart";

export default function ChartDisplay() {
  const data = {
    title: "Graphique (avec @mui/x-charts)",
    value: [2, 6, 2, null, 8, null, null, 2, null, 6],
    xlabel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ylabel: [10, 8, 6, 4, 2, 0],
  };

  return <CustomLineChart data={data} />;
}
