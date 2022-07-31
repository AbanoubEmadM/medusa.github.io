import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import {Container} from 'react-bootstrap'
import classes from './PopularProducts.module.css';
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'
import Spinner from '../../Spinner/Spinner';
import { useTranslation } from 'react-i18next';
const PopularProducts = (props) => {
   let [products, setProducts] = useState(null);
   let [index, setIndex] = useState(0);
   useEffect(() => {
      if(props.lang === 'en'){
         axios.get("PopularData/data.json")
               .then(res => {
                  setProducts(res.data)
               })
      }
      else{
         axios.get("PopularData/data_ar.json")
         .then(res => {
               setProducts(res.data)
         },[])
      }
   },[props.lang])

   let showProducts = <Spinner />
   if(products){
      showProducts = products.slice(0+index, 3 + index).map((product) => {
         return(
               <div className={classes.Product} key={product.id}>
                  <img className={classes.ProductImg} src={product.img} />
                  <p>{product.title} </p>
               </div>
         )
      }
   )
}
   const {t} = useTranslation()  

   let nextProduct = () => {
      if(products){
         setIndex(++index)
         console.log(index);
      }
   }
   let prevProduct = () => {
      if(products){
         setIndex(--index)
      }
   }
return (
   <Container id="popular-products" className={classes.PopularProducts}>
      <h2 className={classes.ProductsTitle}>{t("popular_products")}</h2>
      <div className={classes.Products}>
         <span className={classes.Arrow} onClick={prevProduct} style={{cursor: products ? 'pointer' : 'unset', pointerEvents: index === 0 ? 'none' : 'all'}}>
               {props.lang === 'en' ? <BsArrowLeft size={25} /> :  <BsArrowRight size={25} />}
         </span>
         {showProducts}
         <span className={classes.Arrow} onClick={nextProduct} style={{cursor: products ? 'pointer' : 'unset', pointerEvents: index === 12 ? 'none' : 'all'}}>
         {props.lang === 'en' ? <BsArrowRight size={25} /> : <BsArrowLeft size={25} />}
         </span>
      </div>
   </Container>
)
}

export default PopularProducts