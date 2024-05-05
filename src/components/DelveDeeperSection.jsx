import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import Carousel from './Carousel';
import { tokens } from '../theme';

function DelveDeeperSection() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
  return (
    <Box>
        {/* title */}
      <Box>
        <Box>
          <Typography
            variant="h1"
            color={colors.gray[500]}
            sx={{
              fontWeight: "700",
              lineHeight: "110px",
              textAlign: "left",
            }}
          >
            Delve Deeper
          </Typography>
        </Box>
        <Box m="20px">
          <Typography variant="h4" color={colors.gray[500]}>
            Our platform embodies the essence of coffee exploration, rooted in
            our dedication to enhancing your coffee journey
          </Typography>
        </Box>
      </Box>
      {/* slider */}
      <Carousel/>
    </Box>
  );
}

export default DelveDeeperSection
