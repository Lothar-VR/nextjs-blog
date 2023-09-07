import BlogHeader from '@/components/BlogHeader';
import Layout from '@/components/Layout'
import { getAllPostIds, getPostDataId } from '@/lib/post'
import { GetStaticPropsContext, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import utilstyles from 'styles/utils.module.css'



//全ての記事のIDを取得
export function getStaticPaths() {
    const paths = getAllPostIds();
    console.log(paths);

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async(
    context: GetStaticPropsContext<{id: string}>
) =>{
    
    const postData = await getPostDataId(context.params?.id);
    console.log(postData);
    return{
        props:{
            postData,
        }
    }

}





function Post({ postData }) {
    const router = useRouter();
    const { id } = router.query; // 'id' はファイル名に合わせて変更可能
    
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <BlogHeader />
            <Layout home={undefined}>
                <article>
                    <h1 className={utilstyles.headingX1} >{postData.title}</h1>
                    <div className={utilstyles.lightText} >{postData.date}</div>
                    <div dangerouslySetInnerHTML={{__html: postData.blogContentsHTML}} />
                </article>
            </Layout>
        </>
    );
}

export default Post