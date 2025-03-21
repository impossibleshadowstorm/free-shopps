import React from "react";
import { styled } from "@mui/material/styles";
import { InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  borderRadius: "10px", // Adjust as needed
  overflow: "hidden",
  backgroundColor: "#FFFFFF33",
  minWidth: "350px",
  height: "40px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
  padding: theme.spacing(1),
}));

const SearchButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  borderRadius: "10px",
  backgroundColor: "#199FB1",
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const HeaderSearchBar = () => {
  return (
    <SearchBarContainer>
      <StyledInputBase
        inputProps={{ "aria-label": "search" }}
      />
      <SearchButton aria-label="search">
        <SearchIcon />
      </SearchButton>
    </SearchBarContainer>
  );
};

export default HeaderSearchBar;
