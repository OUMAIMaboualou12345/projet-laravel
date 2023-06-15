import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style.css'
import { FaUser, FaHome, FaArrowAltCircleRight, FaCalendarDay, FaStore, FaFacebook, FaSearch, FaRegQuestionCircle } from "react-icons/fa";
import { TbCategory } from 'react-icons/tb'
import pic1 from '../../assets/images/logo2.jpeg'
import Swal from 'sweetalert2'

function NavBarUser() {
    const [activehome, setactivehome] = useState(false);

    function ReqCetificate() {
        Swal.fire({
            title: 'Deleted!',
            position: 'top-end',
            icon: 'success',
            title: ` work certificate  has been requested `,
            showConfirmButton: false,
            timer: 1800
        })
    }



    const goto = useNavigate();
    const us = localStorage.getItem('users');
    function logout() {
        localStorage.removeItem('users')
        goto('/login')
    }
    function searchPro() {
        goto('/user/search/products')
    }

    return (

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-12'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: '#1e963c' }}>
                        <h5 className="navbar namelogo " href="#"> SYBA Pharmacy</h5>
                        <img src={pic1} alt='user' style={{ height: '50px', width: '50px', }} className='card-img navbar-brand ' />

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item" active >
                                    <a className="nav-link" href="/user/home" > <FaHome /> </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/users/product">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="/user/exp-product">ExpProducts </a>
                                </li>
                                <button className="btn btn-outline-info my-2 my-sm-0 btnsherch text-dark" type="submit" onClick={searchPro}>find Product <FaSearch /> </button>

                                <li className="nav-item">
                                    <a className="nav-link text-danger logout" onClick={logout}>Logout</a>
                                </li>
                            </ul>

                        </div>
                    </nav>

                </div>
            </div>
        </div>

    )
}
export default NavBarUser;
