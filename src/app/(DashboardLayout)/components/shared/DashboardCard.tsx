import React from "react";
import { Card, CardContent, Typography, Stack, Box } from "@mui/material";

type Props = {
  title?: string;
  subtitle?: string;
  action?: JSX.Element | any;
  footer?: JSX.Element;
  cardheading?: string | JSX.Element;
  headtitle?: string | JSX.Element;
  headsubtitle?: string | JSX.Element;
  children?: JSX.Element;
  middlecontent?: string | JSX.Element;
  disable_padding?: boolean;
};

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
  disable_padding,
}: Props) => {
  return (
    <Card sx={{ padding: 0 }} elevation={9} variant={undefined}>
      {cardheading ? (
        <CardContent>
          <Typography variant="h5">{headtitle}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {headsubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent
          sx={{
            p: disable_padding ? 0 : "30px",
          }}
        >
          {title ? (
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                mb: disable_padding ? 0 : 3,
                padding: disable_padding ? "30px" : 0,
              }}
            >
              <Box>
                {title ? <Typography variant="h5">{title}</Typography> : ""}

                {subtitle ? (
                  <Typography variant="subtitle2" color="textSecondary">
                    {subtitle}
                  </Typography>
                ) : (
                  ""
                )}
              </Box>
              {action}
            </Stack>
          ) : null}

          {children}
        </CardContent>
      )}
      {middlecontent}
      {footer}
    </Card>
  );
};

export default DashboardCard;
