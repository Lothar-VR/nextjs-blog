import { NextPage } from 'next'
import { siteTitle } from './Layout'
import utilstyles from '../styles/utils.module.css';
import { Box } from '@mui/material';
import Link from 'next/link';
import styles from '@/styles/Home.module.css'

interface Props {

}

const BlogHeader: NextPage<Props> = () => {
    return (
        <Box sx={{
            backgroundColor: 'deepskyblue',
            p: 2,
            position: 'fixed',
            width: '100%',

        }}>
            <div id="logo">
                <Link href={"/"}><h1 className={utilstyles.heading2Xl} >{siteTitle}</h1></Link>
            </div>
        </Box>
    )
}

export default BlogHeader
