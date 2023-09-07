import { NextPage } from 'next'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '@/components/Layout'
import BlogHeader from '@/components/BlogHeader'


interface Props {

}

const firstpost: NextPage<Props> = () => {
    return (
        <div>
            <Head>
                <title>最初の投稿</title>
            </Head>
            <BlogHeader />
            <Layout home={undefined}>
            <h1>first post</h1>
            <Link href={'/'}>HOME</Link>
            <Image
                src="/vercel.svg"
                alt={'ramen'}
                width={100}
                height={24} />
            </Layout>
        </div>
    )
}

export default firstpost
