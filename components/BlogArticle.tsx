import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import utilstyles from '../styles/utils.module.css';

import { NextPage } from 'next'

interface Props {
    key, 
    title, 
    date, 
    thumbnail

}

const BlogArticle: NextPage<Props> = (Props) => {
    return (
        <div>
            <article>
                <Link href={`/posts/${Props.key}`} >
                    <img src= {`${Props.thumbnail}`} className={styles.thumbnailImage} />
                </Link>
                <Link href={`/posts/${Props.key}`} className={utilstyles.boldText} >
                    {Props.title}
                </Link>
                <br/>
                <small className={utilstyles.lightText} >
                    {Props.date}
                </small>
            </article>
        </div>
    )
}

export default BlogArticle
