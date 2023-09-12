import BlogHeader from '@/components/BlogHeader';
import Layout from '@/components/Layout'
import { getAllPostIds, getPostDataId } from '@/lib/post'
import matter from 'gray-matter';
import { GetStaticPropsContext, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import path from 'path';
import { useEffect, useState } from 'react';
import { remark } from 'remark';
import utilstyles from 'styles/utils.module.css'
import  html  from "remark-html";
import Link from 'next/link';
import  Styles from 'components/Layout.module.css'; 


//postDataを受け取るための型
type PostDataId = {
    id: string;
    blogContentsHTML: string;
    title: string;
    date: string;
    thumbnail: string;
};


function Post() {
    //CSRの記法
    const router = useRouter();
    const { id, fromHome ='false' } = router.query; 

    const [postData, setPostData] = useState<PostDataId>();

    useEffect(() => {

        //async await がないと非同期処理なので何も表示されなくなる。
        const fetchPostData = async () => {
            if (typeof id === 'string') {
                const mdPath = `/posts/${id}.md`;

                //fetchする時に「public」フォルダ内にあるものにしかアクセスできない。「src」フォルダの場合fetchなしでアクセス可能
                const response = await fetch(mdPath);
                const text = await response.text();
                const matterResult = matter(text);
                const blogContentsHTML = await remark().use(html).process(matterResult.content);
                const postDataId: PostDataId = {
                    id: id,
                    blogContentsHTML: blogContentsHTML.toString(),
                    title: matterResult.data.title,
                    date: matterResult.data.date,
                    thumbnail: matterResult.data.thumbnail,
                };
                setPostData(postDataId);
            }
          };
      
          fetchPostData();
    }, [id])



    return (
        <>
            <Head>
                <title>{postData?.title}</title>
            </Head>
            <BlogHeader />
            <Layout home={undefined}>
                <article>
                    <h1 className={utilstyles.headingX1} >{postData?.title}</h1>
                    <div className={utilstyles.lightText} >{postData?.date}</div>
                    {typeof postData?.blogContentsHTML === 'string' ? (
                        <div dangerouslySetInnerHTML={{ __html: postData.blogContentsHTML }} />
                    ) : (
                        <p>データが取得できていません</p>
                    )}
                </article>
                {fromHome ==='true' ? (
                    <Link href ="/" onClick={() => router.back()} >→ Return home</Link>
                ):(
                    <Link href ="/" >→ Return home</Link>
                )}
                
            </Layout>
            
        </>
    );
}

export default Post