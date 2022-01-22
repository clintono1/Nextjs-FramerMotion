import {
    Container,
    Box,
    Link,
    Button,
    Icon,
    Heading,
    SimpleGrid,
    useColorModeValue
  } from '@chakra-ui/react'
  // import { ChevronRightIcon } from '@chakra-ui/icons'
  // import Paragraph from '../components/paragraph'
  // import { BioSection, BioYear } from '../components/bio'
  import Layout from '../components/layouts/article'
  import Section from '../components/section'
  import {
    IoLogoTwitter,
    IoLogoInstagram,
  } from 'react-icons/io5'
  
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
            Good vibes and authenticity are our values.   
          </Box>
          <Heading as="h3" fontSize={20} mb={4}>
        We feel the early stages of the community are the most important.
      </Heading>
      <Heading as="h4" fontSize={14} mb={1}>
        Invitations will be sent to those who engage with our soxial media platforms first.
      </Heading>

      <SimpleGrid align="center" columns={[1, 1, 2]} gap={1}  p={3}>
          <Section delay={0.1}>
          <Link href="https://twitter.com/SoxialSecurity" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @soxialsecurity
              </Button>
            </Link>
        </Section>
        <Section delay={0.1}>
        <Link href="https://www.instagram.com/soxialsecurity/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @soxialsecurity
              </Button>
            </Link>
        </Section>
        </SimpleGrid>
  
        </Container>
      </Layout>
    )
  }
  
  export default Page
  