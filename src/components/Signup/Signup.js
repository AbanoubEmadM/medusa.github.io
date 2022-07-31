import React, { useEffect, useState } from 'react'
import classes from './Signup.module.css'
import { TextField } from '@mui/material'
import { Box, Container } from '@mui/system'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app, db } from '../../base'
import { doc,setDoc } from 'firebase/firestore'
const Signup = () => {
  const auth = getAuth(app)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(user => {
        const docRef = doc(db, "users", user.user.uid);
        setDoc(docRef,{}).then(() => window.location = '/login')
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div>
      <Container style={{textAlign: 'center', margin:'170px auto'}}>
      <h2 className={classes.SignUpTitle}>Create Account</h2>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
      >
        <TextField style={{width:'48%'}} onChange={(e) => setEmail(e.target.value)} label="Email" type='email' placeholder='Email' /><br/>
        <TextField style={{width:'48%'}} onChange={(e) => setPassword(e.target.value)} label="Password" type='password' placeholder='Password' /><br/>
        <input className='button' type='submit' onClick={signUp} />
      </Box>
    </Container>

    </div>
  )
}

export default Signup