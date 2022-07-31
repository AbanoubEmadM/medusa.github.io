import React from 'react'
import { Container } from 'react-bootstrap';
import  {BsArrowRight, BsArrowLeft} from 'react-icons/bs'
import classes from './Home.module.css';
import cookie from 'js-cookie'
import { useTranslation } from 'react-i18next';

const HomeSection = (props) => {
    const {t} = useTranslation()  
  return (
    <div className={classes.Home} style={{transform: props.lang === 'ar' ? 'rotateY(180deg)' : 'rotate(0)'}}>
      <div className={classes.HomeContent} style={{transform: props.lang === 'ar' ? 'rotateY(180deg)' : 'rotate(0)'}}>
        <Container>
          <h2 className={classes.HomeTitle}>
            {t("home_title")}<br /> {t("home_title_br")}
          </h2>
          <p className={classes.HomeDesc}>{t("home_desc")}</p>
          <button className='button'>
            <a className={classes.HomeBtn} href="#popular-products">{t("home_btn")}{props.lang === 'ar' ? <BsArrowLeft /> : <BsArrowRight />} </a>
          </button>
        </Container>
      </div>
    </div>

  )
}

export default HomeSection