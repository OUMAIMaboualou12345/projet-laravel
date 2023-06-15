import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar';
import { FaPencilAlt, FaRegArrowAltCircleLeft } from 'react-icons/fa';
import moment from 'moment';
import NavBarUser from './NavBarUser';
export default function ShowProUser() {
    const [data, setdata] = useState([])
    //get category by id 
    const getProductById = async (id) => {
        await axios.get(`http://127.0.0.1:8000/api/product/` + param.id)
            .then((res) => {
                setdata(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getProductById(param.id)
    }, [])
    const param = useParams()
    //update this category
    const goto = useNavigate();
    const Return = async (e) => {
        goto('/users/product')
    }


    return (
        <div>
            <NavBarUser/>
            <div className=" container-fluid vh-100 " >
                <div className='row vh-100'>
                    
                    <div className='col-12  bg-- '>
                        <h2 className='my-3 text-primary justify-content-center-pro'>show product number : {param.id}</h2>
                        <hr></hr>
                       

                        <div className="card" >
                            
                            {data.map((e, index) => <div key={index} className="card-body">
                                <table className='table table-bordered'>
                                 <button className='btn btn-outlin-info' onClick={Return}> <FaRegArrowAltCircleLeft /> </button>

                                    <tr>
                                        <th className='text-success'>Product Name</th>
                                        <th>{e.name}</th>
                                    </tr>
                                    <tr>
                                        <th className='text-success'>Product Price</th>
                                        <th >{e.price} DH</th>
                                    </tr>
                                    <tr>
                                        <th className='text-success'>Product stock</th>
                                        <th >{e.stock} product</th>
                                    </tr>
                                    <tr>
                                        <th className='text-success'>Expiry Date</th>
                                        <th>in {e.expDate}</th>
                                    </tr>
                                    <tr>
                                        <th className='text-success'>Belong to Category</th>
                                        <th >{e.category_id}</th>
                                    </tr>
                                    <tr>
                                        <th className='text-success'>Create at</th>
                                        <th>{moment(e.created_at).format('DD-MM-YY')}</th>
                                    </tr>
                                    <tr>
                                        <th className='text-success'>Update at</th>
                                        <th >{moment(e.update_at).format('DD-MM-YY')}</th>
                                    </tr>
                                </table>
                            </div>)}
                        </div>
                    </div>
                </div>
                
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

