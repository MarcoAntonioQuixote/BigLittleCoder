import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function LinkModal({open,setOpen}) {
    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box className='modal'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Hey you! Select the Big Little Coder you'll be taking this journey with!
                </Typography>
                <Button onClick={() => setOpen(false)} style={{marginTop: '20px'}} variant='contained'>Okay</Button>
            </Box>
        </Modal>
    )
}

export default LinkModal