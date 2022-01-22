import { Container, Badge } from '@chakra-ui/react'
import { Title } from '../../components/roadmap'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { StarIcon } from '@chakra-ui/icons'

const Roadmap = () => (
  <Layout title="Phase8">
    <Container padding={5}>
      <Title>
        Phase Eight <Badge></Badge>
      </Title>

      <P display="inline" padding={10}>
        <StarIcon paddingRight={1.5} />
        We will develop an app that will serve as a wallet to hold
        your PUGs and other NFTs you may own. The App will provide a way to show your PUG for entry to
        exclusive events and discounts with vendors connected with the Soxial Security Club.

      </P>
      <P display="inline" padding={10}>
        <StarIcon paddingRight={1.5} />
        Holders can participate in a walk to earn program. Taking thier pugs on walks using augmented reality.
        Climbing the leaderboards and winning weekly competitions can earn you more reward tokens.

      </P>
    </Container>
  </Layout>
)

export default Roadmap
