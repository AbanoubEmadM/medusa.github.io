import React from 'react'
import classes from './About.module.css'
import {Container} from 'react-bootstrap'
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
const About = (props) => {
  const {t} = useTranslation();
  return (
    <div className={classes.About}>
        <Container>
            <h2 className={classes.AboutTitle}>{t("jewellery_title")}</h2>
            <p className={classes.AboutDesc}>{t("jewellery_desc")}</p>
            <button className='button'>{t("jewellery_btn")} {props.lang === 'en' ? <BsArrowRight /> : <BsArrowLeft />} </button>
        </Container>
    </div>
  )
}

export default About