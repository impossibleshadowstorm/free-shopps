import { Box } from "@mui/material";
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";
import { Tune } from "@mui/icons-material";
import SearchBar from "./SearchBar";

const UserManagement = () => {
  return (
    <DashboardCard
      title="User Management"
      subtitle="View and manage all users."
      disable_padding
      action={
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <SearchBar placeholder="Search user by their name" />
          <Tune />
        </Box>
      }
    >
      <Box sx={{ overflow: "auto" }}>
        <Box
          mt={2}
          sx={{
            width: "100%",
            display: "table",
            tableLayout: "fixed",
            padding: 0,
          }}
        ></Box>
      </Box>
    </DashboardCard>
  );
};

export default UserManagement;
