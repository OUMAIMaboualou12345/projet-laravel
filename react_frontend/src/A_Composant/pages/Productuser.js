import React, { useEffect, useState } from 'react';
import BackgroundImage from '../../assets/images/bg6.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css'
// import '../../TableStyle.css'
import axios from 'axios';
import moment from 'moment'
import NavBar from './NavBar';
import { FaChartPie, FaEdit, FaEye, FaPencilAlt, FaPlus, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import NavBarUser from './NavBarUser';
import Footer from './Footer';
export default function ProductUser(props) {
    const [product, setProduct] = useState([])
    const [message, setMessage] = useState('')
    const [name, setname] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [category_id, setCategory] = useState('')
    const [expDate, setExpDate] = useState('')
    const [orderName, setOrderName] = useState(null)
    const [orderprice, setorderprice] = useState(null)
    const [orderStock, setOrderStock] = useState(null)
    const [orderExpDate, setOrderExpDate] = useState(null)
    // custom pagination hooks
    const goto = useNavigate();
    const Return = async (e) => {
        goto('/products/chart/user')
    }
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 7;
    const lastIndext = currentPage * recordsPerPage;
    const firstIndex = lastIndext - recordsPerPage;
    const records = product.slice(firstIndex, lastIndext);
    const npage = Math.ceil(product.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    function changeName(e) {
        setname(e.target.value)
    }
    function changePrice(e) {
        setPrice(e.target.value)
    }
    function changecategory(e) {
        setCategory(e.target.value)
    }
    function changeExpDate(e) {
        setExpDate(e.target.value)
    }
    function changeStock(e) {
        setStock(e.target.value)
    }

    //get products
    async function getProducts() {
        try {
            if (orderName) {
                const url = 'http://127.0.0.1:8000/api/prod/name/order';
                const res = await axios.get(url);
                setProduct(res.data)

            }else if (orderprice) {
                const url = 'http://127.0.0.1:8000/api/prod/price/order';
                const res = await axios.get(url);
                setProduct(res.data)
            }
            else if (orderStock) {
                const url = 'http://127.0.0.1:8000/api/prod/stock/order';
                const res = await axios.get(url);
                setProduct(res.data)
            }else if (orderExpDate) {
                const url = 'http://127.0.0.1:8000/api/prod/expdate/order';
                const res = await axios.get(url);
                setProduct(res.data)
            }
            else {
                const url = 'http://localhost:8000/api/products';
                const res = await axios.get(url);
                setProduct(res.data)
            }
        } catch (err) {
            console.log(err);
        }
    }
    const nbrProd = product.length
    useEffect(() => {
        getProducts();
    }, [orderName, orderprice, orderExpDate,orderStock]);
    //delete a product
    async function remove(id) {
        const url = `http://localhost:8000/api/delete/product/${id}`;
        await axios.delete(url)
            .then(res => {
                Swal.fire({
                    title: 'Deleted!',
                    position: 'top-end',
                    icon: 'success',
                    title: `product ${id} has been deleted `,
                    showConfirmButton: false,
                    timer: 1800
                })
            })
            .catch(err => {
                alert(`not removed`);
            })
        getProducts();
    };
    //add a product
    async function addproduct() {
        const url = 'http://localhost:8000/api/products';
        await axios.post(url, { name, price, stock, category_id, expDate })
            .then(() => {
                Swal.fire({
                    title: 'Deleted!',
                    position: 'top-end',
                    icon: 'success',
                    title: `product ${name} has been created `,
                    showConfirmButton: false,
                    timer: 1800
                })
            }).catch(() => {
                alert(`all fields is require * ....!`);
            })
        getProducts();
    };
    // const goto= useNavigate();
  return (
    <div>
        <NavBarUser/>
        <div className=" container-fluid    vh-100" >
                <div className='row vh-100'>
                    <div className='col-3  bg--'>
                        <h2 className='my-3 '>Add product</h2>
                        <hr></hr>
                        <div>
                            <input type='text' name="name" id='input' placeholder='name' onChange={changeName} className='form form-control' />
                        </div>
                        <hr></hr>
                        <div>
                            <input type='number' name="price" id='input' placeholder='Price' onChange={changePrice} className='form form-control' />
                        </div>
                        <hr></hr>
                        <div>
                            <input type='number' name="stock" id='input' placeholder='stock' onChange={changeStock} className='form form-control' />
                        </div>
                        <hr></hr>
                        <div>
                            <input type='date' name="expDate" id='input' placeholder='expDate' onChange={changeExpDate} className='form form-control' />
                        </div>
                        <hr></hr>
                        <div>
                            <select className="form-select" name="category_id" onChange={changecategory}>
                                <option>-category-</option>
                                {props.catego.map((e, index) => <option key={index}>
                                    {e.categoryName}
                                </option>)}
                            </select>
                        </div>
                        <hr></hr>
                        <div className='d-grid'>
                            <button className='btn btn-warning btn-block ' onClick={addproduct}>add product <FaPlus /></button>
                        </div>
                        <hr></hr>
                        <div className="alert alert-success alert-dismissible">
                            <h3 className='text-success'>
                            <button className='btn btninfo' onClick={Return}> <FaChartPie /> Product Chart </button>
                            </h3>
                        </div>
                    </div>
                    <div className='col-9 '>
                        {/* <h1>List of Products</h1> */}
                        <hr></hr>
                        <h3 className='text-primary'>{nbrProd} products</h3>
                        <hr></hr>
                        {/* orderBy */}
                        <div className='row ' style={{ marginLeft:'5px' }} >
                            <div className='col-3 bgcheckbox'>
                                <div>
                                    <input type='radio' value='desc' name='ordername' className='form-check-input' onChange={(e) => { setOrderName(e.target.value); setorderprice(null) ; setorderprice(null); setOrderStock(null) }} />
                                    <label >Order By Name</label>
                                </div>
                            </div>
                            <div className='col-3 bgcheckbox'>
                                <div>
                                    <input type='radio' value='desc' name='ordername' className='form-check-input' onChange={(e) => { setorderprice(e.target.value); setOrderName(null); setOrderExpDate(null); setOrderStock(null) }} />
                                    <label >Order By price</label>
                                </div>
                            </div>
                            <div className='col-3 bgcheckbox'>
                                <div>
                                    <input type='radio' value='desc' name='ordername' className='form-check-input' onChange={(e) => { setOrderStock(e.target.value); setorderprice(null) ;setOrderName(null) ;setOrderExpDate(null) }} />
                                    <label >Order By Stock</label>
                                </div>
                            </div>
                            <div className='col-3 bgcheckbox'>
                                <div>
                                    <input type='radio' value='desc' name='ordername' className='form-check-input' onChange={(e) => { setOrderExpDate(e.target.value);setorderprice(null); setOrderStock(null); setorderprice(null)}} />
                                    <label >Order By expired Date</label>
                                </div>
                            </div>
                        </div>
                        
                        <table className='table table-bordered table-striped table-hover text-white'>
                            <thead id='header'>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>stock</th>
                                    <th>expDate</th>
                                    <th>category</th>
                                    <th>creat at</th>
                                    <th colSpan={3}>Operation</th>
                                </tr>
                            </thead>
                            <tbody >
                                {records.map((e, index) => <tr key={index}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.price}DH</td>
                                    <td>{e.stock}</td>
                                    <td>{e.expDate}</td>
                                    <td>{e.category_id}</td>
                                    <td>{moment(e.created_at).format('DD-MM-YYYY ')}</td>
                                    <td>
                                        <Link to={"/user/products/showProduct/" + e.id}>
                                            <button className='btn btn-primary  '> <FaEye /></button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={"/user/products/updateProduct/" + e.id}>
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
                    <div className='col-3  bg-'></div>
                    <div className='col-9 paginate'>
                        <ul className="pagination justify-content-center my-1">
                            <li className="page-item"><a className="page-link " onClick={prePage}>Prev</a></li>
                            {numbers.map((n, index) => (
                                <li className={`page-item ${currentPage === n ? 'active ' : ''}`} key={index} >
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

