import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar';
import { FaPencilAlt, FaRegArrowAltCircleLeft } from 'react-icons/fa';
import moment from 'moment';
export default function ShowCategory() {
    const [data, setdata] = useState([])
    
    //get category by id 
    const getCategoryById = async (id) => {
        await axios.get(`http://127.0.0.1:8000/api/category/` + param.id)
            .then((res) => {
                setdata(res.data)
                console.warn("daaaataaaa: " + data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getCategoryById(param.id)
    }, [])
    const param = useParams()
    
    const goto = useNavigate();
    const Return = async (e) => {
        goto('/categorys')
    }


    return (
        <div>
            <NavBar />
            <div className=" container   vh-100 " >
                <div className='row vh-100'>
                    <div className='col-3'></div>
                    <div className='col-6  bg-- '>
                        <h2 className='my-5 text-warning'>Show Category Number : {param.id}</h2>
                        <hr></hr>
                        <div className="card" >
                            {data.map((e, index) => <div key={index} className="card-body">
                            <button className='btn btn-outlin-info' onClick={Return}> <FaRegArrowAltCircleLeft /> </button>

                                <table className='table table-bordered'>
                                    
                                    <tr>
                                        <th className='text-success'>Category Name</th>
                                        <th>{e.categoryName}</th>
                                    </tr>
                                    <tr>
                                        <th className='text-success'>Create at</th>
                                        <th >{e.created_at}</th>
                                    </tr>
                                   
                                </table>
                            </div>)}
                        </div>
                    </div>
                </div>
            
            </div>
        </div>

    )
}

