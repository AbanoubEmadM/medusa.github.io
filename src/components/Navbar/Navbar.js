import React, { useEffect, useState } from 'react'
import cookie from 'js-cookie'
import { useTranslation } from 'react-i18next';
import 'flag-icon-css/css/flag-icons.min.css'
import {GoThreeBars, GoTriangleUp} from 'react-icons/go'
import {GrClose} from 'react-icons/gr'
import {BsGlobe} from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import i18next from 'i18next';
import logo from '../../assets/logo.jpeg'
import { NavLink } from 'react-router-dom';
import './navbar.css'
const Navbar = (props) => {
    let currentLang = cookie.get('i18next')
    useEffect(() => {
      if(currentLang === 'ar'){
        document.dir = 'rtl';
        props.setLang('ar')
      }else{
        props.setLang('en')
        document.dir = 'ltr'
      }
    }, [currentLang]);
    const langs = [
      {
        code: 'en',
        name: 'English',
        country_code: 'gb',
        dir:'ltr'
      },
      {
        code: 'ar',
        name: 'العربية',
        country_code: 'eg',
        dir: 'rtl'
      },
    ]
    let [navbar,setNavbar] = useState(false)
    let [nestedProducts,setNestedProducts] = useState(false)
    let [nestedLangs,setNestedLangs] = useState(false)
    const {t} = useTranslation()  
    const handleNavbar = () => {
      setNavbar(!navbar)
    }
    const closeNavbar = () => {
      setNavbar(false)
      setNestedProducts(false)
    }
    const handleLangs = (code) => {
      setNavbar(false)
      i18next.changeLanguage(code)
    }
  return (
    <div className='navbar' style={{display: navbar ? 'block' : 'flex'}}>
      {/* for desktop */}
      {navbar ? 
        <>
        <div className='nav-items' style={{display:'block'}}>
            <GrClose onClick={closeNavbar} />
              <ul className='NavUl'>
                  <NavLink onClick={closeNavbar} className='item' to='/'>{t("nav_home")}</NavLink>
                  <li onClick={() => setNestedProducts(!nestedProducts)} className='item products'>
                    {t("nav_products")}
                    {nestedProducts ?
                      <ul className='nested-products'>
                      {/* <div className='arrow'></div> */}
                      <GoTriangleUp className='arrow' />
                        <NavLink className='nested-item' onClick={closeNavbar} to="/silver-products">Silver Products</NavLink>
                        <NavLink className='nested-item' onClick={closeNavbar} to="/gold-products">Gold Products</NavLink>
                        <NavLink className='nested-item' onClick={closeNavbar} to="/goldwdiamond_product">Gold With Diamond Products</NavLink>
                      </ul>
                      :
                      null
                    }
                  </li>
                  <NavLink onClick={closeNavbar} className='item' to='contactus'>{t("nav_contact")}</NavLink>
                  <li className='item products' onClick={() => setNestedLangs(!nestedLangs)}>
                    <BsGlobe />
                    {nestedLangs ?
                    <ul className='nested-languages'>
                      {langs.map(({code, name, country_code}) =>( 
                        <li className='nested-item' onClick={() => handleLangs(code)} key={country_code} >
                          <span style={{marginRight: '10px'}} className={`flag-icon flag-icon-${country_code}`}></span>
                          {name}
                        </li>
                      )
                      )}
                    </ul>
                  :
                  null
                }
                  </li>
              </ul>
				  <NavLink style={{position:'relative'}} onClick={closeNavbar} className='item' to='/cart'>
						<AiOutlineShoppingCart size={26} />
						<span className='cart-length'>{ props.isAuth ? props.cartLength : 0}</span>
					</NavLink>
          </div>
          <div style={{display:'none'}}>
          <NavLink to='/'><img className='logo' src={logo} /></NavLink>
          </div>
        </>
        :
        <>
        {/* for mobile */}
        <GoThreeBars onClick={handleNavbar} size={25} className='bars' />
        <div className='nav-items'>
              <ul className='main-ul'>
                  <NavLink onClick={closeNavbar} className='item' to='/'>{t("nav_home")}</NavLink>
                  <li onClick={() => setNestedProducts(!nestedProducts)} className='item products'>
                    {t("nav_products")}
                    {nestedProducts ?
                      <ul className='nested-products'>
                      {/* <div className='arrow'></div> */}
                      <GoTriangleUp className='arrow' />
                        <NavLink className='nested-item' to="/silver-products">Silver Products</NavLink>
                        <NavLink className='nested-item' to="/gold-products">Gold Products</NavLink>
                        <NavLink className='nested-item' to="/goldwdiamond_product">Gold With Diamond Products</NavLink>
                      </ul>
                      :
                      null
                    }
                  </li>
                  <NavLink onClick={closeNavbar} className='item' to='contactus'>{t("nav_contact")}</NavLink>
                  <li className='item products' onClick={() => setNestedLangs(!nestedLangs)}>
                    <BsGlobe />
                    {nestedLangs ?
                    <ul className='nested-languages'>
                      <GoTriangleUp className='arrow' />
                      {langs.map(({code, name, country_code}) =>( 
                        <li className='nested-item' onClick={() => i18next.changeLanguage(code)} key={country_code} >
                          <span style={{marginRight: '10px'}} className={`flag-icon flag-icon-${country_code}`}></span>
                          {name}
                        </li>
                      )
                      )}
                    </ul>
                  :
                  null
                }
                  </li>
                  <NavLink style={{position:'relative'}} onClick={closeNavbar} className='item' to='/cart'>
							<AiOutlineShoppingCart size={26} />
							<span className='cart-length'>{props.cartLength}</span>
						</NavLink>
              </ul>
          </div>
          <div>
              <NavLink to='/'><img className='logo' src={logo} /></NavLink>
          </div>
        </>

      }
    </div>
  )
}

export default Navbar