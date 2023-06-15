
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './NavBar';
import axios from 'axios';
import { FaEdit, FaEye, FaFile, FaPlus, FaSearch, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import pic2 from '../../assets/images/avatar1.png'
import pic1 from '../../assets/images/avatar4.png'
import Swal from 'sweetalert2'
import Footer from './Footer';

export default function Users() {
    const [user, setUser] = useState([])
    const [email, setemail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPasswoed] = useState('')
    const [name, setname] = useState('')
    const [role, setRole] = useState('')
    const [genre, setGenre] = useState('')
    const [orderName, setOrderName] = useState(null)
    const [orderRole, setorderRole] = useState(null)
    const [orderSex, setorderSexe] = useState(null)

    //axios to get all users from backend
    async function getUsers() {
        try {
            if (orderName) {
                const url = 'http://127.0.0.1:8000/api/users/order';
                const res = await axios.get(url);
                setUser(res.data)

            } else if (orderRole) {
                const url = 'http://127.0.0.1:8000/api/users/order/role';
                const res = await axios.get(url);
                setUser(res.data)
            } else if (orderSex) {
                const url = 'http://127.0.0.1:8000/api/users/order/sexe';
                const res = await axios.get(url);
                setUser(res.data)
            } else {
                const url = 'http://localhost:8000/api/users';
                const res = await axios.get(url);
                setUser(res.data.reverse())
            }
        } catch (err) {
            console.log(err);
        }
    }
    const nbrUsers = user.length;

    //add a user
    async function addUser() {
        const url = 'http://localhost:8000/api/add/user';
        await axios.post(url, { name, email, phone, password, role, genre })
            .then(() => {
                Swal.fire({
                    title: 'Deleted!',
                    position: 'top-end',
                    icon: 'success',
                    title: `user ${name} has been created `,
                    showConfirmButton: false,
                    timer: 1800
                })
            }).catch(() => {
                alert(`all fields is require * ....!`);
            })
        getUsers();
    };
    //delete a user
    async function remove(id) {
        const url = `http://localhost:8000/api/delete/user/${id}`;
        await axios.delete(url)
            .then(() => {
                Swal.fire({
                    title: 'Deleted!',
                    position: 'top-end',
                    icon: 'success',
                    title: `user ${id} has been deleted `,
                    showConfirmButton: false,
                    timer: 1800
                })
            })
            .catch(() => {
                alert(`not removed`);
            })
        getUsers();
    };
    // const handleSubmit=async(e)=>{
    //     const formData= new formData();
    //     formData.append("name",name)
    //     formData.append("name",name)
    //     formData.append("name",name)
    //     formData.append("name",name)
    //     formData.append("name",name)
    //     formData.append("name",name)
    //     formData.append("name",name)
    // }

    useEffect(() => {
        getUsers();
    }, [orderName, orderRole, orderSex]);


    return (
        <div>
            <NavBar />
            <div className=" container-fluid    vh-100">
                <div className='row '>
                    <div className='col-3  bg-- vh-100'>
                        <h2 className='my-3 '>Add Pharmacist</h2>
                        <hr></hr>
                        <div className='row'>
                            <div className='col-5'>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="check1" name="genre" value="M" onChange={(e) => setGenre(e.target.value)} />
                                    <label className="form-check-label">Male </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="check1" name="genre" value="F" onChange={(e) => setGenre(e.target.value)} />
                                    <label className="form-check-label">Female </label>
                                </div>
                            </div>
                            <div className='col-5'>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="check1" name="role" value="Seller" onChange={(e) => setRole(e.target.value)} />
                                    <label className="form-check-label">Seller </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="check1" name="role" value="Admin" onChange={(e) => setRole(e.target.value)} />
                                    <label className="form-check-label"> Admin</label>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div>
                            <input type='text' id="input" placeholder='seller name' onChange={(e) => setname(e.target.value)} className='form form-control' />
                        </div>
                        <hr></hr>
                        <div>
                            <input type="email" id="input" placeholder='example@gmai' onChange={(e) => setemail(e.target.value)} className='form form-control' />
                        </div>
                        <hr></hr>
                        <div>
                            <input type='text' id="input" placeholder='Phone 8 character' onChange={(e) => setPhone(e.target.value)} className='form form-control' />
                        </div>
                        <hr></hr>
                        <div>
                            <input type='text' id="input" placeholder='Password' onChange={(e) => setPasswoed(e.target.value)} className='form form-control' />
                        </div>

                        <hr></hr>
                        <div className='d-grid'>
                            <button className='btn btn-warning btn-block ' onClick={addUser}>add <FaPlus /></button>
                        </div>

                        <hr></hr>
                    </div>
                    <div className='col-sm-9'>
                        <div>
                            <hr></hr>
                            <h3 className='text-primary'>{nbrUsers} Pharmacist</h3>
                            <hr></hr>
                            <div className='row bgcheckbox'>
                                <div className='col-3'>
                                    <div className='text-dark'>
                                        <input type='radio' value='desc' name='ordername' className='form-check-input' onChange={(e) => { setOrderName(e.target.value); setorderRole(null); setorderSexe(null) }} />
                                        <label >Order By Name</label>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className='text-dark'>
                                        <input type='radio' value='desc' name='ordername' className='form-check-input' onChange={(e) => { setorderRole(e.target.value); setOrderName(null); setorderSexe(null) }} />
                                        <label >Order By function</label>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className='text-dark'>
                                        <input type='radio' value='desc' name='ordername' className='form-check-input' onChange={(e) => { setorderSexe(e.target.value); setOrderName(null); setorderRole(null) }} />
                                        <label >Order By genre</label>
                                    </div>
                                </div>
                            </div>
                            {/* <a href='/search/user' className='btn btn-primary'>Search for User <FaSearch /></a> */}
                            <table className='table table-bordered table-striped table-hover text-white my-1'>
                                <thead id='header'>
                                    <tr>
                                        <th>ID</th>
                                        <th>function</th>
                                        <th>photo</th>
                                        <th>name</th>
                                        {/* <th>email</th> */}
                                        <th>Phone</th>
                                        <th colSpan={4}>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.map((e, index) => <tr key={index}>
                                        <td>{e.id}</td>
                                        <td>{e.role}</td>
                                        <td>
                                            {e.genre === 'F' ?
                                                <img src={pic1} alt='user' style={{ height: '80px', width: '80px' }} className='card-img' />
                                                :
                                                <img src={pic2} alt='user' style={{ height: '80px', width: '80px' }} className='card-img' />
                                            }
                                        </td>
                                        <td>{e.name}</td>
                                        {/* <td>{e.email}</td> */}
                                        <td>+212 06{e.phone}</td>
                                        <td>
                                            <Link to={"/users/showUser/" + e.id}>
                                                <button className='btn btn-primary  '> <FaEye /></button>
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={"/users/updateUser/" + e.id}>
                                                <button className='btn btn-success  '> <FaEdit /></button>
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={"/users/userCirtificate/" + e.id}>
                                                <button className='btn btn-secondary  '> <FaFile /></button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => remove(e.id)}  > <FaTrash /></button>
                                        </td>
                                    </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
