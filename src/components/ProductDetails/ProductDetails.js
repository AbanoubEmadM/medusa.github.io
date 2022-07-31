import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import classes from './ProductDetails.module.css';
import { getDatabase, set, ref, onValue, child, get} from "firebase/database";
import { addDoc, collection,doc } from 'firebase/firestore'
import swal from 'sweetalert';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import {app,db} from '../../base';
const ProductDetails = (props) => {
  const database = getDatabase()
  const query = collection(db, `users/${props.isAuth}/children`)
  const [docs, loading, error] = useCollectionData(query)
	const handleAddToCart = () => {
    let product = {
      title: props.choosenProducts.title,
      id: props.choosenProducts.id,
      img: props.choosenProducts.img
    }
    const docRef = collection(db,`users/${props.isAuth}/children`)
    addDoc(docRef,product)
  }

    return (
      <Container>
        {props.choosenProducts ? 
          <div className={classes.ProductItem}>
            <img className={classes.ProductImage} src={props.choosenProducts.img} />
            <div className={classes.ProductDetails}>
              <h2 className={classes.ProductTitle}>Gold</h2>
              <AiFillStar color='#c3935b' />
              <AiFillStar color='#c3935b' />
              <AiFillStar color='#c3935b' />
              <AiFillStar color='#c3935b' />
              <AiOutlineStar color='#c3935b' />
              <h5>Details:</h5>
              <p>{props.choosenProducts.title}</p>
              <button onClick={handleAddToCart} type='button' className={classes.AddToCart}>Add to Cart</button>
              <button style={{width: '100%'}} className='button'>Buy it now</button>
            </div>
          </div>
          :
          <p>No Product to show</p>
        }
      </Container>
    )
  }

export default ProductDetails