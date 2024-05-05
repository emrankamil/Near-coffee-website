import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

function SignUp() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box className="button1"
    backgroundColor={colors.secondary[500]}
    sx={{ p: "12px 24px 12px 24px" }}
    >
      <Typography variant="h4" color={colors.gray[100]}>
        Sign Up
      </Typography>
    </Box>
  );
}

export default SignUp;
