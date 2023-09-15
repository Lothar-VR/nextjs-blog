import { Box, Button, Modal, Typography } from '@mui/material'
import utilstyles from '../styles/utils.module.css';
import { NextPage } from 'next'
import { ReactNode } from 'react';

interface Props {
    handleClose: () => void;
    open:boolean;

}

const BlogModal: NextPage<Props> = (props:Props) => {
    if(!props.open) return null;
    return (
            <Modal 
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            className={utilstyles.container}
            // query で modal が opened の時にモーダルを開く
            open={props.open}
            onClose={props.handleClose}
            >
                <Box sx={{
                    background: 'white',
                    width: '300px',
                    height: '200px',
                    padding: '1em',
                    borderRadius: '15px',
                }} >
                    <Button 
                        onClick={props.handleClose} 
                        className={utilstyles.headingMd}
                        sx={{float:"right"}}
                    >
                        ×
                    </Button>
                    <Typography >
                    Modal was opened!
                    </Typography>
                    
                </Box>
            </Modal>
    )
}

export default BlogModal
