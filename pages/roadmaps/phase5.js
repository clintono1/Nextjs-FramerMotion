import { Container, Badge } from '@chakra-ui/react'
import { Title} from '../../components/roadmap'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { StarIcon } from '@chakra-ui/icons'

const Roadmap = () => (
  <Layout title="Phase5">
    <Container>
      <Title>
        Phase Five <Badge></Badge>
      </Title>

      <P display="inline" padding={10}>
        <StarIcon paddingRight={1.5} />
        The fund will be used stritcly for the benefit of the club and its members.
        We plan to purchase and diversify our holdings with other crypto assets and stable coins.
      </P>
    </Container>
  </Layout>
)

export default Roadmap
