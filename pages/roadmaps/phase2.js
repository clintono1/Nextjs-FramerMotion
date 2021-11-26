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
        Pugs are fun, but they&apos;re also an investment. So we will put initial and secondary
        sales towards brand recognition and increase the marketing budget. But
        don&apos;t forget our most important influencers are Pug owners. Good owners
        brag to thier friends about thier dogs. We plan to donate 10% of sales to animale shelters and rescues.
      </P>
    </Container>
  </Layout>
)

export default Roadmap
