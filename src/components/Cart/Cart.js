import axios from 'axios';
import React, { useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Spinner from '../../Spinner/Spinner';
import { collection } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { app, db } from '../../base';
import { getAuth } from 'firebase/auth';
const Cart = (props) => {
	const auth = getAuth(app)
	const query = collection(db, `users/${auth.currentUser.uid}/children`)
	const [docs, loading, error] = useCollectionData(query)

	let addedItems = <Spinner />
	if(docs && auth.currentUser !== null){
		addedItems = docs.map(product =>
			<Col lg={4} md={6} sm={12} key={Math.random()}>
			<img style={{width:'100%'}} src={product.img} />
			<p>{product.title}</p>
			<p>{product.id}</p>
			</Col>  
		)
	}
	return (
			<Container>
			<Row>
				{props.cartLength === 0 ? <h3 style={{textAlign:'center',margin: '226px 0px'}}>No Products To Show!</h3> : addedItems}
			</Row>
			</Container>
	)
}

export default Cart