import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar';
import { FaArrowAltCircleRight, FaCircle, FaCircleNotch, FaPencilAlt, FaPencilRuler, FaRegArrowAltCircleLeft } from 'react-icons/fa';
import Swal from 'sweetalert2'
import NavBarUser from './NavBarUser';
import Footer from './Footer';
export default function UpdatProUser(props) {
    const [name, setName] = useState()
    const [price, setPrix] = useState()
    const [stock, setStock] = useState('')
    const [category_id, setCategory_id] = useState()
    console.warn(name, price, category_id);
    const goto = useNavigate();
    //get category by id 
    const getProductById = async (id) => {
        await axios.get(`http://127.0.0.1:8000/api/product/` + param.id)
            .then((res) => {
                setName(res.data[0].name)
                setPrix(res.data[0].price)
                setStock(res.data[0].stock)
                setCategory_id(res.data[0].category_id)
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.put(`http://127.0.0.1:8000/api/product/` + param.id, { name, price,stock, category_id })
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `product ${name} has been updated `,
                    showConfirmButton: false,
                    timer: 1800
                  })

            })
            .catch(() => {
                console.log(`category is not updating ...`);
            })
        goto('/users/product')
    }
    const Return = async (e) => {
        goto('/users/product')
    }
    return (
        <div>
            <NavBarUser />
            <form onSubmit={handleSubmit}>
                <div className=" container    vh-100 " >
                    <div className='row vh-100'>
                        <div className='col-3'></div>
                        <div className='col-6  bg-- '>
                            <h2 className='my-5 '>update Product number : {param.id}</h2>
                            <button className='btn btn-outline-dark' onClick={Return}><FaRegArrowAltCircleLeft/> </button>
                            <hr></hr>
                            <div>
                                <input type='text' id='input' value={name} className='form form-control' onChange={(e) => setName(e.target.value)} placeholder='product name' />
                                <input type='number' id='input' value={price} className='form form-control my-2' onChange={(e) => setPrix(e.target.value)} placeholder=' price' />
                                <input type='number' id='input' value={stock} className='form form-control my-2' onChange={(e) => setStock(e.target.value)} placeholder=' stock' />
                                <select className="form-select" name="category_id" onChange={(e) => setCategory_id(e.target.value)}>
                                    <option>{category_id}</option>
                                    {props.category.map((e, index) => <option key={index}>
                                        {e.categoryName}
                                    </option>)}
                                </select>
                            </div>
                            <hr></hr>
                            <button type='submit' className='btn btn-warning btn-block'  >update product <FaPencilAlt /> </button>
                            <hr></hr>
                            <table className='table table-bordered table-striped table-hover text-white'>
                                <thead id='header'>
                                    <tr >
                                        <th>New name <FaCircleNotch /></th>
                                        <th>New price <FaCircleNotch /></th>
                                        <th>New category <FaCircleNotch /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{name}</td>
                                        <td>{price} </td>
                                        <td>{category_id} </td>
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

