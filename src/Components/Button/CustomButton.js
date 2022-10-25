import React from 'react';
import Button from '@mui/material/Button'
import './CustomButton.css';

export const CustomButton = (props) => {

  return (
    <Button type="submit" variant="contained" class="FormButton"
    onClick={props.handleClick}
    >{props.text}
    </Button>
  )
}
