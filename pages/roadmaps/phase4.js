import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/roadmap'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { StarIcon } from '@chakra-ui/icons'

const Roadmap = () => (
  <Layout title="Phase4">
    <Container>
      <Title>
        Phase Four <Badge></Badge>
      </Title>

      <P display="inline" padding={10}>
        <StarIcon paddingRight={1.5} />
        Depending on the timeframe this can be unlocked sooner than other phase activations.
      </P>
    </Container>
  </Layout>
)

export default Roadmap
