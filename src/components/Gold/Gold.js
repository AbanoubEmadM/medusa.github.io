import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import classes from './Gold.module.css'
const Gold = (props) => {
	const [products, setProducts] = useState();
   useEffect(() => {
      axios.get('WomenData/data.json')
         .then(res => {
            setProducts(res.data)
         })
   },[]);
	let allProducts = <Spinner />
	let choosenItem = (id) => {
		let itemIndex = products.findIndex(p => {
			return p.id === id
		})
		props.setChoosenProducts(products[itemIndex])
	}
  if(products){
    allProducts = products.map(product => {
		 let title = product.title;
		let showTitle = '';
		for(let i = 0; i < title.length; i++){
			showTitle += title[i]
			if(i === 50){
				showTitle+= '...'
				break;
			}
		}
		return(
			<Col key={product.id} lg={4} md={6} sm={12}>
				<NavLink to='/product-details' className={classes.ProductLink} onClick={() => choosenItem(product.id)}>
					<img src={product.img} className={classes.ProductImage} />
					<p>{product.title}</p>
				</NavLink>
			</Col>
		)
	 })
	}
  return (
    <Container>
		<Row>
			{allProducts}
		</Row>
    </Container>
  )
}

export default Gold