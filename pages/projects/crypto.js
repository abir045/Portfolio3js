import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/projects'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Project = () => {
    return (
        <Layout id="crypto">
            <Container>
                <Title>
                    Crypto App <Badge>2022</Badge>
                </Title>
                <Paragraph>
                    A Cryto currency Info app, which shows detailed information,
                    exchange rates, latest news and price statistics etc.
                </Paragraph>
                <List>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://world-of-crypto.netlify.app/"
                            target="_blank"
                        >
                            https://world-of-crypto.netlify.app/
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React Js, Redux , chart JS and ant design </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link
                            href="https://github.com/abir045/cryptoApp"
                            target="_blank"
                        >
                            https://github.com/abir045/cryptoApp
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <ProjectImage src="/images/content/crypto.png" alt="crypto" />
                <ProjectImage
                    src="/images/content/crypto_01.png"
                    alt="crypto_01"
                />
            </Container>
        </Layout>
    )
}

export default Project
