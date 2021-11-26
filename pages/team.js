import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item-nolink'
import pugbaseimage from '../public/images/pugwhitesuit.png'
import pugbaseimage2 from '../public/images/pughawaiishirt.png'
import pugbaseimage3 from '../public/images/cryptobaby.png'
import pugbaseimage4 from '../public/images/9868.png'
import pugbaseimage5 from '../public/images/9893.png'

const Team = () => {
  return (
    <Layout>
      <Container>
        <Heading paddingBottom={5}>Team</Heading>
        <SimpleGrid columns={[1, 1, 3]} gap={6}>
          <Section>
            <WorkGridItem
              id="kyoya"
              title="Kyouma Hououin"
              thumbnail={pugbaseimage}
            >
              Master programmer. Lover of all things anime.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="chizo"
              title="CSMCHIZO"
              thumbnail={pugbaseimage2}
            >
              Artistic Extroadinair. Life Of the Party. 
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="kyoya"
              title="Cryptobaby"
              thumbnail={pugbaseimage3}
            >
              Public Relations. Super Mixxy
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={25} mb={4}>
          Additional Credits
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 3]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="tba"
            thumbnail={pugbaseimage5}
            title="Hashlips"
          >
            Production method inspiration
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="tba" thumbnail={pugbaseimage4} title="craftzdog">
            Website inspiration
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      </Container>
    </Layout>
  )
}

export default Team
