"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { InputBase, IconButton, Typography } from "@mui/material";

const SearchBarContainer = styled("div")(() => ({
  display: "flex",
  borderRadius: "10px", // Adjust as needed
  overflow: "hidden",
  backgroundColor: "#E3E3E3",
  minWidth: "350px",
  height: "40px",
  border: "1px solid #000",
  margin: 0,
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
  height: "40px",
  marginLeft: "-30px",
  backgroundColor: "#199FB1",
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const SearchBar = (props: { placeholder: string }) => {
  return (
    <>
      <SearchBarContainer>
        <StyledInputBase
          placeholder={props.placeholder}
          inputProps={{ "aria-label": "search" }}
        />
      </SearchBarContainer>
      <SearchButton aria-label="search">
        <Typography variant="subtitle2" fontWeight={"bold"}>
          Search
        </Typography>
      </SearchButton>
    </>
  );
};

export default SearchBar;
