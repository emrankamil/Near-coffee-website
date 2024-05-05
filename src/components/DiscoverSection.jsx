import { Typography, Box, useTheme } from '@mui/material';
import React from 'react'
import { tokens } from '../theme';

function DiscoverSection() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box px="40px" m="20px">
      {/* discover section */}
      <Box display="flex">
        <Box>
          <img
            src="../../assets/Coffee.png"
            alt="discover"
            style={{
              width: "400px",
              height: "400px",
              top: "50px",
              gap: "0px",
              opacity: "0px",
            }}
          />
        </Box>
        <Box>
          <Box>
            <Typography variant="h1">Discover Your Perfect Cup</Typography>
          </Box>
          <Box>
            <Typography variant="h4">
              Are you in need of a caffeine fix? Look no further than Coffee
              Near your go-to companion for finding the best coffee shops
              nearby. Whether you're a coffee connoisseur or just in need of a
              pick-me-up, Coffee Near is here to guide you to your next favorite
              spot.
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Explore Section */}
    </Box>
  );
}

export default DiscoverSection
