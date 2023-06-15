
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import '../../TableStyle.css'
import moment from 'moment';
import axios from 'axios';
import { FaAd, FaChartPie, FaEdit, FaEye, FaList, FaPencilAlt, FaPlus, FaPrint, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Footer from './Footer';
export default function Categorys(props) {
    //hooks
    const [category, setcategory] = useState([])
    const [Category, setCategory] = useState({ categoryName: '' })
    const [loading, setLoading] = useState(true)
    // custom pagination hooks
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 7;
    const lastIndext = currentPage * recordsPerPage;
    const firstIndex = lastIndext - recordsPerPage;
    const records = category.slice(firstIndex, lastIndext);
    const npage = Math.ceil(category.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    //category length 
    const ctg = category.length
    //get gategorys
    async function getCategorys() {
        const url = 'http://localhost:8000/api/categorys';
        const res = await axios.get(url);
        setcategory(res.data.reverse())
    }
    //useEffect Hook
    useEffect(() => {
        getCategorys();
    }, []);
    //delete a category
    async function remove(id) {
        const url = `http://localhost:8000/api/delete/category/${id}`;
        await axios.delete(url)
            .then(res => {
                Swal.fire({
                    title: 'Deleted!',
                    position: 'top-end',
                    icon: 'success',
                    title: `category ${id} has been deleted `,
                    showConfirmButton: false,
                    timer: 1800
                })
            })
            .catch(err => {
                alert(`category ${id} not deleted !!!`);
            })
        getCategorys();
    };
    //add category
    async function addCategory() {
        const url = 'http://localhost:8000/api/add/category';
        await axios.post(url, Category)
            .then((res) => {
                Swal.fire({

                    position: 'top-end',
                    icon: 'success',
                    title: `category ${Category.categoryName} has been created `,
                    showConfirmButton: false,
                    timer: 1800
                })
                setCategory({categoryName:''})
            }).catch(() => {
                alert(`change category name `);
            })
        getCategorys();
    };
    //onchange field
    function changeCategory(e) {
        setCategory({  categoryName: e.target.value })
    }
    const goto = useNavigate();
    const Return = async (e) => {
        goto('/products/chart')
    }
    return (
        <div>
            <NavBar />
            <div className=" container-fluid    vh-100 ">
                <div className='row vh-100'>
                    <div className='col  bg-- '>
                        <h2 className='my-3 '>Add Category</h2>
                        <hr></hr>
                        <div>
                            <input type='text' id='input' placeholder=' categoryName' onChange={changeCategory} className='form form-control' />
                        </div>
                        <hr></hr>
                        <div className='d-grid'>
                            <button className='btn btn-warning btn-block' onClick={addCategory} >add category <FaPlus /> </button>
                        </div>
                        <hr></hr>
                        <div className="alert alert-success alert-dismissible">
                            <h3 className='text-success'>
                            <button className='btn btninfo' onClick={Return}> <FaChartPie /> Product Rapport </button>
                            </h3>
                        </div>
                    </div>
                    <div className='col-9'>
                        {(!category) ?
                            <button className="btn btn-warning">
                                <span className="spinner-border spinner-border-sm"></span>
                                Loading....
                            </button>
                            : <div>
                                {/* <h1>List of categorys</h1> */}
                                <hr></hr>
                                <h3 className='text-primary'>{ctg} categorys </h3>
                                <table className='table table-bordered table-striped table-hover text-white'>
                                    <thead id='header'>
                                        <tr >
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Creat at</th>
                                            <th colSpan={3}>Operation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {records.map((e, index) => <tr key={index}>
                                            <td>{e.id}</td>
                                            <td>{e.categoryName}</td>
                                            <td>{e.created_at}</td>
                                            <td>
                                                <Link to={"/categorys/showCategory/" + e.id}>
                                                    <button className='btn btn-primary  '> <FaEye /></button>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={"updateCategory/" + e.id}>
                                                    <button className='btn btn-success  '> <FaEdit /></button>
                                                </Link>
                                            </td>
                                            <td>
                                                <button className='btn btn-danger ' onClick={() => remove(e.id)}> <FaTrash /></button>
                                            </td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        }

                    </div>
                    <div className='col-3  bg-'></div>
                    <div className='col-9 '>
                        <ul className="pagination justify-content-center my-1">
                            <li className="page-item"><a className="page-link" onClick={prePage}>Previous</a></li>
                            {numbers.map((n, index) => (
                                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={index} >
                                    <a className='page-link' onClick={() => changeCurrentPage(n)}>{n}</a>
                                </li>
                            ))}
                            <li className="page-item"><a className="page-link" onClick={nextPage}>Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }
    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    function changeCurrentPage(id) {
        setCurrentPage(id)
    }
}


