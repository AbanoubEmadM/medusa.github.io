import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form , Container, Card} from 'react-bootstrap'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail, signOut} from 'firebase/auth'
import {app} from '../../base'
import swal from 'sweetalert';
import {FcGoogle} from 'react-icons/fc'
import classes from './Login.module.css'
import { NavLink } from 'react-router-dom';
const Login = (props) => {
  const auth = getAuth(app)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const signIn = (e) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(res => {
      swal("Good Job!",'You Successufully loged in', 'success')
    })
    .catch(err => {
      setError(err.message);
      swal("Something went wrong!",err.message, 'error')
    })
  }
  const provider = new GoogleAuthProvider()
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(res => {
        swal("Good Job!",'You Successufully loged in', 'success')
      })
      .catch(err => {
        setError(err.message);
        swal("Something went wrong!",err.message, 'error')
      })
  }
  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        swal("Good Job!", "Password reset email sent!", 'success')

      })
      .catch(err =>{
        setError(err.message);
        swal("Something went wrong!","Try again later!", 'error')
      })
  }
  const signOutMethod = () => {
    signOut(auth).then(() => console.log('signed out'))
  }
  return (
    <Container className={classes.FormContainer}>
      <h2 className={classes.LoginTitle}>Login</h2>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className={['mb-3',classes.Input].join(" ")}
      >
        <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
      </FloatingLabel>
      <FloatingLabel className={classes.Input}  controlId="floatingPassword" label="Password" onChange={(e) => setPassword(e.target.value)}>
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
        <div className={classes.NestedLogin}>        
          <p onClick={resetPassword}>Reset Password ?</p>
          <FcGoogle cursor='pointer' onClick={loginWithGoogle} size={25} />
        </div>
        <a to='/' className='button' onClick={signIn}>Submit</a>
        <button onClick={signOutMethod}>Sign Out</button>
    </Container>
  )
}

export default Login