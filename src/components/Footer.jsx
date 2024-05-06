import { Box, useTheme, Typography } from '@mui/material'
import React from 'react'
import { tokens } from '../theme';
import Logo from './Logo';
function Footer() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box>
      {/* footer */}
      <Box
        display="flex"
        justifyContent="space-between"
        p="100px"
        width="100%"
        backgroundColor={colors.primary[500]}
      >
        <Logo />
        <Box display="flex" gap="20px" alignItems="center">
          <Box>
            <Typography
              variant="h4"
              color={colors.gray[100]}
              sx={{ mb: "5px" }}
            >
              Home
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h4"
              color={colors.gray[100]}
              sx={{ mb: "5px" }}
            >
              Products
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h4"
              color={colors.gray[100]}
              sx={{ mb: "5px" }}
            >
              Facilities
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h4"
              color={colors.gray[100]}
              sx={{ mb: "5px" }}
            >
              Reviews
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer
