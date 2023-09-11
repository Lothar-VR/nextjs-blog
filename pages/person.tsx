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
                <img src='\job_programmer.png' 
                    className= {utilstyles.borderCircle}
                    width={200}
                    height={200} 
                />
                <h2 className={utilstyles.heading2Xl}>name</h2>
                <p className={utilstyles.headingMd} >explanation</p>

                <Link href ="/">→ Return home</Link>
            </Box>    
        </div>
    )
}

export default person
