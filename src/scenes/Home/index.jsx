import { Box } from '@mui/material'
import React from 'react'
import Hero from '../../components/Hero'
import DiscoverSection from '../../components/DiscoverSection'
import DelveDeeperSection from '../../components/DelveDeeperSection';
import DownloadApp from '../../components/DownloadApp';
import Footer from '../../components/Footer';

function Home() {
  return (
    <Box gap={"40px"}>
      <Hero />
      <Box my="-120px">
        <img
          src="../../assets/coffee-image-2.png"
          alt="logo"
          style={{ width: "160px", height: "220px" }}
        />
      </Box>
      <Box my="-120px" display="flex" justifyContent="right">
        <img
          src="../../assets/americano.png"
          alt="logo"
          style={{ width: "160px", height: "220px" }}
        />
      </Box>
      <DiscoverSection />
      <Box my="-120px" display="flex" justifyContent="right">
        <img
          src="../../assets/coffee-beans-2.png"
          alt="logo"
          style={{ width: "170px", height: "200px" }}
        />
      </Box>
      <DelveDeeperSection />
      <DownloadApp/>
      <Footer/>
    </Box>
  );
}

export default Home
