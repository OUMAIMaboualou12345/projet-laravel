import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar';
import { FaPencilAlt, FaRegArrowAltCircleLeft } from 'react-icons/fa';
import moment from 'moment';
import pic2 from '../../assets/images/avatar1.png'
import pic1 from '../../assets/images/avatar4.png'

export default function ShowUser() {
    const [data, setdata] = useState([])
    //get category by id 
    const getUserById = async (id) => {
        await axios.get(`http://127.0.0.1:8000/api/user/` + param.id)
            .then((res) => {
                setdata(res.data)
                console.warn("daaaataaaa: " + data);
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
    const goto = useNavigate();
    const Return = async (e) => {
        goto('/users')
    }


    return (
        <div>
            <NavBar />
            <div className=" container-fluid     " >
                <div className='row '>
                    <div className='col-3 bg-- '></div>
                    <div className='col-9  bg-- '>
                        <h2 className='my-3 text-primary '>show pharmacist identif by : {param.id}</h2>

                        {data.map((e, index) =>
                            <div className="card" style={{ width: '600px' }} key={index}>
                                 <button className='btn btn-outlin-info' onClick={Return}> <FaRegArrowAltCircleLeft /> </button>
                                {e.genre === 'F' ?
                                    <img src={pic1} alt='user' style={{ height: '280px', width: '598px' }} />
                                    :
                                    <img src={pic2} alt='user' style={{ height: '280px', width: '598px' }} />
                                }
                                {/* <img className="card-img-top " src={pic2} alt="user" style={{ height: '300px',width:'597px' }} /> */}
                                <div className="card-body">
                                    <table className='table table-bordered'>
                                        
                                        <tr>
                                            <th className='text-success'>pharmacist id</th>
                                            <th>{e.id}</th>
                                        </tr>
                                        <tr>
                                            <th className='text-success'>Name</th>
                                            <th >{e.name}</th>
                                        </tr>
                                        <tr>
                                            <th className='text-success'>email</th>
                                            <th >{e.email}</th>
                                        </tr>
                                        <tr>
                                            <th className='text-success'>role</th>
                                            <th >{e.role}</th>
                                        </tr>
                                        <tr>
                                            <th className='text-success'>genre</th>
                                            <th >{e.genre}</th>
                                        </tr>
                                        <tr>
                                            <th className='text-success'>phone</th>
                                            <th >{e.phone}</th>
                                        </tr>
                                    </table>
                                   
                                </div>
                            </div>
                        )}
                    </div>
                   
                </div>
                <div className='col bg-- '></div>
            </div>
            <footer className="sticky-footer bg-light">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span className='text-primary'>Copyright &copy; pahrmacy Ennakhil 2023</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

