import BlogHeader from '@/components/BlogHeader'
import { NextPage } from 'next'
import Head from 'next/head'
import utilstyles from '../styles/utils.module.css';
import { Box, Link } from '@mui/material';
import  Styles from '@/components/Layout.module.css'; 

interface Props {

}

const person: NextPage<Props> = () => {
    return (
        <div>
            <Head>
                <title>Person</title>
            </Head>
            <BlogHeader />
            <Box className={Styles.container}>
                <img src='\IMG_5740.JPG' 
                    className= {utilstyles.borderCircle}
                    width={200}
                    height={200} 
                />
                <h2 className={utilstyles.heading2Xl}>Lothar</h2>
                <Box className={utilstyles.IntroduceTypography}  sx={{marginTop:'3rem'}}>
                <p>福岡出身、東京在住SE</p>
                <p>週に一度はラーメンを食べ、VRChatで可愛いアバターになっている</p>
                <p>はてなブログにて雑記ブログを毎日更新中</p>
                </Box>
                

                <Link href ="/">→ Return home</Link>
            </Box>    
        </div>
    )
}

export default person
