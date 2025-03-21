import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material";
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";
import {
  ArrowLeft,
  ArrowRight,
  CheckBoxOutlineBlank,
  MoreHoriz,
  Tune,
} from "@mui/icons-material";
import SearchBar from "./SearchBar";

const histories = [
  {
    id: "876545678",
    action: "Booked service",
    date: "July 3, 2023 12:27 pm",
  },
  {
    id: "876545678",
    action: "Booked service",
    date: "July 3, 2023 12:27 pm",
  },
  {
    id: "876545678",
    action: "Booked service",
    date: "July 3, 2023 12:27 pm",
  },
  {
    id: "876545678",
    action: "Booked service",
    date: "July 3, 2023 12:27 pm",
  },
  {
    id: "876545678",
    action: "Booked service",
    date: "July 3, 2023 12:27 pm",
  },
];

const History = () => {
  return (
    <DashboardCard
      title="Activity History"
      subtitle="View historical data of actions taken within the app."
      disable_padding
      action={
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <SearchBar placeholder="Search by user, date, or activity type" />
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
        >
          <Table
            sx={{
              whiteSpace: "nowrap",
              padding: 0,
            }}
          >
            <TableHead sx={{ borderBottom: "2px solid #199FB1" }}>
              <TableRow>
                <TableCell>
                  <CheckBoxOutlineBlank />
                </TableCell>
                <TableCell>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    User
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    Action
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    Date & Time
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    React
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                key={"xyz"}
                sx={{
                  backgroundColor: "white",
                }}
              >
                <TableCell colSpan={6}>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  ></Typography>
                  <Typography variant="subtitle2">
                    Showing 8 of 877 total Ratings
                  </Typography>
                </TableCell>
              </TableRow>
              {histories.map((history, index) => (
                <TableRow
                  key={history.id + index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#F5F5F5" : "white",
                    borderBottom: "2px solid #CFCECE",
                  }}
                >
                  <TableCell>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      <CheckBoxOutlineBlank />
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Avatar
                      src={
                        index === 0
                          ? "/images/profile/user-1.png"
                          : "/images/profile/user-2.png"
                      }
                      alt="image"
                      sx={{
                        width: 35,
                        height: 35,
                        marginRight: "10px",
                      }}
                    />
                    <Typography variant="subtitle2" fontWeight={"bold"}>
                      {index === 0 ? "Yeray Rosalos" : "Alan Robert"}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle2">
                          {history.action}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="subtitle2">{history.date}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <MoreHoriz sx={{ color: "#199FB1" }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box
            sx={{
              padding: "30px",
              paddingBottom: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle2">Delete</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle2" sx={{ paddingRight: "10px" }}>
                Displaying Page{" "}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #CFCECE",
                  borderRadius: "5px",
                  padding: "1.5px 8px",
                  marginRight: "10px",
                }}
              >
                First
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #CFCECE",
                  borderRadius: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRight: "1px solid #CFCECE",
                  }}
                >
                  <ArrowLeft sx={{ color: "#FFCC40", fontSize: "20px" }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    padding: "1.5px 8px",
                    borderRight: "1px solid #CFCECE",
                  }}
                >
                  1
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "12px",
                    padding: "1.5px 8px",
                    borderRight: "1px solid #CFCECE",
                  }}
                >
                  2
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "12px",
                    padding: "1.5px 8px",
                    borderRight: "1px solid #CFCECE",
                  }}
                >
                  3
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "12px",
                    padding: "1.5px 8px",
                  }}
                >
                  4
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "12px",
                    padding: "1.5px 8px",
                  }}
                >
                  4
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderLeft: "1px solid #CFCECE",
                  }}
                >
                  <ArrowRight sx={{ color: "#199FB1", fontSize: "20px" }} />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #CFCECE",
                  borderRadius: "5px",
                  padding: "1.5px 8px",
                  marginLeft: "10px",
                }}
              >
                Last
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </DashboardCard>
  );
};

export default History;
