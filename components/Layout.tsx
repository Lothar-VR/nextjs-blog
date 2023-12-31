import { NextPage } from 'next'
import  Head  from 'next/head'
import { ReactNode, useEffect } from 'react';
import  Styles from './Layout.module.css'; 
import utilstyles from '../styles/utils.module.css';
import Link from 'next/link';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';

interface Props {
    children: ReactNode;
    home: any,

}

export const siteTitle = "Lothar's Home"

const Layout: NextPage<Props> = (props) => {


    return (
        <Box className={Styles.container}>
            <header className= {Styles.header}>
                {props.home ? (
                    <>
                    <img 
                    src='\IMG_5740.JPG' 
                    className= {utilstyles.borderCircle}
                    width={200}
                    height={200} 
                    />
                    <h1 className={utilstyles.heading2Xl} >{siteTitle}</h1>
                    </>
                ):(
                    <>
                    <img 
                    src='\20230805223803.jpg' 
                    className= {`${utilstyles.borderCircle} ${Styles.headerHomeImage}`}
                    width={200}
                    height={200} 
                    />
                    <h1 className={utilstyles.heading2Xl} >{siteTitle}</h1>
                    </>

                )}

            </header>
            <main>{props.children}</main>
        </Box>
    )
}

export default Layout
