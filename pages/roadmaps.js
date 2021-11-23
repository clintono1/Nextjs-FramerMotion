import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
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

      <SimpleGrid columns={[1, 1, 3]} gap={3}>
        <Section>
          <WorkGridItem id="phase1" title="0%" thumbnail={greenpug}>
            Community Building, Growing our soxial presence so future PUG holders
            can gain the most value.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="phase2" title="10%" thumbnail={redpug}>
            Double Down, primary and secondary sales to be reinvested into the marketing budget. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="phase3" title="20%" thumbnail={redpug}>
            Giveaways, Early PUG adopters and community members gain access to massive giveaways.
            We will also launch a scholarship program. Cannot afford a PUG? Make your case to the community
            get enough support and we will send you one free of charge.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="phase4" title="30%" thumbnail={redpug}>
            Merch, gear for PUG holders and community members. You can always wear your PUG how you see fit.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="phase5" title="40%" thumbnail={redpug}>
            PUGHQ, We will purchase land on decentraland to build our HQ. Owning a pug 
            is the same as owning a piece of that digital real estate! 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="phase6" title="50%" thumbnail={redpug}>
            Voting Rights, Every pug is created different but treated equally. Members will 
            have a say in the future of the club. 
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem id="phase7" title="70%" thumbnail={redpug}>
            PUG BUCKS!, Your pugs work hard! Day in and night out. You will be elgible to 
            claim 25 PUGBUCKS a day for 7 years.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="phase8" title="85%" thumbnail={redpug}>
            Community Fund, We want to be your retirement plan. We will be purchasing bitcoin
            and other cryto assets with primary and secondary sales to back the underlining value of your PUGBUCKS. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="phase9" title="100%" thumbnail={redpug}>
            Soxial Security Club DAPP development initiated.
            We plan to create an app to serve as your easy to use personal crypto wallet.
            To hold your PUGS and other NFTs. With basic wallet features and more, like paying 
            for coffee with PUGBUCKS.
          </WorkGridItem>
        </Section>


      </SimpleGrid>
    </Container>
  </Layout>
)

export default Roadmaps
