import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar';
import Swal from 'sweetalert2'
import { FaArrowAltCircleRight, FaCircle, FaCircleNotch, FaPencilAlt, FaPencilRuler, FaRegArrowAltCircleLeft } from 'react-icons/fa';
import Footer from './Footer';
export default function UpdateCategory() {
    const [categoryName, setNom] = useState()
    const [Name, setNewName] = useState(" ")
    console.warn(Name);
    const goto = useNavigate();
    //get category by id 
    const getCategoryById = async (id) => {
        await axios.get(`http://127.0.0.1:8000/api/category/` + param.id)
            .then((res) => {
                setNom(res.data[0].categoryName)
                console.warn(categoryName);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getCategoryById(param.id)
    }, [])
    const param = useParams()
    const Return = async (e) => {
        goto('/categorys')
    }
    //update this category
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.put(`http://127.0.0.1:8000/api/category/` + param.id, { categoryName })
            .then(() => {
                Swal.fire({
                    
                    position: 'top-end',
                    icon: 'success',
                    title: `category ${categoryName} has been Updated `,
                    showConfirmButton: false,
                    timer: 1800
                  })
            })
            .catch(() => {
                console.log(`category is not updating ...`);
            })
        goto('/categorys')
    }


    return (
        <div>
            <NavBar />
            <form onSubmit={handleSubmit}>
                <div className=" container    vh-100 " >
                    <div className='row vh-100'>
                        <div className='col-3'></div>
                        <div className='col-6  bg-- '>
                            <h2 className='my-5 '>update Category: {param.id}</h2>
                            <button className='btn btn-outline-dark' onClick={Return}><FaRegArrowAltCircleLeft/> </button>
                            <hr></hr>
                            <div>
                                <input type='text' id='input' value={categoryName} className='form form-control ' onChange={(e) => setNom(e.target.value)} placeholder='category name' />
                            </div>
                            
                            <hr></hr>
                            <button type='submit' className='btn btn-warning btn-block'  >update category <FaPencilAlt /> </button>
                            <hr></hr>
                            <hr></hr>
                            <table className='table table-bordered table-striped table-hover text-white'>
                                <thead id='header'>
                                    <tr >
                                        <th>ID</th>
                                        <th>Changing Name <FaCircleNotch /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{param.id}</td>
                                        <td>{categoryName} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </form>
            <Footer/>
        </div>

    )
}

