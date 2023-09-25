import React, { useState, useEffect, useContext } from 'react';
import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Input, inputClasses } from '@mui/base/Input';
import Checkbox from '@mui/material/Checkbox';

import { styled } from '@mui/system';
import clsx from 'clsx';
import { Button, TextareaAutosize } from '@mui/material';
import useEmail from '../hooks/useEmail';
import { AppContext } from '../storeManagement/AppContext';

export default function ContactForm() {

    const {app} = useContext(AppContext);

    const [data,setData] = useState({});

    const handleChange = (e, checked, name) => {
        let prop = e.target.name;
        let isCheckbox = e.target.type === 'checkbox';
        let value = isCheckbox ? e.target.checked : e.target.value;
        setData(prev => ({...prev, [prop]: value}));
    }

    const handleSubmit = () => {
        let errors = [];
        
        const namePattern = /^[a-zA-Z-.\s]{2,25}$/;
        if (!namePattern.test(data.name)) {
            errors.push('name');
        }
        
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(data.email) || (data.email && data.email.length > 35)) {
            errors.push('email');
        }
        
        if (!data.message || data.message.length < 15) {
            errors.push('message');
        }
        
        const phonePattern = /^(\+\d{1,2}\s?)?(1\s?)?(\()?\d{3}(\))?[.-\s]?\d{3}[.-\s]?\d{4}$/;


        if (!phonePattern.test(data.phone)) {
            errors.push('phone');
        }

        if (errors.length) {
            console.log(errors);
            return errors;
        } else {
            let individual = data.individual ? true : false;
            let cohorts = data.cohorts ? true : false;
            let submission = {...data,individual,cohorts};
            useEmail(submission,app);
        }
    };
    

    return (
        <form >
            <FormControl className='formElement' required>
                <Label>Name</Label>
                <StyledInput name='name' onChange={handleChange} placeholder="What's your name?" />
                <HelperText />
            </FormControl>
            <FormControl className='formElement' required>
                <Label>Email</Label>
                <StyledInput name='email' type='email' onChange={handleChange} placeholder="What's your email?" />
                <HelperText />
            </FormControl>
            <FormControl className='formElement' required>
                <Label>Phone</Label>
                <StyledInput name='phone' onChange={handleChange} placeholder="What's your phone?" />
                <HelperText />
            </FormControl>
            <FormControl className='formElement'>
                <Label>Interested in</Label>
                <FormControlLabel className='fixSize' name='cohorts' onChange={handleChange} control={<Checkbox size='large'/>} label="Cohorts" />
                <FormControlLabel className='fixSize' name='individual' onChange={handleChange} control={<Checkbox size='large'/>} label="1-on-1" />
            </FormControl> 
            <FormControl className='formElement' required>
                <Label>Message</Label>
                <StyledTextarea name='message' rows='4' onChange={handleChange} placeholder="Message?" />
                <HelperText />
            </FormControl>
            <Button className='fixSize' variant='contained' onClick={handleSubmit}>Submit</Button>           
        </form>
    );
}

const commonStyles = (theme) => `
  width: 320px;
  font-size: 1.2rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  padding: 8px 12px;
  border-radius: 8px;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }
  &:focus {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }
`;

const test = styled(TextareaAutosize)(`
  ${({ theme }) => commonStyles(theme)}
  min-height: 100px;
`);

const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
      width: 320px;
      font-size: 1.2rem;
      font-family: IBM Plex Sans, sans-serif;
      font-weight: 400;
      line-height: 1.5;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
      padding: 8px 12px;
      border-radius: 8px;
      min-height: 100px;
  
      &:hover {
        background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
        border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
      }
  
      &:focus {
        outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
      }
    `
);


const StyledInput = styled(Input)(
  ({ theme }) => `

  .${inputClasses.input} {
    width: 320px;
    font-size: 1.2rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    padding: 8px 12px;
    border-radius: 8px;

    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }

    &:focus {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  }
`,
);

const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = useState(false);

    useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
      {children}
      {required ? ' *' : ''}
    </p>
  );
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 4px;

  &.invalid {
    color: red;
  }
`;

const HelperText = styled((props) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};