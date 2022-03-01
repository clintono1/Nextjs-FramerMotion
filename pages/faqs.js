import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { QuestionIcon } from '@chakra-ui/icons'
import { Meta } from '../components/roadmap'

const Faqs = () => (
  <Layout title="faqs">
    <Container maxW="container.lg">
      <Heading as="h3" fontSize={30} mb={4}>
        Frequently Asked Questions
      </Heading>
      <Heading as="h4" fontSize={14} mb={1} paddingBottom={4}>
        Feel free to message us on twitter or instagram if there are questions
        that have not been addressed.
      </Heading>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          <QuestionIcon paddingRight={1.5} paddingTop={1} />
          Why Us?
        </Heading>
        <Meta>We are for the people by the people.</Meta>
        <Paragraph>
          Our goals are a culmination of the members within our community. As it
          grows and evolves so does our vision. The core values we embody are
          creativity and learning. We are a project where people from many
          different walks of life are encouraged to contribute and teach one
          another. From trading, to coding, and artistry of all types we appreciate all
          crafts and understand that creativity is intelligence having fun.
          Another main goal of this project is to help marginalized communities
          obtain financial literacy and learn more about the cryptocurrency
          space. Paired with a low mint price we will provide tools and
          resources geared at teaching new comers to the space all the
          information they will need to be successful.
        </Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          <QuestionIcon paddingRight={1.5} paddingTop={1} />
          How do I get an invite to the discord?
        </Heading>
        <Meta>Engage With Us</Meta>
        <Paragraph>
          Follow us on soxial media, tag friends under our posts or share /
          retweet our content. It is an extra step but the less bots the better.
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" paddingTop={5}>
          <QuestionIcon paddingRight={1.5} paddingTop={1} />
          How can I get a Soxial PUG NFT?
        </Heading>
        <Meta>Minting, Giveaways and More</Meta>
        <Paragraph>
          The public sale date has not been announced yet, but active community
          members can win a free mint or whitelist just by participating in the
          discord, or engaging with us on soxial media.
        </Paragraph>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title" paddingTop={5}>
          <QuestionIcon paddingRight={1.5} paddingTop={1} />
          How many PUGs will be reserved?
        </Heading>
        <Meta>888 Soxial PUGs</Meta>
        <Paragraph>
          We will use these NFTs for marketing, to form partnerships, and
          perform giveaways.{' '}
        </Paragraph>
      </Section>
      <Section delay={0.5}>
        <Heading as="h3" variant="section-title" paddingTop={5}>
          <QuestionIcon paddingRight={1.5} paddingTop={1} />
          Why is your discord invite only?
        </Heading>
        <Meta>To promote organic growth</Meta>
        <Paragraph>
          We plan to eventually open the discord to the public. But we want to
          give community members who are geniunely interested in our project a
          chance to contribute and get whitelisted. Or earn free nfts for their
          valued contributions.
        </Paragraph>
      </Section>
      <Section delay={0.5}>
        <Heading as="h3" variant="section-title" paddingTop={5}>
          <QuestionIcon paddingRight={1.5} paddingTop={1} />
          Will holders get a say in the location of Soxial Security Club HQ in
          the metaverse?
        </Heading>
        <Meta>Yes</Meta>
        <Paragraph>
          Every PUG doubles as voting rights in the decisions we make as a
          community moving forward. Decisions such as the location of our
          headquarters in the metaverse.
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Faqs
