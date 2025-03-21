import { IconButton, Box, AppBar, Toolbar, styled, Stack } from "@mui/material";
import Profile from "./Profile";
import { useEffect, useState, useContext } from "react";
import { Icon } from "@iconify/react";
import { DashboardContext } from "@/app/context/DashboardContext";
import Notification from "./Notification";
import SearchBar from "./HeaderSearchBar";

const Header = () => {
  const [_height, setHeight] = useState("0px");

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    width: "95%",
    background: "transparent",
    borderBottom: "1px solid #FFF",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    marginLeft: "40px",
    [theme.breakpoints.up("lg")]: {
      minHeight: "70px",
    },
    zIndex: "unset",
  }));

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setHeight("0px");
      }
    };
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { isMobileSidebar, setIsMobileSidebar } = useContext(DashboardContext);

  return (
    <>
      <AppBarStyled position="sticky" color="default">
        <ToolbarStyled>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={() => setIsMobileSidebar(!isMobileSidebar)}
            sx={{
              display: {
                lg: "none",
                xs: "inline",
              },
            }}
          >
            <Icon icon="solar:list-bold" height={20} />
          </IconButton>

          <Box flexGrow={1} />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <SearchBar />
            <Stack spacing={2} direction="row" alignItems="center">
              <Notification />
              <Profile />
            </Stack>
          </Box>
        </ToolbarStyled>
      </AppBarStyled>
    </>
  );
};

export default Header;
