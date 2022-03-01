import {
  Container,
  Box,
  List,
  ListItem,
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
          Participate in our Soxial Games to win a whitelist spot.
        </Box>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Use &quot;CMD + F&quot; or &quot;CTRL + F&quot; to search for your wallet address on the
          list below.
        </Box>
        <List
        align="center"
        p={5}
        >
          <ListItem>0xB83D732e8c4F756b37d5095783d582097189049D</ListItem>
          <ListItem>0x240F9324d1dEf99355dD7c69faBe5AddD3e1c48B</ListItem>
          <ListItem>0x55DF066A2C5dF256447a7a698e69103D93656316</ListItem>
          <ListItem>0xe04DAcd287440a3A6635Fa72d9f499FA2E94d2aa</ListItem>
          <ListItem>0x6a583fE28fD74DAb85924D4E5F08f8bdF3c32248</ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Page
