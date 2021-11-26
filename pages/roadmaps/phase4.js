import { Container, Badge} from '@chakra-ui/react'
import { Title} from '../../components/roadmap'
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
        Cannot afford a PUG? Make your case to the community get enough support and we will send you one free of
        charge. Join the discord for more information on how to apply.
      </P>
    </Container>
  </Layout>
)

export default Roadmap
