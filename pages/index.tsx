import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '@/components/Layout'
import utilstyles from '../styles/utils.module.css';
import { getPostData } from '@/lib/post'
import BlogHeader from '@/components/BlogHeader'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import BlogArticle from '@/components/BlogArticle';
import { blogData } from '@/hooks/HatenaArticleList/HatenaArticleListService';
import { useHatenaArticleList } from '@/hooks/HatenaArticleList/useHatenaArticleList';


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

  // はてなブログから記事取得のためのHooks
  const [hatenagetArticle, setHatenagetArticle] = useState<blogData[]>([]);
  const hatenaArticleList = useHatenaArticleList();
  

  
  const articleRef = useRef<HTMLElement>();

  useEffect(() => {
    
    if(hatenaArticleList.data !== undefined){
      setHatenagetArticle(hatenaArticleList.data);
    }
    if(articleRef.current !== undefined){
      articleRef.current.scrollIntoView({block:"center"});
    }
  }, [hatenaArticleList.data]);

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
        <div>
            {hatenagetArticle.map((blogData, index) => (
              <Box key={index}>
                <BlogArticle blogData={blogData} index={index}/>
              </Box>
            ))}
          </div>  
        </section>
      </Layout>
  
    </>
  )
}

export default Home