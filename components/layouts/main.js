import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import VoxelPlanetLoader from '../voxel-planet-loader'

const LazyVoxelPlanet = dynamic(() => import('../voxel-planet'), {
  ssr: false,
  loading: () => <VoxelPlanetLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, inital-scale=1" />
        <title>Soxial Security Club - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelPlanet />
        {children}
      </Container>
    </Box>
  )
}

export default Main
