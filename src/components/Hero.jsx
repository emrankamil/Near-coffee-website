import { Box, Typography, colors } from "@mui/material";
import React from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme";

function Hero() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      display={"flex"}
      px={"60px"}
      textAlign={"left"}
      alignItems={"center"}
      height={"100vh"}
      backgroundColor={colors.primary[500]}
    >
      <Box m={"20px"}>
        <Box>
          <Typography
            variant="h1"
            color={colors.gray[100]}
            sx={{
              fontSize: "123px",
              fontWeight: "700",
              lineHeight: "110px",
              textAlign: "left",
            }}
          >
            Welcome to Near Coffee
          </Typography>
        </Box>
        <Box m="20px">
          <Typography variant="h4" color={colors.gray[100]}>
            Start your BrewFinder journey today and unlock a world of coffee
            possibilities. Your next caffeine fix is just a click away!
          </Typography>
        </Box>
        <Box display={"flex"} m={"20px"} gap={'20px'}>
          <SignUp />
          <Login />
        </Box>
      </Box>

      <Box>
        <img
          src="../../assets/HomeImg.png"
          alt="home"
          style={{
            width: "400px",
            height: "650px",
            top: "50px",
            gap: "0px",
            opacity: "0px",
          }}
        />
      </Box>
    </Box>
  );
}

export default Hero;
