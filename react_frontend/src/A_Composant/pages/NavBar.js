import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate , useLocation} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style.css'
import {  FaHome,  FaSearch } from "react-icons/fa";
import { MdNotificationAdd } from "react-icons/md";
import { TbCategory } from 'react-icons/tb'
import pic1 from '../../assets/images/logo2.jpeg'

function NavBar() {
  const [activehome, setactivehome] = useState(false);
  const [activeProduct, setactiveProduct] = useState(false);
  const [activeCategory, setactiveCategory] = useState(false);
  const [activePharmacist, setactivePharmacist] = useState(false);
  const [activeExProduct, setactiveExProduct] = useState(false);
  const location = useLocation();
  window.onscroll = () => {
    setactivePharmacist(false);
    setactiveCategory(false);
    setactiveProduct(false);
    setactivehome(false);
    setactiveExProduct(false);
  };
  const activBtnhome = () => {
    setactivehome(!activehome);
    setactiveProduct(false);
    setactiveCategory(false);
    setactivePharmacist(false);
    setactiveExProduct(false);
  };
  const activBtnProduct = () => {
    setactiveProduct(!activeProduct);
    setactiveCategory(false);
    setactivePharmacist(false);
    setactivehome(false);
    setactiveExProduct(false);
  };
  const activBtnCategory = () => {
    setactiveCategory(!activeCategory);
    setactiveProduct(false);
    setactivePharmacist(false);
    setactivehome(false);
    setactiveExProduct(false);
  };
  const activBtnPharmacist = () => {
    setactivePharmacist(!activePharmacist);
    setactiveProduct(false);
    setactiveCategory(false);
    setactivehome(false);
    setactiveExProduct(false);
  };
  const activBtnExpro = () => {
    setactiveExProduct(!activeExProduct);
    setactivePharmacist(false);
    setactiveProduct(false);
    setactiveCategory(false);
    setactivehome(false);
  };



  const goto = useNavigate();
  const us = localStorage.getItem('users');
  function logout() {
    localStorage.removeItem('users')
    goto('/login')
  }
  function searchPro (){
    goto('/search/products')
  }
  function searchCatego(){
    goto('/search/categorys')
  }
  return (
    // <div >
    //   <nav className="navbar navbar-expand-sm navbar-dark bg-white container">
    //   <img src={pic1} alt='user' style={{ height: '50px', width: '50px', }} className='card-img  ' />
    //     <h1 className="navbar-brand" >Pharmacy Ennakhil Management</h1>
    //     <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
    //       aria-expanded="false" aria-label="Toggle navigation"></button>
    //     <div className="collapse navbar-collapse" id="collapsibleNavId">
    //       <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    //         <li className="nav-item active">
    //           <a className="nav-link" href="/admin/home"> Home <FaHome/></a>
    //         </li>
    //         <li className="nav-item ">
    //           <a className="nav-link " href="/products">Products </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link " href="/categorys">Categorys </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link " href="/users">Acounts </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link " href="/exp-product">ExpProducts </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link text-danger logout"  onClick={logout}>log out <FaArrowAltCircleRight/> </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>

    // </div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-12'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: '#1e963c' }}>
            <h5 className="navbar namelogo " href="#"> SYBA Pharmacy</h5>
            <img src={pic1} alt='user' style={{ height: '50px', width: '50px', }} className='card-img navbar-brand ' />

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className={`nav-item ${location.pathname==='/admin/home' ? 'active ' : ''}`} onClick={activBtnhome}>
                  <a className={`nav-link ${location.pathname==='/admin/home' ? 'active ' : ''}`} href="/admin/home" > <FaHome /> </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${location.pathname==='/products' ? 'active ' : ''}`} href="/products">Products</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${location.pathname==='/exp-product' ? 'active ' : ''}`} href="/exp-product">ExpProducts </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${location.pathname==='/categorys' ? 'active ' : ''}`} href="/categorys" >Categorys</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${location.pathname==='/users' ? 'active ' : ''}`} href="/users" >Pharmacist</a>
                </li>
                
                
                <button className={`nav-link btn btn-outline-info my-2 my-sm-0 btnsherch text-dark ${location.pathname==='/search/products' ? 'active ' : ''}`} type="submit" onClick={searchPro}>find Product <FaSearch/> </button>
                <button className={`nav-link btn btn-outline-warning my-2 my-sm-0 btnsherch text-dark ${location.pathname==='/search/categorys' ? 'active ' : ''}`} type="submit" onClick={searchCatego}>find Category <FaSearch/>  </button>
                <li className="nav-item">
                  <a className="nav-link text-warning"  ><MdNotificationAdd/></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-danger logout"  onClick={logout}>Logout</a>
                </li>
                
              </ul>

            </div>
          </nav>
          
        </div>
      </div>
    </div>

  )
}
export default NavBar;
