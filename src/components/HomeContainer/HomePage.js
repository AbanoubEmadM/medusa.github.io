import axios from 'axios';
import React, { Fragment } from 'react'
import Home from '../Home/Home'
const HomePage = (props) => {
    if(props.lang === 'ar'){
      document.body.style.fontFamily = "'Tajawal', sans-serif"
      document.body.style.fontWeight = "500"
    }else{
      document.body.style.fontFamily = "'Poppins', sans-serif"
    }
  return (
    <Fragment>
        <Home lang={props.lang} />
    </Fragment>
  )
}

export default HomePage