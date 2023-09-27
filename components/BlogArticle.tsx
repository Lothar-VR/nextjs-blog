import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import utilstyles from '../styles/utils.module.css';

import { NextPage } from 'next'
import { Box } from '@mui/material';
import { useRef } from 'react';

interface Props {
    id: string, 
    title: string, 
    date: string, 
    thumbnail: string,

}

const BlogArticle: NextPage<Props> = (props) => {
    return (
        <Box >
            <article id={props.id}>
                <Link href={`/posts/${props.id}`}  >
                    <img src= {`${props.thumbnail}`} className={styles.thumbnailImage} />
                </Link>
                <Link href={`/posts/${props.id}`} className={utilstyles.boldText}  >
                    {props.title}
                </Link>
                <br/>
                <small className={utilstyles.lightText} >
                    {props.date}
                </small>
            </article>
        </Box>
    )
}

export default BlogArticle
