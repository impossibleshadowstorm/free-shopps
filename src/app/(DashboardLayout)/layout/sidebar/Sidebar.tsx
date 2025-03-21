import { useMediaQuery, Box, Drawer } from "@mui/material";
import SidebarItems from "./SidebarItems";
import { useContext } from "react";
import { DashboardContext } from "@/app/context/DashboardContext";
import Scrollbar from "@/app/(DashboardLayout)/components/custom-scroll/Scrollbar";

const Sidebar = (props: { sidebarWidth: string }) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const { isMobileSidebar, setIsMobileSidebar } = useContext(DashboardContext);

  if (lgUp) {
    return (
      <Box
        sx={{
          width: props.sidebarWidth,
          flexShrink: 0,
          marginLeft: "100px",
          marginBottom: "20px",
        }}
      >
        <Drawer
          anchor="left"
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: props.sidebarWidth,
              marginLeft: "20px",
              boxShadow: "0 9px 17.5px rgb(0, 0, 0, 0.05)!important",
              borderRadius: "10px",
              top: "40px",
              marginBottom: "20px",
            },
          }}
        >
          <Scrollbar sx={{ height: "calc(100% - 73px)" }}>
            <SidebarItems />
          </Scrollbar>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebar}
      onClose={() => setIsMobileSidebar(!isMobileSidebar)}
      variant="temporary"
      PaperProps={{
        sx: {
          width: props.sidebarWidth,
          boxShadow: "0 9px 17.5px rgb(0, 0, 0, 0.05)!important",
          overflowX: "hidden",
        },
      }}
    >
      {/* ------------------------------------------- */}
      {/* Sidebar For Mobile */}
      {/* ------------------------------------------- */}
      <Scrollbar sx={{ height: "calc(100% - 73px)", overflowX: "hidden" }}>
        <SidebarItems />
      </Scrollbar>
    </Drawer>
  );
};

export default Sidebar;
