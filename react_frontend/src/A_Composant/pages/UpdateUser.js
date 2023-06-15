import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar';
import Swal from 'sweetalert2'
import BackgroundImage from '../../assets/images/bg4.jpg'
import { FaArrowAltCircleRight, FaCircle, FaCircleNotch, FaPencilAlt, FaPencilRuler, FaRegArrowAltCircleLeft } from 'react-icons/fa';
import Footer from './Footer';
export default function UpdateUser(props) {
    const HeaderStyle = {
        width: "100%",
        height: "100vh",
        background: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [role, setRole] = useState()
    const [genre, setGenre] = useState()
    console.warn(name, email, phone);
    const goto = useNavigate();
    //get category by id 
    const getUserById = async (id) => {
        await axios.get(`http://127.0.0.1:8000/api/user/` + param.id)
            .then((res) => {
                setName(res.data[0].name)
                setEmail(res.data[0].email)
                setPhone(res.data[0].phone)
                setRole(res.data[0].role)
                setGenre(res.data[0].genre)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getUserById(param.id)
    }, [])
    const param = useParams()
    //update this category
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.put(`http://127.0.0.1:8000/api/user/` + param.id, { name, email, phone, role, genre })
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `user ${name} has been Updated `,
                    showConfirmButton: false,
                    timer: 1800
                })
            })
            .catch(() => {
                console.log(`category is not updating ...`);
            })
        goto('/users')
    }
    const Return = async (e) => {
        goto('/users')
    }
    return (
        <div >
            <NavBar />
            <div className='container-fluid' >
                <form onSubmit={handleSubmit}>
                    <div className=" container-fluid  style={ HeaderStyle }  vh-100 ">
                        <div className='row vh-100'>
                            <div className='col-3'></div>
                            <div className='col-6  bg-- '>
                                <h2 className='my-5'>update user: {param.id} </h2>
                                <button className='btn btn-outline-dark' onClick={Return}><FaRegArrowAltCircleLeft /> </button>
                                <hr></hr>
                                <div>
                                    <input type='text' id='input' value={name} className='form form-control' onChange={(e) => setName(e.target.value)} placeholder='user name' />
                                    <input type='email' id='input' value={email} className='form form-control my-2' onChange={(e) => setEmail(e.target.value)} placeholder=' email' />
                                    <input type='text' id='input' value={phone} className='form form-control my-2' onChange={(e) => setPhone(e.target.value)} placeholder=' phone' />
                                    <input type='text' id='input' value={role} className='form form-control my-2' onChange={(e) => setRole(e.target.value)} placeholder=' role' />
                                    <input type='text' id='input' value={genre} className='form form-control my-2' onChange={(e) => setGenre(e.target.value)} placeholder=' F or M' />
                                </div>
                                <hr></hr>
                                <button type='submit' className='btn btn-warning btn-block'  >update user <FaPencilAlt /> </button>
                                <hr></hr>
                                <table className='table table-bordered table-striped table-hover text-white'>
                                    <thead id='header'>
                                        <tr >
                                            <th>New name <FaCircleNotch /> </th>
                                            <th>New email <FaCircleNotch /></th>
                                            <th>New phone <FaCircleNotch /></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{name}</td>
                                            <td>{email} </td>
                                            <td>{phone} </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>

    )
}

