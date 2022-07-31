import React from 'react';
import Categories from '../Categories/Categories.js'
import PopularProducts from '../Popular Products/PopularProducts';
import About from '../About/About';
import Discount from '../Discount/Discount';
import Lineup from '../Lineup/Lineup';
import HomeSection from '../HomeSection/HomeSection.js';
const Home = (props) => {
  return (
    <>
    <HomeSection />
    <Categories />
    <PopularProducts lang={props.lang} />
    <About lang={props.lang} />
    <Discount lang={props.lang} />
    <Lineup lang={props.lang}/>
    </>
  )
}

export default Home