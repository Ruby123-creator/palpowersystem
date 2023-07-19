import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpeg'
import Tooltip from '@mui/material/Tooltip'
import MasonryImageList from './ImageList';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
const Intro = () => {
    return (
        <div>
                <section className="m-auto max-w-6xl p-2 md:p-6 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right hover:opacity-60" src={logo} />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl  text-blue-900 font-bold">About Us</h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'> Established as a Proprietor firm in the year 2017 at Noida (Uttar Pradesh, India), we “Pal Power System & Services” are a leading Wholesale Trader of a wide range of Emerson UPS, Bpe UPS, Online UPS, etc. 

Registered in 2018 ,India Pal Power Systems & Services has gained immense expertise in supplying & trading of Ups batteries etc.
</p>
                            </div>
                            <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Contact us
                                <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className='bg-slate-100'>
                <div className="m-auto max-w-6xl text-center p-2 md:p-2 h-5/6">
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">company Info</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-44 border-b-4 border-blue-900'></div>
                        </div>

                    <div className="flex flex-col-reverse lg:flex-row py-8 text-lg justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex gap-2 flex-col lg:mx-4 justify-center p-4 m-4  border-grey-300 border-2 rounded-md shadow-lg bg-fuchsia-100">
                        <h5>Address</h5>
                <span>D-103 Sec-63 Noida ,Uttar Pradesh 201301 India(Near Bullet Showroom) </span>
                <p><Tooltip placement='left-start' title="Bussiness Name"><BusinessOutlinedIcon className='text-cyan-600 mr-4'/> </Tooltip> Pal Power System & Sevices</p> 
                <p><Tooltip placement='left-start' title="CEO of Company"><AccountCircleIcon className='text-cyan-600 mr-4'/> </Tooltip> Anar Singh Pal</p> 
                <p><Tooltip placement='left-start' title="Establishment Year"><CalendarMonthIcon className='text-cyan-600 mr-4'/> </Tooltip>20 November 2017</p>  
                <p><Tooltip placement='left-start' title="Bussiness Type"><BuildIcon className='text-cyan-600 mr-4'/> </Tooltip> Manufacturing ,Trading and service providing</p> 
                <p><Tooltip placement='left-start' title="GSTIN"><AssignmentRoundedIcon className='text-cyan-600 mr-4'/> </Tooltip> 09BARPP4642K1ZZ</p> 
                <p><Tooltip placement='left-start' title="Type"><WorkRoundedIcon className='text-cyan-600 mr-4'/> </Tooltip> Proprietorship</p>
                <p><Tooltip placement='left-start' title="Sent Enquiry"><EmailIcon className='text-cyan-600 mr-4'/> </Tooltip> palpowersystem17@gmail.com</p>
                <p><Tooltip placement='left-start' title="Working Days"><EventAvailableRoundedIcon className='text-cyan-600 mr-4'/> </Tooltip>Mon-Sun ,From 9.00 A.M to 9.00 P.M</p>
               

                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <MasonryImageList/>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Intro;