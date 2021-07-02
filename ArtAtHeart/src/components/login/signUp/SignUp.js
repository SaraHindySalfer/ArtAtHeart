import React, { useState } from 'react'
import './SignUp.css'
import { useHistory } from 'react-router-dom'
import { validateValues, isValidEmail } from '../../../shared/Login/checkValid.js'
import Input from '../Input/Input.js'
import { addUser, getUsers } from '../../../service/users.js'
import { Helmet } from "react-helmet"
export default function SignUp() {
  let history = useHistory()
  var Recaptcha = require('react-recaptcha');
  const [click, setClick] = useState(false)
  const [signUpValue, setSignUpValue] = useState({
    email: '',
    name: '',
    password: '',
    registerSuccess: false,
    errors: {}

  });
  const goToLogin = () => {
    history.push('/login')
  }
  let flag = false;
  const updateSignUpValue = (event) => {
/*     const errorValue = validateValues(signUpValue);
 */    setSignUpValue({
    ...signUpValue,
    [event.target.name]: event.target.value
  });


  }
  async function handleSubmit(event) {
    event.preventDefault();
    let users = await getUsers("users/details")
    const errorValue = validateValues(signUpValue);
    let id = (users.length == 0) ? 0 : Number(users[users.length - 1].id) + 1;

    users.map((item) => {
      if (signUpValue.email == item.email) {
        flag = true;
        setSignUpValue({
          ...signUpValue,
          errors: errorValue
        });
        signUpValue.errors.email = 'email exists'
        console.log(";;", signUpValue.errors)
      } else {
        setSignUpValue({
          ...signUpValue,
          errors: errorValue
        });
      }

    })
    let allRight = Object.keys(errorValue).length === 0 ? true : false
    if (allRight) {
      users.map((item, i) => {

      })
      if (!flag) {

        const newUser = {
          id: id,
          email: signUpValue.email,
          name: signUpValue.name,
          password: signUpValue.password
        }
        addUser(newUser);
        history.push('/')
        setSignUpValue({
          email: '',
          name: '',
          password: '',
          errors: {}
        });
        ///
        sessionStorage.setItem("loggedIn", signUpValue.name);
        setClick(true)
        window.location.reload();
      }
    }

  }
  return (
    <div className='comtainer' >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign Up | Art At Heart</title>
      </Helmet>
      <form className='form' >
        <div className='segment'>
          <h1 className='title'>Sign Up</h1>
        </div>
        <Input /* className='col-6' */ className='nameInput'
          label='Name:'
          name='name'
          value={signUpValue.name}
          onChange={updateSignUpValue}
          error={signUpValue.errors.name} />
        <br />
        <Input /* className='col-6' */ className='emailInput'
          label='Email address:'
          name='email'
          value={signUpValue.email}
          onChange={updateSignUpValue}
          error={signUpValue.errors.name} />
        <br />
        <Input /* className='col-6' */ className='passwordInput'
          label='Password:'
          name='password'
/*             type='password'
 */            value={signUpValue.password}
          onChange={updateSignUpValue}
          error={signUpValue.errors.password} />
        <div className='buttons'>
          <button className='btn-primary' onClick={handleSubmit} >
            Sign Up
          </button>
          <button className='btn-primary-left' onClick={goToLogin} >signed up?
          </button>

        </div>
        {/* <Recaptcha
          sitekey={"6LcIaq4aAAAAABddyFysloHATemKDQvuw5ABQsDR"}
        /> */}
      </form>
    </div>

  )
}
