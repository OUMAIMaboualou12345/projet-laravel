import React, { useEffect, useState } from 'react'
import '../../TableStyle.css'
// import '../../style'
import NavBar from './NavBar'
import moment from 'moment'
import axios from 'axios'
import { FaEdit, FaEye, FaList, FaRegArrowAltCircleLeft, FaTrash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import NavBarUser from './NavBarUser'

export default function ExpProUser(props) {
  const [expDate, setExpProduct] = useState([])
  const goto = useNavigate();
  const currentDate = new Date().toISOString().slice(0, 10);
  const filterExProduct = props.product.filter(item => item.expDate < currentDate)
  console.warn(filterExProduct);

  //delete a product
  async function remove(id) {
    const url = `http://localhost:8000/api/delete/product/${id}`;
    await axios.delete(url)
      .then(res => {
        Swal.fire({
          title: 'Deleted!',
          position: 'top-end',
          icon: 'success',
          title: `product has been deleted `,
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(err => {
        alert(`not removed`);
      })
    props.getProducts();
  };
  const nmbExpro = filterExProduct.length;
  const Return = async (e) => {
    goto('/users/product')
  }
  return (
    <div>
      <NavBarUser nmbExpro={nmbExpro} />
      <div className=" container-fluid my-3   vh-100">
        {/* <h1>List of expired products </h1> */}
        <hr></hr>
        <button className='btn btn-primary btnlistpro' onClick={Return}> product list <FaList /></button>

        <hr className='text-dark'></hr>
        <h3 className='text-primary'>{nmbExpro} expired product</h3>
        <table className='table table-bordered table-striped table-hover text-white'>
          <thead id='header'>
            <tr>
              <th>ID</th>
              <th>Product name</th>
              <th>category</th>
              <th>Expired Date</th>
              <th colSpan={2}>operation</th>
            </tr>
          </thead>
          <tbody >
            {filterExProduct.map((e, index) => <tr key={index}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.category_id}</td>
              <td>{moment(e.expDate).format('DD-MM-YYYY h:m:s')}</td>

              {/* <td>
                <button className='btn btn-primary  '>Show <FaEye /></button>
              </td> */}
              <td>
                <button className='btn btn-danger' onClick={() => remove(e.id)}   >delete <FaTrash /></button>
              </td>

            </tr>)}
          </tbody>
        </table>
      </div>

    </div>
  )
}
