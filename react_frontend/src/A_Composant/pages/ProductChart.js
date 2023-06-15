import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie
} from 'recharts';
import NavBar from './NavBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
export default function ProductChart() {
    const [data, setData] = useState([])
    const goto = useNavigate();
    const Return = async (e) => {
        goto('/products')
    }
    //get products
    useEffect(() => {
        getProducts();
    }, []);
    async function getProducts() {
        const url = 'http://localhost:8000/api/products';
        const res = await axios.get(url);
        setData(res.data)
        console.log(res.data);
    }

    return (
        <>
            <NavBar />
            <button className='btn btn-outline-dark my-2' onClick={Return} style={{ marginLeft: '6%' }}><FaRegArrowAltCircleLeft /> </button>

            <div className='h1  text-primary my-5 ' style={{ marginLeft: '36%' }}>Product Rapport</div>
            <div style={{ width: '100%', height: 500 }}>
                <ResponsiveContainer>
                    <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="id" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar  dataKey="stock" barSize={20} fill="#55c57a"  />
                        <Bar dataKey="price" barSize={20} fill="#5598c5" />
                        <Line type="monotone" dataKey="id" stroke="#afc52f" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
            <Footer/>
        </>
    )
}
