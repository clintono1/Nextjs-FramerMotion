import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/roadmap'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { StarIcon } from '@chakra-ui/icons'

const Roadmap = () => (
  <Layout title="Phase1">
    <Container>
      <Title>
        Phase One <Badge>In Progress</Badge>
      </Title>

      <P display="inline" padding={10}>
        <StarIcon paddingRight={1.5} />
        We are striving to be a blue chip nft that provides value to our owners. Through
        proper branding and marketing, Soxial Pugs can become a passive income
        bearing asset. Help us on our journey to reach these goals.
      </P>

      <List ml={4} my={4} spacing={2}>
        <ListItem>
          <Meta>Discord</Meta>
          <Link href="https://www.inkdrop.app/">
            20,000 Discord Members <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Influencer Marketing</Meta>
          <span>
            888 Pugs will be reserved for partnerships with influencers. If you think you
            fit the criteria please reach out to us!
          </span>
        </ListItem>
        <ListItem>
          <Meta>Giveaways & Challenges</Meta>
          <span>
            We plan to encourage community engagment with raffles of rare pugs
            and monetary prizes of up to $25,000!
          </span>
        </ListItem>
        <ListItem>
          <Meta>Mint Date Reveal</Meta>
          <span>
            Once our community has grown enough a mint date will be released. We
            plan to offer a whitelist for early adopters.
          </span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Roadmap
