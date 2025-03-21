import React from "react";
import History from "@/app/(DashboardLayout)/components/dashboard/History";
import { Typography, Box } from "@mui/material";

function HistoryPage() {
  return (
    <div>
      <History />
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 4 }}>
        <Typography variant="subtitle2" fontWeight={"bold"} color="#199FB1">
          Export Logs to CSV
        </Typography>
      </Box>
    </div>
  );
}

export default HistoryPage;
