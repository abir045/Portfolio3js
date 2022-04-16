import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/projects'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Project = () => {
    return (
        <Layout title="covid-19">
            <Container>
                <Title>
                    Covid-19 Dashboard <Badge>2020</Badge>
                </Title>
                <Paragraph>
                    A web app showing covid-10 statistics through an API
                </Paragraph>
                <List>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://abir045.github.io/covid19/"
                            target="_blank"
                        >
                            https://abir045.github.io/covid19/
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Jquery, Bootstrap , coronavirus-monitor API</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link
                            href="https://github.com/abir045/covid19"
                            target="_blank"
                        >
                            https://github.com/abir045/covid19
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <ProjectImage
                    src="/images/content/covid19_01.png"
                    alt="crypto"
                />
                <ProjectImage
                    src="/images/content/covid19_02.png"
                    alt="crypto_01"
                />
            </Container>
        </Layout>
    )
}

export default Project
