import React,{ useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomeContainer/HomePage';
import MenProducts from './components/Men Products/MenProducts';
import WomenProducts from './components/WomenProducts/WomenProducts';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Gold from './components/Gold/Gold';
import GoldWithDiamondProducts from './components/GoldWithDiamondProducts/GoldWithDiamondProducts';
import SilverProducts from './components/SilverProducts/SilverProducts'
import Footer from './components/Footer/Footer'
import Terms from './components/Terms/Terms';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import axios from 'axios';
import {getAuth, onAuthStateChanged } from 'firebase/auth';
import {app, db} from './base';
import { addDoc, collection,doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import ContactUs from './components/ContactUs/ContactUs';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const App = () => {
	const [lang, setLang] = useState(); // normal
	const [choosenProducts, setChoosenProducts] = useState(); // normal
	const [isAuth, setIsAuth] = useState(null);
	const [cartLength, setCartLength] = useState(null);
	const auth = getAuth(app)
	const query = collection(db, `users/${isAuth}/children`)
	const [docs, loading, error] = useCollectionData(query)
	useEffect(() => {
		if(loading){
			setCartLength(0)
		}else{
			console.log(docs);
			setCartLength(docs.length)
		}
	});
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if(user){
				console.log(`uid is: ${user.uid} `);
				setIsAuth(user.uid)
			}else{
				console.log('no user');
				setIsAuth(null)
			}
		})
	}, [auth]);
		return (
			<BrowserRouter>
			<div className='App'>
				<nav>
					<Navbar isAuth={isAuth} cartLength={cartLength} setLang={setLang} />
				</nav>
				<Routes>
					<Route path='/' element={<HomePage  lang={lang} />}/>
					<Route path='/men-products' element={<MenProducts />}/>
					<Route path='/women-products' element={<WomenProducts />}/>
					<Route path='/silver-products' element={<SilverProducts choosenProducts={choosenProducts}/>}/>
					<Route path='/gold-products' element={<Gold isAuth={isAuth} choosenProducts={choosenProducts} setChoosenProducts={setChoosenProducts}  />}/>
					<Route path='/goldwdiamond_product' element={<GoldWithDiamondProducts />}/>
					<Route path='/product-details' element={<ProductDetails isAuth={isAuth}  setCartLength={setCartLength} choosenProducts={choosenProducts} />}/>
					<Route path='/contactus' element={<ContactUs/>} />
					<Route path='/cart' element={<Cart setCartLength={setCartLength} cartLength={cartLength} isAuth={isAuth} />}/>
					<Route path='/sign-up' element={<Signup setIsAuth={setIsAuth} />}/>
					<Route path='/login' element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}/>
					<Route path='/terms-conditions' element={<Terms />}/>
				</Routes>
				<footer>
					<Footer />
				</footer>
			</div>
			</BrowserRouter>
		);
}

export default App;
