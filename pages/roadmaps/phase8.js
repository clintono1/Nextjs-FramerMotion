import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/roadmap'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { StarIcon } from '@chakra-ui/icons'

const Roadmap = () => (
  <Layout title="Phase8">
    <Container>
      <Title>
        Phase Eight <Badge></Badge>
      </Title>

      <P display="inline" padding={10}>
        <StarIcon paddingRight={1.5} />
        More information to be released as we approach this activation level.
      </P>
    </Container>
  </Layout>
)

export default Roadmap
