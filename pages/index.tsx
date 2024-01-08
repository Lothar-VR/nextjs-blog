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
import { useEffect, useRef, useState } from 'react'
import Modal from '@/components/Modal';
import HatenaArticleListController from '@/api/HatenaArticleList/HatenaArticleListController';

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

  // const { id } = router.query; 
  // console.log(id);
  // if (typeof id === 'string'){
  //   const element = document.getElementById(id);
  //   element?.scrollIntoView({block:"center"});
  // }  

  const articleRef = useRef<HTMLElement>();

  useEffect(() =>{
    if(articleRef.current !== undefined){
        articleRef.current.scrollIntoView({block:"center"});
      }
  }, [])


  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <BlogHeader />
      <Layout home>
        <section className={utilstyles.headingMd} >
          <p>Lotharのホームページ</p>
        </section>

        <section >
          <h2 className={utilstyles.headingMd}>Contents</h2>
        {/* <div className={styles.grid} >
            {allPostData.map(({id, title, date, thumbnail}) => (
              <Box key={id} ref={id === router.query.id ?articleRef: undefined }
              sx={{scrollMarginTop: '8rem'}}>
                <BlogArticle  id={id} title={title} date={date} thumbnail={thumbnail}/>
              </Box>
            ))}

          </div>   */}
        </section>
      </Layout>
  
    </>
  )
}

export default Home