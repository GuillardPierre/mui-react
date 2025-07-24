import CustomDatagrid from "./CustomDatagrid";

export default function DatagridDisplay() {
  const data = {
    title: "Dernières commandes",
    columns: [
      { field: "id", headerName: "ID", flex: 0, minWidth: 300 },
      { field: "name", headerName: "Nom", flex: 1 },
      { field: "date", headerName: "Date", flex: 1 },
      { field: "status", headerName: "Statut", flex: 1 },
    ],
    rows: [
      { id: 1, name: "Nom1", date: "24-04-2025", status: "En cours" },
      { id: 2, name: "Nom2", date: "16-04-2025", status: "Payée" },
      { id: 3, name: "Nom3", date: "10-04-2025", status: "Terminée" },
      { id: 4, name: "Nom5", date: "02-04-2025", status: "Terminée" },
    ],
  };
  return <CustomDatagrid data={data} />;
}
