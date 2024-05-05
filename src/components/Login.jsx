import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

function SignUp() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      className="button1"
      border='1px solid'
      borderColor={colors.secondary[500]}
      sx={{ p: "12px 24px 12px 24px" }}
    >
      <Typography variant="h4" color={colors.secondary[500]}>
        Login
      </Typography>
    </Box>
  );
}

export default SignUp;
