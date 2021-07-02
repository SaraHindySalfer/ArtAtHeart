import React, { useState } from 'react'
import './SignUp.css'
import { validateValues } from '../../shared/Login/checkValid.js'
import LoginInput from '../login/loginInput/LoginInput.js'

import { getUsers } from '../../service/users.js'
export default function SignUp() {
    /* localStorage.setItem("no",loggedIn) */
    const [signUp, setsignUp] = useState({
        email: '',
        password: '',
        registerSuccess: false,
        errors: {}
    });
    const updateRegisterValue = (event) => {
        setsignUp({
            ...signUp,
            [event.target.name]: event.target.value
        });
    }
    async function handleSubmit(event) {
        event.preventDefault();
        let users = await getUsers("users/details")
        let name;
        const errorValue = validateValues(signUp);
        let flag = false;
        users.map((item) => {
            if (signUp.email != item.email) {
                flag = true;
                setsignUp({
                    ...signUp,
                    errors: errorValue
                });
                signUp.errors.email = 'email exists'
            } else {
                setsignUp({
                    ...signUp,
                    errors: errorValue
                });
                name=item.name
            }

        })


        let allRight = Object.keys(errorValue).length === 0 ? true : false
        if (allRight) {
            setsignUp({
                ...signUp,
                registerSuccess: 'true'

            });
            sessionStorage.setItem("loggedIn",name)
            window.location.reload();

        }
    }
    return (
        <div className='comtainer' >
            <form className='form' >
                <div className='segment'>
                    <h1 className='title'>sign up</h1>
                </div>
                <LoginInput type='text' className='emailInput'
                    label='Email address:'
                    name='email'
                    value={signUp.email}
                    onChange={updateRegisterValue}
                    error={signUp.errors.email} />
                <LoginInput type='text' className='passwordInput'
                    label='Password:'
                    name='password'
           value={signUp.password}
                    onChange={updateRegisterValue}
                    error={signUp.errors.password} />
                <button onClick={handleSubmit} href="#">
                    Sign Up
          </button>
            </form>

        </div>
    )
}
