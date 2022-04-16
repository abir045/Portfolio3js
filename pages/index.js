import {
    Container,
    Box,
    Heading,
    Image,
    Link,
    SimpleGrid,
    useColorModeValue,
    List,
    ListItem,
    Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import Resume from '../public/images/content/resume.png'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin
} from 'react-icons/io5'

import { Parallax } from 'react-scroll-parallax'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAplpha.200')}
                    p={3}
                    mb={6}
                    align="center"
                >
                    Hi, I&apos;m a Web developer based in Bangladesh
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Salekin Imran
                        </Heading>
                        <p>Web Developer | React JS</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxW="100px"
                            display="inline-block"
                            borderRadius="50%"
                            src="/images/profile.jpg"
                            alt="portfolio image"
                        />
                    </Box>
                </Box>
                {/* intro section */}
                <Parallax speed={-5}>
                    <Section delay={0.1}>
                        <Heading as="h3" variant="section-title">
                            Intro
                        </Heading>
                        <Paragraph>
                            Hi, I am a web developer with a passion to build
                            dynamic products with the most updated technologies.
                            Currently I am working as a freelance Developer.
                            Currently developing apps on React, Redux, Node Js,
                            and contributing to open source in my free time. New
                            to Next.js, Tailwind css.
                        </Paragraph>
                    </Section>
                </Parallax>
                {/* details bio section */}
                <Parallax speed={5}>
                    <Section delay={0.2}>
                        <Heading as="h3" variant="section-title">
                            Bio
                        </Heading>
                        <BioSection>
                            <BioYear>1989</BioYear>
                            Born in Dhaka, Bangladesh
                        </BioSection>

                        <BioSection>
                            <BioYear>2016</BioYear>
                            Completed M.Sc in Information and Communication
                            Technology from the University of Agder, Norway
                        </BioSection>
                        <BioSection>
                            <BioYear>2021 to present</BioYear>
                            Works as a freelance
                        </BioSection>
                    </Section>
                </Parallax>
                <Parallax speed={5}>
                    <Section delay={0.3}>
                        <Heading as="h3" variant="section-title">
                            On the web
                        </Heading>
                        <List>
                            <ListItem>
                                <Link
                                    href="https://github.com/abir045"
                                    target="_blank"
                                >
                                    <Button
                                        variant="ghost"
                                        colorScheme="teal"
                                        leftIcon={<IoLogoGithub />}
                                    >
                                        @abir045
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    href="https://www.linkedin.com/in/salekinimran/"
                                    target="_blank"
                                >
                                    <Button
                                        variant="ghost"
                                        colorScheme="teal"
                                        leftIcon={<IoLogoLinkedin />}
                                    >
                                        @LinkedIn
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    href="https://twitter.com/SalekinI"
                                    target="_blank"
                                >
                                    <Button
                                        variant="ghost"
                                        colorScheme="teal"
                                        leftIcon={<IoLogoTwitter />}
                                    >
                                        @Twitter
                                    </Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link
                                    href="https://www.instagram.com/abir_salekin/"
                                    target="_blank"
                                >
                                    <Button
                                        variant="ghost"
                                        colorScheme="teal"
                                        leftIcon={<IoLogoInstagram />}
                                    >
                                        @Instagram
                                    </Button>
                                </Link>
                            </ListItem>
                        </List>
                        <SimpleGrid columns={[1, 2, 2]} gap={6}>
                            <GridItem
                                href="https://drive.google.com/file/d/1XOn0_cPpp5oUp4XVjhZtbmO4pck46Vhe/view?usp=sharing"
                                title="My Resume"
                                thumbnail={Resume}
                            ></GridItem>
                        </SimpleGrid>
                    </Section>
                </Parallax>
            </Container>
        </Layout>
    )
}

export default Page
