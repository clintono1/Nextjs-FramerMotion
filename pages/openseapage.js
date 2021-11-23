import {
    Container,
    Box,
    useColorModeValue
  } from '@chakra-ui/react'
  // import { ChevronRightIcon } from '@chakra-ui/icons'
  // import Paragraph from '../components/paragraph'
  // import { BioSection, BioYear } from '../components/bio'
  import Layout from '../components/layouts/article'
  // import Section from '../components/section'
  // import { GridItem } from '../components/grid-item'
  
  const Page = () => {
    return (
      <Layout>
        <Container>
          <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mb={6}
            align="center"
          >
            A Link to our opensea page will be made availble once minting has started!
          </Box>
  
        </Container>
      </Layout>
    )
  }
  
  export default Page
  