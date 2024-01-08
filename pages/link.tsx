import BlogHeader from '@/components/BlogHeader'
import { NextPage } from 'next'
import Head from 'next/head'
import utilstyles from '../styles/utils.module.css';
import { Box, Link } from '@mui/material';
import  Styles from '@/components/Layout.module.css'; 

interface Props {

}

const link: NextPage<Props> = () => {
    return (
        <div>
            <Head>
                <title>Person</title>
            </Head>
            <BlogHeader />
            <Box className={Styles.container}>
                <h1>Links</h1>

                <Box className = "link" >
                    <div className={utilstyles.link}>
                        <Link href = "https://lothardiary.hateblo.jp/" className={utilstyles.linkIcon}>
                            <img src = "/hatena_icon.png" style={{ width: '100%', height: 'auto' }}/>
                            <b>はてなブログ</b>
                        </Link>
                        <Link href = "https://www.youtube.com/channel/UCfwwSQO4_ONXzO-vLO_P8dA" className={utilstyles.linkIcon}>
                            <img src = "/Youtube-Icon.png" style={{ width: '100%', height: 'auto' }}/>
                            <b>Youtube</b>
                        </Link>
                        <Link href = "https://twitter.com/lothar_vr" className={utilstyles.linkIcon}>
                            <img src = "/twitter_icon.png" style={{ width: '100%', height: 'auto' }}/>
                            <b>Twitter(X)</b>
                        </Link>
                    </div>
                </Box>
                <Box className = "link" >
                    <div className={utilstyles.link}>
                        <Link href = "" className={utilstyles.linkIcon}>
                            <img src = "" style={{ width: '100%', height: 'auto' }}/>
                            <b></b>
                        </Link>
                        <Link href = "" className={utilstyles.linkIcon}>
                            <img src = "" style={{ width: '100%', height: 'auto' }}/>
                            <b></b>
                        </Link>
                        <Link href = "" className={utilstyles.linkIcon}>
                            <img src = "" style={{ width: '100%', height: 'auto' }}/>
                            <b></b>
                        </Link>
                    </div>
                </Box>
                <Link href ="/">→ Return home</Link>
            </Box>    
        </div>
    )
}

export default link
