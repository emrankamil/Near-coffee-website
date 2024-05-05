import { Typography, Box, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

function DiscoverSection() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      {/* discover section */}
      <Box
        display="flex"
        alignItems="center"
        px="40px"
        m="20px"
        gap={"20px"}
      >
        <Box m="20px">
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
        <Box m="20px">
          <Box>
            <Typography
              variant="h2"
              fontWeight={"bold"}
              color={colors.gray[500]}
            >
              Discover Your Perfect Cup
            </Typography>
          </Box>
          <Box m="20px">
            <Typography variant="h4" color={colors.gray[500]}>
              Are you in need of a caffeine fix? Look no further than Coffee
              Near your go-to companion for finding the best coffee shops
              nearby. Whether you're a coffee connoisseur or just in need of a
              pick-me-up, Coffee Near is here to guide you to your next favorite
              spot.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} alignItems='center' mb="-120px">
        <Box>
          <img
            src="../../assets/ice-coffee.png"
            alt="logo"
            style={{ width: "300px", height: "180px" }}
          />
        </Box>
        <Box>
          <img
            src="../../assets/coffee-tools.png"
            alt="menu"
            style={{ width: "270px", height: "240px" }}
          />
        </Box>
      </Box>
      {/* Explore Section */}
      <Box
        display="flex"
        alignItems="center"
        backgroundColor="#ffffff"
        p="80px"
        
      >
        <Box m="20px" px="40px">
          <Box>
            <Typography
              variant="h2"
              fontWeight={"bold"}
              color={colors.gray[500]}
            >
              Explore Neary Cafés{" "}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" color={colors.gray[500]}>
              With Coffee Near, you can easily browse through a curated list of
              nearby coffee shops. From cozy corners to trendy hubs, our app
              features a diverse selection of cafés to suit every taste. Each
              listing provides essential details such as the shop's name,
              distance from your current location, and ratings from fellow
              coffee enthusiasts.
            </Typography>
          </Box>
        </Box>
        <Box>
          <img
            src="../../assets/Explore.svg"
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
      </Box>
    </Box>
  );
}

export default DiscoverSection;
