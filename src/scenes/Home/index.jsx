import { Box } from '@mui/material'
import React from 'react'
import Hero from '../../components/Hero'
import DiscoverSection from '../../components/DiscoverSection'

function Home() {
  return (
    <Box gap={'40px'}>
        <Hero />
        <DiscoverSection />
    </Box>
  )
}

export default Home
