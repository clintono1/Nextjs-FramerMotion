import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item-nolink'
import pugbaseimage from '../public/images/pugwhitesuit.png'
import pugbaseimage2 from '../public/images/pughawaiishirt.png'
import pugbaseimage3 from '../public/images/cryptobaby.png'

const Team = () => {
  return (
    <Layout>
      <Container>
        <Heading paddingBottom={5}>Team</Heading>
        <SimpleGrid columns={[1, 1, 3]} gap={6}>
          <Section>
            <WorkGridItem
              id="kyoya"
              title="RoyalFlush"
              thumbnail={pugbaseimage}
            >
              Master Programmer. Lover of all things anime.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="chizo"
              title="CSMCHIZO"
              thumbnail={pugbaseimage2}
            >
              Artistic Extraordinaire. Life of the Party. 
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="kyoya"
              title="Cryptobaby"
              thumbnail={pugbaseimage3}
            >
              Public Relations. Super mixxy.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={25} mb={4}>
          Additional Credits
        </Heading>
      </Section> */}

      {/* <SimpleGrid columns={[1, 1, 3]} gap={6}>
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
          <WorkGridItem id="tba" thumbnail={pugbaseimage4} title="ShoBeatz">
            T 
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}

      </Container>
    </Layout>
  )
}

export default Team
