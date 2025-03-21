import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";
import {
  ArrowLeft,
  ArrowRight,
  CheckBoxOutlineBlank,
  MoreHoriz,
} from "@mui/icons-material";

const chats = [
  {
    id: "#00987654321",
    name: "",
    post: "Web Designer",
    pname: "Elite Admin",
    priority: "Low",
    pbg: "primary.main",
    budget: "US Dollar",
    date: "1.00",
    status: "Pending",
    method: "$",
  },
  {
    id: "#00987654321",
    name: "Andrew McDownland",
    post: "Project Manager",
    pname: "Real Homes WP Theme",
    priority: "Medium",
    pbg: "secondary.main",
    budget: "US Dollar",
    date: "1.00",
    status: "Pending",
    method: "$",
  },
  {
    id: "#00987654321",
    name: "Christopher Jamil",
    post: "Project Manager",
    pname: "MedicalPro WP Theme",
    priority: "High",
    pbg: "error.main",
    budget: "US Dollar",
    date: "1.00",
    status: "Pending",
    method: "$",
  },
  {
    id: "#00987654321",
    name: "Nirav Joshi",
    post: "Frontend Engineer",
    pname: "Hosting Press HTML",
    priority: "Critical",
    pbg: "success.main",
    budget: "US Dollar",
    date: "1.00",
    status: "Pending",
    method: "$",
  },
];

const MultiCurrency = () => {
  return (
    <DashboardCard title="Currency List" disable_padding>
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
                    Currency Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    Symbol
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    Exchange Rate
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    Actions
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {chats.map((product, index) => (
                <TableRow
                  key={product.name}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#F5F5F5" : "white",
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
                  <TableCell align="left">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle2">
                          {product.budget}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="subtitle2">
                      {product.method}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="subtitle2">{product.date}</Typography>
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
              marginTop: "70px",
              padding: "30px",
              paddingBottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#199FB1",
                color: "white",
                borderRadius: "10px",
                padding: "5px 25px",
                cursor: "pointer",
                marginRight: "10px",
                fontWeight: "bold",
              }}
            >
              Save Changes
            </Box>
            <Box
              sx={{
                backgroundColor: "transparent",
                color: "#199FB1",
                borderRadius: "10px",
                padding: "5px 25px",
                border: "1px solid #199FB1",
                fontWeight: "bold",
              }}
            >
              Add New Currency
            </Box>
          </Box>
        </Box>
      </Box>
    </DashboardCard>
  );
};

export default MultiCurrency;
