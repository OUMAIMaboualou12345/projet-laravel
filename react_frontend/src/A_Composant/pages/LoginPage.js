import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import BackgroundImage from '../../assets/images/bg4.jpg'
import '../../App.css'
import axios from 'axios'

export default function SignInPage() {
    const [email, setEmail] = useState('')
    const [password, setPasswoed] = useState('')
    const [erro, setErrors] = useState('')
    const goto = useNavigate()
    const HeaderStyle = {
        width: "100%",
        height: "100vh",
        background: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }

    // goto('/admin/home')
    // console.warn(email,password)
    // let item = {email,password}
    // let response= await axios.post('http://localhost:8000/api/login', item)
    // response = await response.data
    const loginAsAdmin = (e) => {
        e.preventDefault();
        async function loginAdmin() {
            await axios.post('http://localhost:8000/api/login', { email, password })
                .then((res) => {
                    if (res.message === "email or password is not matched..!") {
                        goto('/login')
                        setErrors(res.message)
                    } else {
                        localStorage.setItem('email', email);
                        localStorage.setItem('password', password);
                        goto('/admin/home')
                    }
                })
        }
        loginAdmin();
    }



    const loginAsAdmi = (e) => {
        e.preventDefault();
        goto('/admin/home')
    };
    const handleSubmitUser = (e) => {
        e.preventDefault();
        goto('/User/home')
    };


    return (
        <div >
            <header style={HeaderStyle}>
                <form  >
                    <div className="text-center ">
                        <div className='formulaire'>
                            {erro}
                            <p>
                                <label>Username or email address</label><br />
                                <input type="text" value={email} name="email" required onChange={(e) => setEmail(e.target.value)} className='form form-control borderd border-warning bg-muted' />
                            </p>
                            <p>
                                <label>Password</label>
                                <br />
                                <input type="password" value={password} name="password" required onChange={(e) => setPasswoed(e.target.value)} className='form form-control borderd border-warning bg-muted' />
                            </p>
                            <p>
                                <div className='d-grid'>
                                    <button id='log_btn' type='submit' className='btn btn-warning btn-block text-dark ' onClick={loginAsAdmin}>login as admin</button>
                                    <button id='log_btn' type='submit' className='btn btn-success btn-block text-dark my-2' onClick={handleSubmitUser}>login as user</button>

                                </div>
                            </p>
                        </div>

                    </div>
                </form>
            </header>
        </div>

    )

}
