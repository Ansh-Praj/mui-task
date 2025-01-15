import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BaseTextField from './commonComponents/BaseTextField';
import './TextField.css'

const TextField = () => {

    const [label, setLabel] = useState('Name')
    const [variant, setVariant] = useState('standard')


    let labelInput 
    let variantInput

    function handleLabel(e){
        labelInput = e.target.value
    }
    function handleVariant(e){
        variantInput = e.target.value
    }
    function handleClick(){
        const lab = document.querySelector('#label')
        const vari = document.querySelector('#variant')

        labelInput = lab.value
        variantInput = vari.value

        setLabel(labelInput)
        setVariant(variantInput)
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">          
          <Typography variant="h6" color="inherit" component="div">
            TextField (common components)
          </Typography>
        </Toolbar>
      </AppBar>

        <br />
        <br />
        <br />


            <div style={{textAlign: "center"}}>
                <h2>Change the label and variant of the base component below.</h2>
                <p>Possible values of variant: <b>standard</b>, <b>outlined</b>, <b>filled</b></p>
                <p>Make sure to fill "variant" input with the given values only</p>
                <br />
                <p>
                    &lt;BaseTextField label="
                    <input id='label' type="text" onChange={handleLabel}/>" variant="
                    <input id='variant' type='text' onChange={handleVariant}/>" /&gt;
                </p>
                <br />
                <Button variant="contained" onClick={handleClick}>Change</Button>
                <br />
                <br />
                <br />
                <div>
                    Common Input Field:  <br />
                    <BaseTextField label={label} variant={variant} />
                </div>
            </div>
    </Box>
        </div>

    )
};

export default TextField;