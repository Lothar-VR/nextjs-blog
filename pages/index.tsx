import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '@/components/Layout'
import utilstyles from '../styles/utils.module.css';
import { getPostData } from '@/lib/post'
import BlogArticle from '@/components/BlogArticle'
import BlogHeader from '@/components/BlogHeader'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import Modal from '@/components/Modal';

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
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const { id } = router.query; 
  if (typeof id === 'string'){
    const element = document.getElementById(id);
    element?.scrollIntoView({block:"center"});
  }  


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
          <h2 className={utilstyles.headingMd}>私のblog </h2>
        <div className={styles.grid} >
            {allPostData.map(({id, title, date, thumbnail}) => (
              <BlogArticle key={id} id={id} title={title} date={date} thumbnail={thumbnail} />
            ))}

          </div>  
        </section>

        {/* //モーダル表示ボタン */}
        <Box >
          <Button onClick={handleOpen} className={utilstyles.headingMd}>
            Open Modal
          </Button>
          <Modal handleClose={handleClose} open={open} />
        </Box>
        <h1><Link href="/posts/firstpost">blog</Link></h1>
      </Layout>
  
    </>
  )
}

export default Home