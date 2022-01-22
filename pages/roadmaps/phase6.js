import { Container, Badge } from '@chakra-ui/react'
import { Title } from '../../components/roadmap'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { StarIcon } from '@chakra-ui/icons'

const Roadmap = () => (
  <Layout title="Phase6" >
    <Container>
      <Title>
        Phase Six <Badge></Badge>
      </Title>

      <P display="inline" padding={10} >
        <StarIcon paddingRight={1.5} />
        Utility is our main focus with this project. We have a vision
        for SOXIAL PUGs to be digital assets for our owners. Along with merchandise only holders can obtain, holders will be able to stake thier NFTs to our clothing store. 
        Our proffessional designers will use your PUG to make the clothes we sell and the owner will make a profit everytime someone buys it.
         </P>
    </Container>
  </Layout>
)

export default Roadmap
