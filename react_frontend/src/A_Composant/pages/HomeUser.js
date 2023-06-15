
// export default function HomeUser()
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style.css'
import { FaUser, FaHome, FaArrowAltCircleRight, FaCalendarDay, FaAngleRight, FaList, FaFile, FaRegQuestionCircle } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { MdLocalGroceryStore, MdEuro } from "react-icons/md";
import NavBarUser from './NavBarUser'
import BackgroundImage from '../../assets/images/bg6.jpeg'
import Swal from 'sweetalert2'

function HomeUser(props) {

  const [category, setcategory] = useState([])
  const [product, setProduct] = useState([])
  const [user, setUser] = useState([])
  const [expPro, setExpPro] = useState([])
  const goto = useNavigate();
  const us = localStorage.getItem('users');
  function logout() {
    localStorage.removeItem('users')
    goto('/login')
  }

  function ReqCetificate(){
    Swal.fire({
      title: 'Deleted!',
      position: 'top-end',
      icon: 'success',
      title: ` work certificate  has been requested `,
      showConfirmButton: false,
      timer: 1800
  })
  }
  //count categorys from api
  useEffect(() => {
    axios.get('http://localhost:8000/api/categorys')
      .then((res) =>
        setcategory(res.data)
      )
  }, [category])
  //count products from api
  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then((res) => {
        setProduct(res.data)
      })
  }, [product])
  //count users from api
  useEffect(() => {
    axios.get('http://localhost:8000/api/users')
      .then((res) => {
        setUser(res.data)
      })
  }, [user])
  //count expProducts from api
  useEffect(() => {
    axios.get('http://localhost:8000/api/expProduct')
      .then((res) => {
        setExpPro(res.data)
      })
  }, [expPro])
  // const count length
  const countCategorys = category.length
  const nbrProd = product.length
  const nbrEx = expPro.length;

  return (
    <div >
      <NavBarUser/>
      <div className='container-fluid ' style={HeaderStyle}>
        <div className='row '>
          <div className='col-2 '>
          </div>
          <div className='col-8 my-5'>
            <div className='cart p-3 bg- shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>{nbrProd}</h3>
                <p className='fs-5'>Product</p>
              </div>
              <i className="icon"><MdLocalGroceryStore /></i>
              <a className="btn btn-success" href="/users/product"> show products info <FaAngleRight /></a>
            </div>
          </div>
          <div className='col-2'>
          </div>

          <div className='col-2'></div>
          <div className='col-8 my-3'>
            <div className='cart p-3 bg- shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2 text-danger'>{props.nbrEx}</h3>
                <p className='fs-5 '>expProduct</p>
              </div>
              <i className="icon "> <FaCalendarDay /> </i>
              <a className="btn btn-success" href="/exp-product"> show expired products <FaAngleRight /></a>
            </div>
          </div>

          <div className='col-2'></div>
          <div className='col-2'></div>
          <div className='col-8 my-5'>
            <div className='cart p-3 bg- shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>work</h3>
                <p className='fs-5'>certeficate</p>
              </div>
              <i className="icon"><FaFile /></i>
              <button className='btn btn-warning btn-block ' onClick={ReqCetificate}>Request now  <FaRegQuestionCircle /></button>
            </div>
          </div>
        </div>
       
      </div>
      <footer className="sticky-footer bg-light" >
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; pahrmacy Ennakhil 2023</span>
                    </div>
                </div>
            </footer>
    </div>
  )
}
const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}
export default HomeUser;


