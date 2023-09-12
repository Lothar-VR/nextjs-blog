import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '@/components/Layout'
import utilstyles from '../styles/utils.module.css';
import { getPostData } from '@/lib/post'
import BlogArticle from '@/components/BlogArticle'
import BlogHeader from '@/components/BlogHeader'
import { type } from 'os'

type AllPostData ={
  id:string,
  title: string,
  date: string,
  thumbnail: string,
}

export async function getStaticProps(){
  const allPostData = getPostData() ;
  console.log(allPostData);

  return{
    props:{
      allPostData,
    }
  }
}

//home画面
function Home({allPostData}: {allPostData: AllPostData[]}) {

  
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <BlogHeader />
      <Layout home>
        <section className={utilstyles.headingMd} >
          <p>Udemyで勉強してNext.js を用いたブログサイトの作成中です</p>
        </section>

        <section >
          <h2 className={utilstyles.headingMd}>私のblog</h2>
        <div className={styles.grid} >
            {allPostData.map(({id, title, date, thumbnail}) => (
              <BlogArticle key={id} id={id} title={title} date={date} thumbnail={thumbnail} />
            ))}

          </div>  
        </section>
        <h1><Link href="/posts/firstpost">blog</Link></h1>
      </Layout>
  
    </>
  )
}

export default Home