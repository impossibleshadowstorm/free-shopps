import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";
import {
  ArrowLeft,
  ArrowRight,
  CheckBoxOutlineBlank,
  MoreHoriz,
  Tune,
} from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function CurrencySelectorUI() {
  return (
    <>
    <div
        style={{  fontSize: "1rem", marginBottom: "12px",fontWeight: "bold" }}
      >
        Select Currency
      </div>
    <FormControl
      style={{
        width: "50%",
        border: "2px solid #ccc",
        borderRadius: "10px",
      }}
    >

      <FormControl
        component="fieldset"
        style={{
          backgroundColor: "#ecf7fc",
          padding: "6px 6px",
          borderRadius: "10px",
        }}
      >
        <RadioGroup aria-label="currency" name="currency" value="multi">
          <FormControlLabel
            value="multi"
            control={<Radio checked style={{ color: "#90CAF9" }} />}
            label={<span style={{ fontWeight: "600" }}>Multi-Currency</span>}
            style={{ width: "100%" }} // Added background color here
          />
        </RadioGroup>
      </FormControl>
      <FormControl
        component="fieldset"
        style={{
          // backgroundColor: "#ecf7fc",
          padding: "6px 6px",
          borderRadius: "10px",
        }}
      >
        <RadioGroup aria-label="currency" name="currency" value="multi">
          <FormControlLabel
            value="single"
            control={<Radio />}
            label="Single"
            style={{ width: "100%" }}
          />
        </RadioGroup>
      </FormControl>
    </FormControl>
    </>
  );
}
function SingleCurrencySelectorUI() {
  return (
    <div>
      <div
        style={{  fontSize: "1.2rem", marginBottom: "12px" }}
      >
        Selected Single Currency
      </div>
      <div style={{ marginBottom: "8px", color: "#8f8f8f", fontSize: "17px" }}>
        Display Currency
      </div>
      <div
        style={{
          width: "50%",
          border: "2px solid #ccc",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "5px",
          marginTop: "20px",
          marginBottom:"30px"
        }}
      >
        <span
          style={{ paddingLeft: "10px", color: "#8f8f8f", fontSize: "17px" }}
        >
          INR-Indian Ruppes
        </span>
        <span
          style={{ paddingRight: "5px",  color: "#8f8f8f" }}
        >
          <KeyboardArrowDownIcon  style={{fontSize: "33px"}}/>
        </span>
      </div>
    </div>
  );
}

const MultiCurrencyMgmt = () => {
  return (
    <DashboardCard
      title="Multi Currency"
      subtitle="Configure and manage the currencies available for transactions in the app. Set exchange rates, enable or disable currencies, and ensure a seamless multi-currency experience for users."
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
          <CurrencySelectorUI />
          <div style={{ height: "35px", width: "100%" }}></div>
          <SingleCurrencySelectorUI />
        </Box>
      </Box>
    </DashboardCard>
  );
};

export default MultiCurrencyMgmt;
