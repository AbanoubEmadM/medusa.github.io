import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import classes from './Lineup.module.css'
import LineupImg from '../../assets/lineup.webp'
import { useTranslation } from 'react-i18next'
const Lineup = (props) => {
  const {t} = useTranslation()
  return (
    <div className={classes.Lineup} style={{transform: props.lang === 'ar' ? 'rotateY(180deg)' : 'rotate(0)'}}>
        <Container className={classes.LineupContainer} style={{justifyContent: props.lang === 'ar' ? 'end' : 'start'}}>
            <div className={classes.LineupContent} style={{transform: props.lang === 'ar' ? 'rotateY(180deg)' : 'rotate(0)'}}>
                <h2>{t("lineup_title")}</h2>
                <p className={classes.LineupDesc}>{t("lineup_desc")}</p>
                <button className='button'>{t("lineup_btn")}</button>
            </div>
        </Container>
    </div>
  )
}

export default Lineup