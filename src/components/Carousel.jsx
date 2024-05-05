import { Box, Button, useTheme } from "@mui/material";
import { carouselSlice } from "../features/carousel/carouselSlice";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useSelector, useDispatch } from "react-redux";
import { tokens } from "../theme";
import CarouselContent from "./CarouselContent";

function Carousel({content}) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const colors = tokens(theme.palette.mode);
  const carouselData = useSelector((state) => state.content);
  const carouselDataLength = carouselData.length
  const activeIndex = useSelector((state) => state.carousel.value);
  console.log(carouselData)

  // const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    dispatch(carouselSlice.actions.nextSlide(carouselDataLength)); 
  };
  const prevSlide = () => {
    dispatch(carouselSlice.actions.prevSlide(carouselDataLength)); 
  };
  return (
    <Box
      className="carousel"
      backgroundColor="#e1dcd1"
      m="40px"
      px="20px"
      borderRadius="0.75"
      // height="100hv"
      sx={{ boxShadow: "0px 4px 4px 0px #00000040" }}
    >
      <Box display="flex" alignItems="center">
        {/* left arrow */}
        <Button onClick={prevSlide}>
          <ArrowBackIosNewIcon
            style={{ fontSize: 40 }}
            color='gray'
          />
        </Button>
        {/* main content */}
        <Box flex="1">
          <CarouselContent
            // title="Coffee Shop Discovery"
            title={carouselData[activeIndex]['title']}
            subtitle="The app allows users to browse through a curated list of nearby coffee shops."
            image="../../assets/HomeImg.png"
            key_val="1"
          />
        </Box>
        {/* right arrow */}
        <Button onClick={nextSlide}>
          <ArrowForwardIosIcon
            style={{ fontSize: 40 }}
            color={colors.primary[500]}
          />
        </Button>
      </Box>
      {/* navigaion */}
      <Box></Box>
    </Box>
  );
}

export default Carousel;
