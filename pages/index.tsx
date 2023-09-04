import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '@/components/Layout'
import utilstyles from '../styles/utils.module.css';
import { getPostData } from '@/lib/post'

export async function getStaticProps(){
  const allPostData = getPostData();
  console.log(allPostData);

  return{
    props:{
      allPostData,
    }
  }
}


export default function Home({allPostData}) {
  return (
    <>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilstyles.headingMd} >
        <p>Udemyで勉強してNext.js を用いたブログサイトの作成中です</p>
      </section>

      <section >
        <h2 className={utilstyles.headingMd}>私のblog</h2>
        <div className={styles.grid} >
          {allPostData.map(({id, title, date, thumbnail}) => (
            <article key={id}>
              <Link href={`/posts/${id}`} >
                <img src= {`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`} className={utilstyles.boldText} >
                {title}
              </Link>
              <br/>
              <small className={utilstyles.lightText} >
                {date}
              </small>
            </article>
          ))}

        </div>
      </section>
      <h1><Link href={"/posts/firstpost"}>blog</Link></h1>
    </Layout>
 
    </>
  )
}
