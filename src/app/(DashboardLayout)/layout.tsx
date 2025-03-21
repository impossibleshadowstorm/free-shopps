"use client";
import { styled, Container, Box } from "@mui/material";
import React from "react";
import Header from "@/app/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/app/(DashboardLayout)/layout/sidebar/Sidebar";
import Image from "next/image";
import theme from "@/utils/theme";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100vw",
  overflowX: "hidden",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "25px",
  flexDirection: "column",
  backgroundColor: "transparent",
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarWidth = "230px";

  return (
    <MainWrapper className="mainwrapper">
      <PageWrapper className="page-wrapper">
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "250px",
            width: "100vw",
            zIndex: -100,
          }}
        >
          <Image
            src="/images/backgrounds/background.png"
            alt="logo"
            fill
            priority
          />
        </Box>
        {/* ------------------------------------------- */}
        {/* Sidebar */}
        {/* ------------------------------------------- */}

        <Box
          sx={{
            margin: "0 40px",
          }}
        >
          <Sidebar sidebarWidth={sidebarWidth} />
        </Box>
        {/* ------------------------------------------- */}
        {/* PageContent */}
        {/* ------------------------------------------- */}
        <Box
          sx={{
            [theme.breakpoints.up("lg")]: {
              marginLeft: sidebarWidth,
              marginTop: "30px",
            },
          }}
        >
          {/* ------------------------------------------- */}
          {/* Header */}
          {/* ------------------------------------------- */}
          <Header />
          <Container
            sx={{
              paddingTop: "20px",
              marginLeft: "20px",
              maxWidth: "1100px",
              minHeight: "calc(100vh - 229px)",
            }}
          >
            {/* ------------------------------------------- */}
            {/* Page Route */}
            {/* ------------------------------------------- */}
            <Box>{children}</Box>
          </Container>
        </Box>
      </PageWrapper>
    </MainWrapper>
  );
}
