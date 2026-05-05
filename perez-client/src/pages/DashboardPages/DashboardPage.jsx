import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Gauge } from '@mui/x-charts/Gauge';
import { Typography, Card, CardContent } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150, editable: true },
  { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
  {
    field: 'fullName',
    headerName: 'Full name',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 44 },
  { id: 6, lastName: 'Melisandre', firstName: 'Sarya', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function DashboardPage() {
  return (
    <>
      {/* HEADER */}
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Dashboard
      </Typography>

      <Typography sx={{ mb: 3, color: "#ffffff" }}>
        Overview of your gaming metrics and activity.
      </Typography>

      {/* SUMMARY */}
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 4 }}>
        <Card sx={{ bgcolor: '#18181b', color: 'white', border: '1px solid #27272a', flex: 1 }}>
          <CardContent>
            <Typography sx={{ color: '#ffffff' }}>Total Users</Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              {rows.length}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ bgcolor: '#18181b', color: 'white', border: '1px solid #27272a', flex: 1 }}>
          <CardContent>
            <Typography sx={{ color: '#ffffff' }}>Average Age</Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              {
                (
                  rows.reduce((sum, row) => sum + (row.age || 0), 0) /
                  rows.filter((row) => row.age !== null).length
                ).toFixed(1)
              }
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      <Stack spacing={3}>

        {/* CHARTS */}
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={3}>

          {/* GAUGE */}
          <Card sx={{ bgcolor: '#18181b', color: 'white', border: '1px solid #27272a', flex: 1 }}>
            <CardContent>
              <Typography sx={{ mb: 2 }}>System Performance</Typography>

              <Gauge
                width={120}
                height={120}
                value={75}
                sx={{
                  "& text": {
                    fill: "#ffffff !important", 
                  },
                  "& .MuiGauge-referenceArc": {
                    fill: "#27272a",
                  },
                  "& .MuiGauge-valueArc": {
                    fill: "#c084fc",
                  },
                }}
              />

              <Gauge
                width={120}
                height={120}
                value={50}
                sx={{
                  "& text": {
                    fill: "#ffffff !important",
                  },
                  "& .MuiGauge-referenceArc": {
                    fill: "#27272a",
                  },
                  "& .MuiGauge-valueArc": {
                    fill: "#db2777",
                  },
                }}
              />
            </CardContent>
          </Card>

          {/* BAR CHART */}
          <Card sx={{ bgcolor: '#18181b', color: 'white', border: '1px solid #27272a', flex: 2 }}>
            <CardContent>
              <Typography sx={{ mb: 2 }}>Quarterly Activity</Typography>

              <BarChart
                series={[
                  { data: [35, 44, 24, 34], label: 'Active Users' },
                  { data: [51, 6, 49, 30], label: 'New Posts' },
                ]}
                height={290}
                xAxis={[
                  {
                    data: ['Q1', 'Q2', 'Q3', 'Q4'],
                    scaleType: 'band',
                    tickLabelStyle: { fill: '#ffffff' },
                  },
                ]}
                yAxis={[
                  {
                    tickLabelStyle: { fill: '#ffffff' },
                  },
                ]}
                sx={{
                  // Axis labels
                  "& .MuiChartsAxis-tickLabel": {
                    fill: "#ffffff",
                  },

                  // Legend text 
                  "& .MuiChartsLegend-label": {
                    fill: "#ffffff",
                  },

                  // Optional: legend box spacing
                  "& .MuiChartsLegend-root": {
                    color: "#ffffff",
                  },
                }}
              />
            </CardContent>
          </Card>

        </Stack>

        {/* TABLE */}
        <Card sx={{ bgcolor: '#18181b', color: 'white', border: '1px solid #27272a' }}>
          <CardContent>
            <Typography gutterBottom>
              Users Overview
            </Typography>

            <Box sx={{ height: 400, width: '100%', overflowX: 'auto' }}>
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
                disableRowSelectionOnClick
                sx={{
                  width: '100%', // Ensure DataGrid takes full width of its container
                  color: "#000000",
                  border: "none",
                  backgroundColor: "#ffffff",
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#f4f4f5",
                    color: "#000000",
                    borderBottom: "1px solid #e4e4e7",
                  },
                  "& .MuiDataGrid-row:hover": {
                    backgroundColor: "#f4f4f5 !important",
                  },
                  "& .MuiDataGrid-toolbarContainer": {
                    backgroundColor: "#ffffff",
                    color: "#000000",
                  },
                  "& .MuiDataGrid-cell": {
                    borderColor: "#e4e4e7",
                  },
                  "& .MuiDataGrid-footerContainer": {
                    borderTop: "1px solid #e4e4e7",
                    backgroundColor: "#ffffff",
                  },
                  "& .MuiTablePagination-root": {
                    color: "#000000",
                  },
                }}
              />
            </Box>
          </CardContent>
        </Card>

        {/* MAP */}
        <Card sx={{ bgcolor: '#18181b', color: 'white', border: '1px solid #27272a' }}>
          <CardContent>
            <Typography gutterBottom>
              Location Map
            </Typography>

            <Box sx={{
              height: 400,
              width: '100%',
              borderRadius: 2,
              overflow: 'hidden',
              border: '1px solid #27272a'
            }}>
              <MapContainer
                center={[14.604253, 120.994314]}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[14.604253, 120.994314]}>
                  <Popup>NU Manila</Popup>
                </Marker>
              </MapContainer>
            </Box>
          </CardContent>
        </Card>

      </Stack>
    </>
  );
}

export default DashboardPage;