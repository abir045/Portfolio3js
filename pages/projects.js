import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import crypto from '../public/images/content/crypto.png'
import pearson from '../public/images/content/pearson.jpg'
import outlaws from '../public/images/content/outlaws.png'
import covid19 from '../public/images/content/covid-19.jpg'
import Layout from '../components/layouts/article'
import { Parallax } from 'react-scroll-parallax'

const Projects = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>
                {/* simple grid is a div with  display:grid */}
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.1}>
                        <ProjectGridItem
                            id="crypto"
                            title="Crypto App"
                            thumbnail={crypto}
                        >
                            A Crypto Currency info App
                        </ProjectGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <ProjectGridItem
                            id="pearson"
                            title="Pearson Airport Limousine"
                            thumbnail={pearson}
                        >
                            A Limousine booking web site based on Toronto,
                            Canada
                        </ProjectGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <ProjectGridItem
                            id="outlaws"
                            title="Outlaws"
                            thumbnail={outlaws}
                        >
                            An E-Commerce Store
                        </ProjectGridItem>
                    </Section>
                    <Section delay={0.4}>
                        <ProjectGridItem
                            id="covid-19"
                            title="covid-19 Dashboard"
                            thumbnail={covid19}
                        >
                            A web app showing covid-19 statistics through an API
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Projects
