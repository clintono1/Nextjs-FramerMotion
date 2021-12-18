import { Container, Badge} from '@chakra-ui/react'
import { Title } from '../../components/roadmap'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { StarIcon } from '@chakra-ui/icons'

const Roadmap = () => (
  <Layout title="Phase2">
    <Container>
      <Title>
        Phase Two <Badge></Badge>
      </Title>

      <P display="inline" padding={10}>
        <StarIcon paddingRight={1.5} />
        Pugs are fun, but they also work hard. We will put a percentage of our initial sale profits and secondary
        sale royalties towards brand recognition and increase the marketing budget.
        We also plan to donate 10% of sales to animale shelters and rescues.
      </P>
    </Container>
  </Layout>
)

export default Roadmap
