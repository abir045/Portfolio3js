import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/projects'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Project = () => {
    return (
        <Layout title="Pearson Airport Limousine">
            <Container>
                <Title>
                    Pearson Airport Limousine <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    A Limousine rental web site based on Toronto, Ontario,
                    Canada.
                </Paragraph>
                <List>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://pearsonairportlimousines.com/"
                            target="_blank"
                        >
                            https://pearsonairportlimousines.com/
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Node Js, Express Js, Send Grid API, BootStrap,
                            Google Maps API etc.
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link
                            href="https://github.com/abir045/LomousineTours"
                            target="_blank"
                        >
                            https://github.com/abir045/LomousineTours
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <ProjectImage src="/images/content/pearson.jpg" alt="pearson" />
                <ProjectImage
                    src="/images/content/pearson_01.png"
                    alt="pearson"
                />
            </Container>
        </Layout>
    )
}

export default Project
