import React from 'react'
import {Container, Row, Col, Lis} from 'react-bootstrap'
import {IoIosArrowForward} from 'react-icons/io'
import classes from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const Footer = () => {
  const {t} = useTranslation()
  return (
    <div>
        <Container>
            <Row>
                <Col md={3} sm={12}>
                    <h4>{t("aboutus_footer")}</h4>
                    <ul className={classes.List}>
                        <li className={classes.Item}>{t("address_footer")}</li>
                        <li className={classes.Item}>(+00) 1234 5648 90</li>
                        <li className={classes.Item}>email@2022.com</li>
                    </ul>
                </Col>
                <Col md={3} sm={12}>
                    <h4>{t("products_footer")}</h4>
                    <ul className={classes.List}>
                        <NavLink to='/men-products' className={classes.Item}>{t("gold_products_footer")}</NavLink>
                        <NavLink to='/women-products' className={classes.Item}>{t("silver_products_footer")}</NavLink>
                        <NavLink to='/women-products' className={classes.Item}>{t("gold_diamond_products_footer")}</NavLink>
                    </ul>
                </Col>
                <Col md={3} sm={12}>
                    <h4>{t("myaccount_footer")}</h4>
                    <ul className={classes.List}>
                        <NavLink to='/sign-up' className={classes.Item}>{t("signup_footer")}</NavLink>
                        <NavLink to='/login' className={classes.Item}>{t("login_footer")}</NavLink>
                        <NavLink to='/terms-conditions' className={classes.Item}>{t("terms_footer")}</NavLink>
                    </ul>
                </Col>
                <Col md={3} sm={12}>
                    <h4>{t("subscribe_footer")}</h4>
                    <p style={{color: '#777',fontSize:'14px'}}>{t("subscribe_desc_footer")}</p>
                    <form className={classes.Form}>
                        <input className={classes.Email} type="email" placeholder={t("your_email_footer")} />
                        <button className={[classes.Submit,'button'].join(" ")} type="submit">
                            <IoIosArrowForward />
                        </button>
                    </form>
                </Col>
            </Row>
            <div style={{textAlign:'center',color: '#777',fontSize:'14px',margin:'30px 0'}}>
                <p>© 2022, Medusa-2022. Powered by Abanoub Emad</p>
            </div>
        </Container>
    </div>
  )
}

export default Footer