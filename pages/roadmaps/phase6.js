import { Container, Badge } from '@chakra-ui/react'
import { Title } from '../../components/roadmap'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { StarIcon } from '@chakra-ui/icons'

const Roadmap = () => (
  <Layout title="Phase6">
    <Container>
      <Title>
        Phase Six <Badge></Badge>
      </Title>

      <P display="inline" padding={10}>
        <StarIcon paddingRight={1.5} />
        Utility is our main focus with this project, We have a vision
        of SOXIAL PUGs to be digital assets for our owners. Our reward tokens will contribute to
        that goal. An ecosystem where PUG holders, consumers and merchants can benifit from one another.
      </P>
    </Container>
  </Layout>
)

export default Roadmap
