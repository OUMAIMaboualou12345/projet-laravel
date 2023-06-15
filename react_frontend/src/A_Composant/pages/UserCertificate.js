import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar';
import { FaPencilAlt, FaPrint, FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import moment from 'moment';
import pic2 from '../../assets/images/avatar1.png'
import pic1 from '../../assets/images/logo2.jpeg'
import Footer from './Footer';

export default function UserCertificate() {
    const [data, setdata] = useState([])
    const currentDate = new Date().toISOString().slice(0, 10);
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
            <div className=" container   list  " >
                <div className='row '>
                    <div className='col-sm-2 bg-- '></div>
                    <div className='col-sm-8  bg-- '>
                        {data.map((e, index) =>
                            <h2 className='my-3 text-dark' key={index}>work certificate for pharmacist  : <span className='text-info'>{e.name}</span></h2>
                        )}
                        <hr></hr>
                        {data.map((e, index) =>
                            <div className='card mb-3' style={{ width: '50rem', height: '50rem' }} key={index}>
                                <img src={pic1} alt='user' style={{ height: '200px', width: '200px', marginLeft: '36%' }} className='card-img justfy-content-center ' />
                                <h3 className='text-info' style={{ marginLeft: '36%' }}>Work ceteficate</h3>
                                <div className='card-body'>
                                    <pre className='h5 text-secondary'>
                                        SYBA Pharmacy<br></br>
                                        Marrakesh Mhamid Nakhil 191<br></br>
                                        0580020015<br></br>
                                        Ennakjil-Pharm@gmail.com<br></br>
                                        {currentDate}
                                    </pre>
                                    <pre className='h4 text-secondary'>
                                        This is to certify that <span className='text-info'>{e.name}</span> has been employed<br />
                                        with Nakkhli pharmacy as a <span className='text-info'>{e.role}</span> from <span className='text-info'>{e.created_at}</span>  <br />
                                        to <span className='text-info'>{currentDate}</span>/present. During their tenure with<br />
                                        our organization, <span className='text-info'>{e.name}</span> has demonstrated <br />
                                        exceptional professionalism, dedication, and competence.<br />
                                    </pre>
                                    <pre className='h5 text-secondary'>
                                        Sincerely,<br />
                                        [Elhassan ait elhaj]<br />
                                        [Pharmacy Owner]<br />
                                        [Ennakhil Pharmacy]
                                    </pre>
                                    <hr></hr>
                                    <button className='btn btn-warning' onClick={Return} style={{ height: '40px', width: '70px' }}> <FaPrint /> </button>
                                    <button className='btn btn-success' onClick={Return} style={{ height: '40px', width: '70px', marginLeft: '80%' }}> <FaRegArrowAltCircleRight /> </button>
                                </div>
                            </div>

                        )}

                    </div>
                    <div className='col-2 bg-- '></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
// {user.map((e, index) => (
//     <div className='col-sm-3' key={index}>
//         <div className='card mb-3' style={{ width: '15rem' }}>
//             <h5>
//                 <Link to='' onClick={() => remove(e.id)} style={{ textDecoration: 'none', marginLeft: '12px' }} >
//                     <span className='text-danger'> <FaTrash/></span>
//                 </Link>
//             </h5>
//             {e.genre === 'F' ?
//                 <img src={pic1} alt='user' style={{ height: '100px', width: '14.5rem' }} className='card-img-top hover-Shadow' />
//                 :
//                 <img src={pic2} alt='user' style={{ height: '100px', width: '14.5rem' }} className='card-img-top hover-Shadow' />
//             }
//             <div className='card-body'>
//                 <h6>{e.name}</h6>
//                 <span>{e.role}</span>
//             </div>
//         </div>
//     </div>
// ))}

