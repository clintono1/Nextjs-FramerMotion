import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import redpug from '../public/images/pug-red.png'
import greenpug from '../public/images/pug-green.png'

const Roadmaps = () => (
  <Layout title="Roadmaps">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Roadmap Activations
      </Heading>
      <Heading as="h4" fontSize={14} mb={1}>
        Click each level for more information.
      </Heading>

      <SimpleGrid columns={[1, 1, 3]} gap={3}>
        <Section>
          <WorkGridItem id="phase1" title="0%" thumbnail={greenpug}>
            Community Building. On Discord, Social Media and the nft space.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="phase2" title="10%" thumbnail={redpug}>
            Double Down. More PUG promotion and charity donations initiated. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="phase3" title="20%" thumbnail={redpug}>
            Early Bird Special. Early adopters and community member giveaways initiated.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="phase4" title="40%" thumbnail={redpug}>
            Scholarship Program.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="phase5" title="50%" thumbnail={redpug}>
            Community Fund. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="phase6" title="75%" thumbnail={redpug}>
            $BONES! Utility, Utility, Utility! 
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem id="phase7" title="90%" thumbnail={redpug}>
            SOXIAL PUG HQ. PUGs infiltrating the metaverse.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="phase8" title="100%" thumbnail={redpug}>
            The Soxial Security Club App. Walk To Earn
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="phase9" title="Burning Functions" thumbnail={redpug}>
            Burn baby burn.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Roadmaps
