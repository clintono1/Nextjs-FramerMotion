import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { StarIcon } from '@chakra-ui/icons'
import { Meta } from '../components/roadmap'

const Roadmaps = () => (
  <Layout title="Roadmaps">
    <Container maxW="container.lg">
      <Heading as="h3" fontSize={30} mb={4}>
        The Soxial Games
      </Heading>
      <Heading as="h4" fontSize={14} mb={1} paddingBottom={4}>
        Even if you lose you can still win.
      </Heading>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          <StarIcon paddingRight={1.5} paddingTop={1} />
          Twitter Treasure Hunt
        </Heading>
        <Meta>Step 1</Meta>
        <Paragraph>
          Follow us on Twitter and then turn on your post notifications.
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Meta>Step 2</Meta>
        <Paragraph>
          Be on the lookout for any tweets we make with the hashtag
          #soxialgames.
        </Paragraph>
      </Section>
      <Section delay={0.4}>
        <Meta>Step 3</Meta>
        <Paragraph>
          Look over the gameboard. The map will be divided into grid like
          sections.
        </Paragraph>
      </Section>
      <Section delay={0.5}>
        <Meta>Step 4</Meta>
        <Paragraph>
          Choose a coordinate as an answer. There is buried treasure located
          somewhere here and there are multiple correct answers.
        </Paragraph>
      </Section>
      <Section delay={0.5}>
        <Meta>Step 5</Meta>
        <Paragraph>
          Like and retweet the post. Then comment with your
          wallet address (no ENS domains) and answer. APIs will only record responses up to an hour after each post. 
        </Paragraph>
      </Section>
      <Section delay={0.5}>
        <Meta>Step 6</Meta>
        <Paragraph>
          Check the leaderboards to see how you rank with other players. The
          game is scored as +1 for just participating and +2 for guessing
          correctly.
        </Paragraph>
      </Section>
      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          <StarIcon paddingRight={1.5} paddingTop={1} />
          Soxial Matching Game
        </Heading>
        <Meta>Step 1</Meta>
        <Paragraph>Follow us on Facebook or Instagram.</Paragraph>
      </Section>
      <Section delay={0.7}>
        <Meta>Step 2</Meta>
        <Paragraph>
          Search for our filter in the effect gallery titled &quot;Soxial
          Matching Game&quot;.
        </Paragraph>
      </Section>
      <Section delay={0.8}>
        <Meta>Step 3</Meta>
        <Paragraph>
          Record yourself solving the puzzle and tag us in the post.
          @Soxialsecurity is our handle.
        </Paragraph>
      </Section>
      <Section delay={0.9}>
        <Meta>Step 4</Meta>
        <Paragraph>
          If you are a discord member open a ticket to redeem your WL spot.
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Roadmaps
