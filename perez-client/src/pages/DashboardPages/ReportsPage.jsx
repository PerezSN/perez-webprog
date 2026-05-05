import { Typography, Stack, Card, CardContent } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { Gauge } from "@mui/x-charts/Gauge";
import { useRef } from "react";
import { useEffect } from "react";
import { Button } from "@mui/material";


const ReportsPage = () => {
 const handlePrint = () => {
  window.print();
};


  return (
    
    <>
    <style>
{`
@media print {

  body {
    background: white !important;
    color: black !important;
  }

  /* Remove dark cards */
  .MuiCard-root {
    background: white !important;
    color: black !important;
    border: 1px solid #ccc !important;
  }

  /* Fix text */
  .MuiTypography-root {
    color: black !important;
  }

  /* Charts text */
  svg text {
    fill: black !important;
  }

  /* Hide button when printing */
  button {
    display: none !important;
  }

}
`}
</style>
      <Button
        variant="contained"
        onClick={handlePrint}
        sx={{
          mb: 3,
          background: "linear-gradient(to right, #9333ea, #db2777)",
        }}
      >
        Export to PDF
      </Button>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        Reports
      </Typography>

      <Typography sx={{ mb: 3, color: "#ffffff" }}>
        Data visualization of gaming activity and performance.
      </Typography>

      <Stack spacing={3}>

        {/* BAR CHART */}
        <Card sx={{ bgcolor: "#18181b", color: "white", border: "1px solid #27272a" }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Monthly Activity
            </Typography>

            <BarChart
              colors={["#c084fc", "#db2777"]}
              series={[
                { data: [10, 20, 30, 25, 40], label: "Users" },
                { data: [5, 15, 20, 18, 35], label: "Posts" },
              ]}
              height={300}
              slotProps={{
                legend: {
                  labelStyle: {
                    fill: '#ffffff',
                  },
                },
              }}
              xAxis={[
                {
                  data: ["Jan", "Feb", "Mar", "Apr", "May"],
                  scaleType: "band",
                  tickLabelStyle: { fill: "#ffffff" },
                },
              ]}
              yAxis={[
                {
                  tickLabelStyle: { fill: "#ffffff" },
                },
              ]}
              sx={{

                "& text": {
                  fill: "#ffffff !important",
                },


                "& .MuiChartsLegend-label": {
                  fill: "#ffffff !important",
                },


                "& .MuiChartsLegend-root": {
                  color: "#ffffff !important",
                },
              }}
            />
          </CardContent>
        </Card>

        {/* PIE CHART */}
        <Card sx={{ bgcolor: "#18181b", color: "white", border: "1px solid #27272a" }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Game Categories
            </Typography>

            <PieChart
              colors={["#c084fc", "#db2777", "#9333ea", "#be185d"]}
              series={[
                {
                  data: [
                    { id: 0, value: 20, label: "Action" },
                    { id: 1, value: 15, label: "RPG" },
                    { id: 2, value: 25, label: "Horror" },
                    { id: 3, value: 10, label: "Strategy" },
                  ],
                },
              ]}
              height={250}
              slotProps={{
                legend: {
                  labelStyle: {
                    fill: '#ffffff',
                  },
                },
              }}
              sx={{

                "& text": {
                  fill: "#ffffff !important",
                },

                "& .MuiChartsLegend-label": {
                  fill: "#ffffff !important",
                },

                "& .MuiChartsLegend-root": {
                  color: "#ffffff !important",
                },


              }}
            />
          </CardContent>
        </Card>

      </Stack>
    </>
  );
};

export default ReportsPage;