import { Container, Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { LockIcon } from '@chakra-ui/icons'
import { Meta } from '../components/roadmap'

const Roadmaps = () => (
  
<Layout title="Roadmaps">
<Container maxW = "container.lg">
  <Heading as="h3" fontSize={30} mb={4} >
    Roadmap Activations
  </Heading>
  <Heading as="h4" fontSize={14} mb={1} paddingBottom={4}>
    We are here for a good time and a long time. 
  </Heading>
  <Section delay={0.2} > 
          <Heading as="h3" variant="section-title">
          <LockIcon paddingRight={1.5} paddingTop={1} />
          0%
          </Heading>
          <Meta>Startup</Meta>
          <Paragraph >
            Initial pre-sale for whitelisted members, then public mint initiated. 
          </Paragraph>
          </Section>      
          <Section delay={0.3} > 
          <Heading as="h3" variant="section-title" paddingTop={5}>
          <LockIcon paddingRight={1.5} paddingTop={1}/>
          25%
          </Heading>
          <Meta>Giveaways</Meta>
          <Paragraph>
            Holder prize giveaways and contests initiated. 
          </Paragraph>
          </Section>   
          <Section delay={0.4} > 
          <Heading as="h3" variant="section-title" paddingTop={5}>
          <LockIcon paddingRight={1.5} paddingTop={1}/>
          50%
          </Heading>
          <Meta>Community Fund</Meta>
          <Paragraph>
          100 ETH as well as 10% of secondary market sale royalites will be dedicated to the fund.
           </Paragraph>
        </Section>
        <Section delay={0.5} > 
          <Heading as="h3" variant="section-title" paddingTop={5}>
          <LockIcon paddingRight={1.5} paddingTop={1}/>
          75%
          </Heading>
          <Meta>Charity donation</Meta>
          <Paragraph>
         Special donation to the American Society for the Prevention of Cruelty to Animals. 
         </Paragraph>
        </Section>
        <Section delay={0.5} > 
          <Heading as="h3" variant="section-title" paddingTop={5}>
          <LockIcon paddingRight={1.5} paddingTop={1}/>
          The Soxialverse
          </Heading>
          <Meta>100%</Meta>
          <Paragraph>
         Continued growth and expansion of the soxial network within the metaverse. Members will have access to upcoming soxial projects and apps in development. 
         </Paragraph>
        </Section>
</Container>
</Layout>

)

export default Roadmaps
