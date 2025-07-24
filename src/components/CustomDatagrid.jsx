import { Card, CardHeader, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function CustomDatagrid({ data }) {
  return (
    <Card
      variant="outlined"
      sx={{
        boxShadow: " rgba(0, 0, 0, 0.24) 0px 2px 2px",
        paddingTop: "12px",
      }}
    >
      <CardHeader
        title={data.title}
        slotProps={{ title: { fontSize: "1.4rem", fontWeight: "bold" } }}
      />
      <DataGrid
        columns={data.columns}
        rows={data.rows}
        disableColumnResize
        hideFooter
        disableColumnMenu
        disableColumnSorting
        sx={{
          border: "none",
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "600",
          },
        }}
      />
    </Card>
  );
}
