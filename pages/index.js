import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import HeroPost from '../components/hero-post';
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {

  return (
    <>
      <Layout>
        <Head>
          <title>Hattrick Argentina</title>
        </Head>
        <Container>
          <HeroPost />
        </Container>
        <Container>
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
