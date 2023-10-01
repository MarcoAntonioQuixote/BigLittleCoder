import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

function MoreInfoModal({open,setOpen, modalFor}) {
    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box className='modal' id='infoModal'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <p>Awesome! I'm excited you're interested in our Big Little Coder Cohort! </p>
                    <br/>
                    <p>Cohorts meet 3x a week on M|W at 7 pm for 2.5 hours in Eastern and Pacific Time Zones. Additional mentor meetings are included in the price of the 24 week course:</p>
                    <br/>
                    <p>$3299</p> <br />

                    The next cohorts available are: <br/>

                    <p>November</p>
                    <p>January</p> <br />

                    Check out more information on the <Link to='/TechStack' style={{color: '#ff00aa'}}>Tech Stack</Link>!
                    
                </Typography>
                <br/>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>                    
                    <Link to='/contact'>
                        <Button onClick={() => setOpen(false)} style={{marginTop: '20px'}} variant='contained'>Def</Button>
                    </Link>
                    <Button onClick={() => setOpen(false)} style={{marginTop: '20px'}} color='error' variant='contained'>Nah</Button>
                </div>
            </Box>
        </Modal>
    )
}

export default MoreInfoModal