import { Container, Badge } from '@chakra-ui/react'
import { Title } from '../../components/roadmap'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { StarIcon } from '@chakra-ui/icons'

const Roadmap = () => (
  <Layout title="Phase7">
    <Container>
      <Title>
        Phase Seven <Badge></Badge>
      </Title>

      <P display="inline" padding={10}>
        <StarIcon paddingRight={1.5} />
        Using a percentage of primary sales, we will purchase land within
        decentraland where our headquarters will be located.
      </P>
    </Container>
  </Layout>
)

export default Roadmap
