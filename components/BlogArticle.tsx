
import Link from 'next/link'
import utilstyles from '../styles/utils.module.css';
import { NextPage } from 'next'
import { Box } from '@mui/material';
import { blogData } from '@/hooks/HatenaArticleList/useHatenaArticleList';



interface Props {
    blogData: blogData,
    index: number,
}

const BlogArticle: NextPage<Props> = (props) => {
    console.log(`${props.blogData}`);
    return (
        <Box border={5} sx ={{borderColor: 'cyan', borderRadius: '10px', margin: 3, paddingLeft: 5, bgcolor: 'aliceblue'}}>
            <article>
                <Link href={props.blogData.href}  >
                    <h3>{props.blogData.title}</h3>
                    <small className={utilstyles.lightText} >
                        {props.blogData.day}
                    </small>
                </Link>
            </article>
        </Box>
    )
}

export default BlogArticle
