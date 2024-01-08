import { NextPage } from 'next'
import { siteTitle } from './Layout'
import utilstyles from '../styles/utils.module.css';
import { Box } from '@mui/material';
import Link from 'next/link';

const BlogHeader: NextPage = () => {
    return (
        <Box sx={{
            backgroundColor: 'deepskyblue',
            p: 2,
            position: 'fixed',
            width: '100%',
            zIndex:100,


        }}>
            <Box className="logo">
                <Link href="/" ><h1 className={utilstyles.heading2Xl} >{siteTitle}</h1></Link>
            </Box>
            <Link href="/person" className={utilstyles.icon}>
                <img src='\横顔アイコン.png' width={40} height={40}/>
            </Link>
            <Link href="/link" className={utilstyles.icon}>
                <img src='\link.png' width={40} height={40}/>
            </Link>
        </Box>
    )
}

export default BlogHeader
