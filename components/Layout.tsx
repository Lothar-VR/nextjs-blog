import { NextPage } from 'next'
import  Head  from 'next/head'
import { ReactNode } from 'react';
import  Styles from './Layout.module.css'; 
import utilstyles from '../styles/utils.module.css';
import Link from 'next/link';

interface Props {
    children: ReactNode;
    home: any,

}

export const siteTitle = "Next.js blog"

const Layout: NextPage<Props> = (props) => {
    const name ="myblog"
    return (
        <div className={Styles.container}>
            <Head>
                <link rel= "icon" href= "/favicon.ico" />
            </Head>
            <header className= {Styles.header}>
                {props.home ? (
                    <>
                    <img 
                    src='\20230805223803.jpg' 
                    className= {utilstyles.borderCircle}
                    width={200}
                    height={200} 
                    />
                    <h1 className={utilstyles.heading2Xl} >{name}</h1>
                    </>
                ):(
                    <>
                    <img 
                    src='\20230805223803.jpg' 
                    className= {`${utilstyles.borderCircle} ${Styles.headerHomeImage}`}
                    width={200}
                    height={200} 
                    />
                    <h1 className={utilstyles.heading2Xl} >{name}</h1>
                    </>

                )}

            </header>
            <main>{props.children}</main>
            {!props.home && (
                <Link href ="/">→ Return home</Link>
            )}
        </div>
    )
}

export default Layout
