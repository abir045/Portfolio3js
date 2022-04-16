import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/projects'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Project = () => {
    return (
        <Layout title="Outlaws">
            <Container>
                <Title>
                    Outlaws <Badge>2021</Badge>
                </Title>
                <Paragraph>An E-Commerce Store</Paragraph>
                <List>
                    {/* <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://pearsonairportlimousines.com/"
                            target="_blank"
                        >
                            https://pearsonairportlimousines.com/
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem> */}
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            React Js,Express Js, MongoDB, Stripe, Redux, Styled
                            components etc.
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link
                            href="https://github.com/abir045/Outlaws-Ecommerce"
                            target="_blank"
                        >
                            https://github.com/abir045/Outlaws-Ecommerce
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <ProjectImage src="/images/content/outlaws.png" alt="outlaws" />
            </Container>
        </Layout>
    )
}

export default Project
