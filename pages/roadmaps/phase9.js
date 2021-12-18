import { Container, Badge } from '@chakra-ui/react'
import { Title } from '../../components/roadmap'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { StarIcon } from '@chakra-ui/icons'

const Roadmap = () => (
  <Layout title="Phase9">
    <Container>
      <Title>
        Phase Nine <Badge></Badge>
      </Title>

      <P display="inline" padding={10}>
        <StarIcon paddingRight={1.5} />
        PUG holders are guaranteed the ability to claim 7 PUGBUCKS for up to 7
        years, which will have a finite supply. Once our PUG burning function is
        implemented, PUGs can retire early and claim 1/5th of their benefits.
      </P>
    </Container>
  </Layout>
)

export default Roadmap
