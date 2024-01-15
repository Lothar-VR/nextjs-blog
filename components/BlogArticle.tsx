import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import utilstyles from '../styles/utils.module.css';
import { NextPage } from 'next'
import { Box } from '@mui/material';
import { blogData } from '../hooks/HatenaArticleList/HatenaArticleListService';


interface Props {
    blogData: blogData,
    index: number,
}

const BlogArticle: NextPage<Props> = (props) => {
    console.log(`${props.blogData}`);
    return (
        <Box >
            <article>
                <Link href={props.blogData.href}  >
                    <p>{props.blogData.title}</p>
                </Link>
                <br/>
                <small className={utilstyles.lightText} >
                    {props.blogData.day}
                </small>
            </article>
        </Box>
    )
}

export default BlogArticle
