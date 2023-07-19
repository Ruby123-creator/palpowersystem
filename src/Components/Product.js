import React from 'react';
import { Link } from 'react-router-dom';
import battery from '../images/battery.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ups from '../images/new-product-250x250.webp'
import multilineUPS from '../images/multi-line-ups.webp'
import invertor from '../images/invertor (1).jpg'
const Product = () => {
   const imgstyle ={
          height:'12rem',
          width:'full',
    }
    return (
        <>
            <div className="my-4 py-4" id='product'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Products</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Battery</h4>
                                <img alt="card img" className="rounded-t group-hover:scale-[1.05] transition duration-1000 ease-in-out" src={battery} style={imgstyle} />
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                    Buy Product <ArrowForwardIcon/>

                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Invertor</h4>
                                <img alt="card img" className="rounded-t group-hover:scale-[1.05] transition duration-1000 ease-in-out" src={invertor} style={imgstyle} />
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                        Buy Product <ArrowForwardIcon/>
                                    </Link>
                                </div>
                                
                                
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">UPS</h4>
                            <img alt="card img" style={imgstyle} className="rounded-t group-hover:scale-[1.05] transition duration-1000 ease-in-out" src={ups} />
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                    Buy Product <ArrowForwardIcon/>

                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                            <div className="m-2 text-justify text-sm">
                                <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Multi-Line Ups</h4>
                                <img alt="card img" style={imgstyle}  className="rounded-t group-hover:scale-[1.05] transition duration-1000 ease-in-out" src={multilineUPS} />
                                <div className="flex justify-center my-4">
                                    <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
                                    Buy Product <ArrowForwardIcon/>

                                    </Link>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;