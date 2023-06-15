import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import LoginPage from './A_Composant/pages/LoginPage'
import HomeAdmin from './A_Composant/pages/HomeAdmin'
import HomeUser from './A_Composant/pages/HomeUser'
import Welcome from './A_Composant/pages/Welcome'
import Products from './A_Composant/pages/Products';
import './App.css'
import Categorys from './A_Composant/pages/Categorys';
import Users from './A_Composant/pages/Users';
import ExpProduct from './A_Composant/pages/ExpProducts';
import UpdateCategory from './A_Composant/pages/UpdateCategory';
import ShowCategory from './A_Composant/pages/ShowCategory';
import ShowProduct from './A_Composant/pages/ShowProduct';
import UpdateProduct from './A_Composant/pages/UpdateProduct';
import ShowUser from './A_Composant/pages/ShowUser';
import UpdateUser from './A_Composant/pages/UpdateUser';
import UserCertificate from './A_Composant/pages/UserCertificate';
import ProductChart from './A_Composant/pages/ProductChart';
import SearchProduct from './A_Composant/pages/SearchProduct';
import SearchCategory from './A_Composant/pages/SearchCategory';
import UserReqCertificate from './A_Composant/pages/UserReqCertificate';
import ProductUser from './A_Composant/pages/Productuser';
import UserSearchPro from './A_Composant/pages/UserSearchPro';
import ExpProUser from './A_Composant/pages/ExpProUser';
import ShowProUser from './A_Composant/pages/ShowProUser';
import UpdatProUser from './A_Composant/pages/UpdatProUser';
import ProductChartUser from './A_Composant/pages/ProductChartUser';

export default function App() {
  const [category, setcategory] = useState([])
  const [product, setProduct] = useState([])
  //GET date for sending in props
  useEffect(() => {
    axios.get('http://localhost:8000/api/categorys')
      .then((res) =>
        setcategory(res.data)
      )
  }, [])
  async function getProducts() {
    const url = 'http://localhost:8000/api/products';
    const res = await axios.get(url);
    setProduct(res.data)
  }
  useEffect(() => {
    getProducts();
  }, []);

  const currentDate = new Date().toISOString().slice(0, 10);
  const filterExProduct = product.filter(item => item.expDate < currentDate)
  const nbrEx=filterExProduct.length
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/admin/home' element={<HomeAdmin  nbrEx={nbrEx}/>} />
        <Route path='/user/home' element={<HomeUser  nbrEx={nbrEx}/>} />
        <Route path='/products' element={<Products catego={category} />} />
        <Route path='/categorys' element={<Categorys />} />
        
        <Route path='/categorys/updateCategory/:id' element={<UpdateCategory />} />
        <Route path='/users/updateUser/:id' element={<UpdateUser />} />
        <Route path='/products/updateProduct/:id' element={<UpdateProduct category={category} />} />
        <Route path='/categorys/showCategory/:id' element={<ShowCategory />} />
        <Route path='/users/showUser/:id' element={<ShowUser />} />
        <Route path='/users/userCirtificate/:id' element={<UserCertificate />} />
        <Route path='/products/showProduct/:id' element={<ShowProduct />} />
        <Route path='/users' element={<Users />} />
        <Route path='/search/products' element={<SearchProduct catego={category}/>} />
        <Route path='/search/categorys' element={<SearchCategory/> } />
        <Route path='/exp-product' element={<ExpProduct product={product} getProducts={getProducts}  nbrEx={nbrEx} />} />
        {/* user worspace */}
        <Route path='/users/certificate' element={<UserReqCertificate />} />
        <Route path='/users/product' element={<ProductUser catego={category} />} />
        <Route path='/user/search/products' element={<UserSearchPro catego={category}/>} />
        <Route path='/user/exp-product' element={<ExpProUser product={product} getProducts={getProducts}  nbrEx={nbrEx}/>} />
        <Route path='/user/products/updateProduct/:id' element={<UpdatProUser category={category} />} />
        <Route path='/user/products/showProduct/:id' element={<ShowProUser />} />
        {/* chart */}
        <Route path='/products/chart' element={<ProductChart />} />
        <Route path='/products/chart/user' element={<ProductChartUser />} />
      </Routes>
    </div>
  )
}



