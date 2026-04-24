import { Typography, Box, Card, CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

// reuse your existing columns and rows
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "age", headerName: "Age", type: "number", width: 110 },
];

const rows = [
  { id: 1, firstName: "Alex", lastName: "Hunter", age: 21 },
  { id: 2, firstName: "Lara", lastName: "Croft", age: 28 },
  { id: 3, firstName: "John", lastName: "Marston", age: 35 },
  { id: 4, firstName: "Ellie", lastName: "Williams", age: 19 },
];

const UsersPage = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        Users
      </Typography>

      <Typography sx={{ mb: 3, color: "#ffffff" }}>
        List of registered users.
      </Typography>

      <Card sx={{ bgcolor: "#18181b", border: "1px solid #27272a" }}>
        <CardContent>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSizeOptions={[5]}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5 },
                },
              }}
              checkboxSelection
              sx={{
                color: "#000000",
                border: "none",
                backgroundColor: "#ffffff",
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "#f4f4f5",
                  color: "#000000",
                  borderBottom: "1px solid #e4e4e7",
                },
                "& .MuiDataGrid-cell": { borderColor: "#e4e4e7" },
                "& .MuiDataGrid-row:hover": {
                  backgroundColor: "#f4f4f5 !important",
                },
                "& .MuiTablePagination-root": {
                  color: "#000000",
                },
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "1px solid #e4e4e7",
                  backgroundColor: "#ffffff",
                },
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default UsersPage;