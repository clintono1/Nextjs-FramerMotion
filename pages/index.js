import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
 import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoDiscord,
  // IoContract
} from 'react-icons/io5'
import thumbMetaMask from '../public/images/metamask.png'
import thumbOpenSea from '../public/images/opensea.png'

const Page = () => {
  return (
    <Layout>
      <Container maxW = "container.sm" >
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          The Coolest Pugs on the blockchain.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Prof. Frank Pugenstien
            </Heading>
            <p>Genius Inventor, Professor at Pawvard University</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/RickPug.png"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Thesis
          </Heading>
          <Paragraph 
          
          >
            After years of being a model citzen, I&apos;ve realized that no one can guarantee me a 
            prosperous future but myself. 
            I only wish that I could have come to that conclusion sooner.
            According to my calculations the Social Security program will run out before I can even cash in 
            on my benefits.
            And so I decided I needed to gather the greatest minds to form an
            organization that can support the financial freedom of the
            people of the metaverse. 
            The Tridyminiumobulator(try-die-mini-uh-mob-you-later) that I built converts
            Etheruem into energy to bring my parallel selves into this world.
            You can contribute to my research by minting my counterparts.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/roadmaps">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="pink">
                Roadmap
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Blueprint
          </Heading>
          <BioSection>
            <BioYear>Supply:</BioYear>
            8,888 programmatically generated and individually unique pugs. Each pug
            was created equally, but their different traits make them special.
          </BioSection>
          <BioSection>
            <BioYear>Location:</BioYear>
            To keep the laws of physics and inter dimensional travel intact, our
            pugs live on the Etheruem blockchain as ERC-721 tokens. Transfers
            aren&apos;t always perfect and at times produce pugs with moving traits.
            Gotta love science!
          </BioSection>
          <BioSection>
            <BioYear>Soxialverse:</BioYear>
            Our SoxialPugs are the first to enter the Soxialverse. Be on the lookout for which agents join next.
            Pug owners will be given priority airdrops and mint privileges for future Soxialverse NFTs. 
          </BioSection>
          <BioSection>
            <BioYear>Membership:</BioYear>
            Owning a pug will give rights to other exclusive membership benefits. Like gaining
            access to PUG-HQ, and professionally designed merch.
          </BioSection>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            The Soxial Games
          </Heading>
          <Paragraph 
          
          >
            Participate in our interactive twitter guessing game meant to stimulate organic community growth and fun.
          </Paragraph>
          <BioSection>
            <BioYear>Rules:</BioYear>
            The rules are simple. To participate you must be following us on twitter. Guess the location of the buried treasure. Participating gives you one point and correct answers win double points.
          </BioSection>
          <BioSection>
          <BioYear>How-To-Play:</BioYear>
            Look out for our posts tagged #soxialgames. Commenting with your wallet address and answer will qualify as a valid response. 
           </BioSection>
           <BioSection>
          <BioYear>Whitelist:</BioYear>
            Climb the leaderboards by participating. The higher up you are the higher the chance of winning a WL spot.
           </BioSection>
           <BioSection>
          <BioYear>Why:</BioYear>
            Our club is dedicated to putting the community first. If we can add value or fun to your day even by just a little bit then we are doing something right. 
           </BioSection>
          {/* <Box align="center" my={4}>
            <NextLink href="/">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
                LeaderBoards
              </Button>
            </NextLink>
          </Box> */}
        </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Official Links & Soxials
        </Heading>
        <List>
          <ListItem>
            <Link href="https://twitter.com/SoxialSecurity" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @soxialsecurity
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/soxialsecurity/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @soxialsecurity
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <NextLink href="/discord">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                Discord
              </Button>
            </NextLink>
          </ListItem>
          <ListItem>
          {/* <Link href="" target="_blank"> */}
              {/* <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoContract} />}
              >
                Smart Contract
              </Button> */}
            {/* </Link> */}
          </ListItem>
        </List>
        <SimpleGrid columns={[1, 2, 2]} gap={5}>
          <GridItem
            href="https://www.youtube.com/watch?v=Af_lQ1zUnoM"
            title="Metamask Tutorial"
            thumbnail={thumbMetaMask}
          >
            Metamask complete setup
          </GridItem>
          <GridItem
            href="https://www.youtube.com/watch?v=eRYDefnf7jQ&t=7s"
            title="OpenSea"
            thumbnail={thumbOpenSea}
          >
            OpenSea Website Tutorial
          </GridItem>
        </SimpleGrid>
        </Section>

      </Container>
    </Layout>
  )
}

export default Page
