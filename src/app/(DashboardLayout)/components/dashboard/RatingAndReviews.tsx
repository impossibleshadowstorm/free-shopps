import { Box } from "@mui/material";
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";
import { Tune } from "@mui/icons-material";

const RatingAndReviews = () => {
  return (
    <DashboardCard
      title="Rating And Reviews"
      subtitle="View and manage all ratings and reviews."
      disable_padding
      action={
        <>
          <Tune />
        </>
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

export default RatingAndReviews;
