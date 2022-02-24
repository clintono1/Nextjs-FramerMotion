import { Container, Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { Meta } from '../components/roadmap'

const Roadmaps = () => (
  
<Layout title="Roadmaps">
<Container maxW = "container.lg">
  <Heading as="h3" fontSize={30} mb={4} >
    The Soxial Games
  </Heading>
  <Heading as="h4" fontSize={14} mb={1} paddingBottom={4}>
    Even if you lose you can still win.  
  </Heading>
  <Section delay={0.2} > 
          <Meta>Step 1</Meta>
          <Paragraph >
            Follow us on Twitter and then turn on your post notifications. 
          </Paragraph>
          </Section>      
          <Section delay={0.3} > 
          <Meta>Step 2</Meta>
          <Paragraph>
            Be on the lookout for any tweets we make with the hashtag #soxialgames.
          </Paragraph>
          </Section>   
          <Section delay={0.4} >
          <Meta>Step 3</Meta>
          <Paragraph>
          Look over the gameboard. The map will be divided into grid like sections.  
           </Paragraph>
        </Section>
        <Section delay={0.5} > 
          <Meta>Step 4</Meta>
          <Paragraph>
         Choose a coordinate as an answer. There is buried treasure located somewhere here and there are multiple correct answers.
          </Paragraph>
        </Section>
        <Section delay={0.5} > 
          <Meta>Step 5</Meta>
          <Paragraph>
         Like and retweet the post. Then comment under the post with your wallet address and answer. 
          </Paragraph>
        </Section>
        <Section delay={0.5} > 
          <Meta>Step 6</Meta>
          <Paragraph>
          Check the leaderboards to see how you rank with other players. The game is scored as +1 for just participating and +2 for guessing correctly.
        </Paragraph>
        </Section>
</Container>
</Layout>

)

export default Roadmaps
