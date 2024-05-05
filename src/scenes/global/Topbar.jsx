import React, { useContext } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import Logo from "../../components/Logo";
import SignUp from "../../components/SignUp";
import Login from "../../components/Login";

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p="16px 100px 16px 100px"
      backgroundColor={colors.primary[500]}
      opacity="0.85"
    >
      <Logo />
      <Box display="flex" gap="20px" alignItems="center">
        <Box>
          <Typography variant="h4" color={colors.gray[100]} sx={{ mb: "5px" }}>
            Home
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" color={colors.gray[100]} sx={{ mb: "5px" }}>
            Products
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" color={colors.gray[100]} sx={{ mb: "5px" }}>
            Facilities
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" color={colors.gray[100]} sx={{ mb: "5px" }}>
            Reviews
          </Typography>
        </Box>
      </Box>
      <Box alignItems="center" display="flex" gap="24px">
        <SignUp />
        <Login />
      </Box>
    </Box>
  );
}

export default Topbar;
