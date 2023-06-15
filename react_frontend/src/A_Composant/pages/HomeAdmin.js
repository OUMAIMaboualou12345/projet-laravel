import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style.css'
import { FaUser, FaHome, FaArrowAltCircleRight, FaCalendarDay, FaAngleRight } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { MdLocalGroceryStore, MdEuro } from "react-icons/md";
import NavBar from './NavBar'
import BackgroundImage from '../../assets/images/bg6.jpeg'

function HomeAdmin(props) {

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
  const nbrUsers = user.length;
  const nbrExpPro = expPro.length;
  return (
    <div >
      <NavBar/>
      <div className='container-fluid ' style={HeaderStyle}>
        <div className='row '>
          <div className='col-2 '>
          </div>
          <div className='col-8 my-4'>
            <div className='cart p-3 bg- shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>{nbrProd}</h3>
                <p className='fs-5'>Product</p>
              </div>
              <i className="icon"><MdLocalGroceryStore /></i>
              <a className="btn btn-success" href="/products"> show products info <FaAngleRight /></a>
            </div>
          </div>
          <div className='col-2'>
          </div>
          <div className='col-2'></div>
          <div className='col-8 my-2'>
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
          <div className='col-8 my-2'>
            <div className='cart p-3 bg- shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>{countCategorys}</h3>
                <p className='fs-5'>Category</p>
              </div>
              <i className="icon"><TbCategory /></i>
              <a className="btn btn-success" href="/categorys"> show categorys info <FaAngleRight /></a>
            </div>
          </div>
          <div className='col-2'></div>
          <div className='col-2'></div>
          <div className='col-8 my-2'>
            <div className='cart p-3 bg- shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>{nbrUsers}</h3>
                <p className='fs-5'>Pharmacist</p>
              </div>
              <i className="icon"><FaUser /></i>
              <a className="btn btn-success" href="/users"> show pharmacists info <FaAngleRight /></a>
            </div>
          </div>
        </div>
        <hr></hr>
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
export default HomeAdmin;
