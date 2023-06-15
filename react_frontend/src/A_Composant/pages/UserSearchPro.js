import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import { FaSearch } from 'react-icons/fa';
import BackgroundImage from '../../assets/images/bg6.jpeg'
import NavBarUser from './NavBarUser';

export default function UserSearchPro() {
    const [name, setName] = useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchProduct();
    }, [name])
    const fetchProduct = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/product/search/${name}`)
            setData(res.data)

        } catch (err) {
            console.log(err);
        }

    }
    const lent = data.length;
    return (
        <div >
            <NavBarUser/>
            <div className='row my-5' >
                <div className='col-md-2'></div>
                <div className='col-md-8 card'>
                    <div className='card-body'>
                        <h1 className='h1 text-info'>Product Search <FaSearch/></h1>
                        <input className="form-control  my-5 mr-sm-2 btnsherch" type='text' value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Product Searching...' />
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>price</th>
                                    <th>stock</th>
                                    <th>category</th>
                                    <th>created in </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((e) => (
                                    <tr key={e.id}>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.price}</td>
                                        <td>{e.stock}</td>
                                        <td>{e.category_id}</td>
                                        <td>{e.created_at}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <footer className="sticky-footer bg-light">
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
    backgroundRepeat: "repeat",
    backgroundSize: "cover"
}
