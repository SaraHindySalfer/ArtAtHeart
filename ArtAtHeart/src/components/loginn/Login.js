import React, { useState } from 'react'
import './Login.css'
import { validateValues } from '../../shared/Login/checkValid.js'
import Input from '../login/Input/Input.js'
import { useHistory } from 'react-router-dom'
import { Helmet } from "react-helmet"
import { checkLoginDetails } from '../../service/users.js'
export default function Login() {
    const [login, setLogin] = useState({
        email: '',
        password: '',
        errors: {}
    });
    let history = useHistory()
    const goToSignUp = () => {
        history.push('/signUp')
    }
    const updateRegisterValue = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        });
    }
    async function handleSubmit(event) {
        event.preventDefault();
        let errorValue = validateValues(login);
        setLogin({
            ...login,
            errors: errorValue
        });

        let allRight = Object.keys(errorValue).length === 0
        let isValid = true
        if (allRight) {
            let userDetails = {
                email: login.email,
                password: login.password
            }
            console.log("det", userDetails)
            let response = await checkLoginDetails(userDetails)
            console.log("resp", response)
            console.log( { error: "email and password do not match" });
        
            if (response.error === "email and password do not match") {
                console.log("46")
                errorValue.password = 'Incorrect password'
                setLogin({
                    ...login,
                    errors: errorValue
                });
                isValid = false;
            }
            if (isValid) {
                let user = response;
                setLogin({
                    email: '',
                    password: '',
                    errors: {}
                });
                //user.registerSuccess = true
                sessionStorage.setItem("loggedIn", JSON.stringify(user.name))
                window.location.reload();
            }
        } else if (isValid) {
            errorValue.email = "Looks like you're not registered please register"
            setLogin({
                ...login,
                errors: errorValue
            })
        }
    }
    return (
        <div className='comtainer' >
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login | Art At Heart</title>
            </Helmet>
            <form className='form' >
                <div className='segment'>
                    <h1 className='title'>Login</h1>
                </div>
                <Input type='text' className='emailInput'
                    label='Email address:'
                    name='email'
                    value={login.email}
                    onChange={updateRegisterValue}
                    error={login.errors.email} />
                <br />
                <Input type='text' className='passwordInput'
                    label='Password:'
                    name='password'
                    type='password'
                    value={login.password}
                    onChange={updateRegisterValue}
                    error={login.errors.password} />
                <div className='buttons'>
                    <button onClick={handleSubmit} className='btn-primary'>
                        Login
                    </button>
                    <button onClick={goToSignUp} className='btn-primary-left'>not signed up?</button>
                </div>
            </form>

        </div>
    )
}
