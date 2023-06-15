import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import { FaRegArrowAltCircleLeft, FaSearch } from 'react-icons/fa';
import BackgroundImage from '../../assets/images/bg6.jpeg'
import { useNavigate } from 'react-router-dom';

export default function SearchCategory() {
    const HeaderStyle = {
        width: "100%",
        height: "100vh",
        background: `url(${BackgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }
    const [name, setName] = useState('');
    const [data, setData] = useState([]);
    const goto = useNavigate();
    const Return = async (e) => {
        goto('/categorys')
    }
    useEffect(() => {
        fetchProduct();
    }, [name])
    const fetchProduct = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/category/search/${name}`)
            setData(res.data)

        } catch (err) {
            console.log(err);
        }

    }
    const lent = data.length;
    return (
        <div >
            <NavBar/>
            <div className='row my-5' >
                <div className='col-md-2'></div>
                <div className='col-md-8 card'>
                    <div className='card-body'>
                    <button className='btn btn-outlin-info' onClick={Return}> <FaRegArrowAltCircleLeft /> </button>
                        <h1 className='h1 text-info'>Category Search <FaSearch/></h1>
                        <input className="form-control  my-5 mr-sm-2 btnsherch" type='text' value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Ctagory Searching...' />
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>categoryName</th>
                                    <th>created in</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((e) => (
                                    <tr key={e.id}>
                                        <td>{e.id}</td>
                                        <td>{e.categoryName}</td>
                                        <td>{e.created_at}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
