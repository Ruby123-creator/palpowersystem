import React from 'react';
import emerson from '../images/emerson-logo.png'
import exide from '../images/exide.webp'
import eaton from '../images/eaton.jpg'
import lumniuos from '../images/luminous.png'
import apc from '../images/apc-logo.png'
import amaron from '../images/amaron.jpg'
import microtek from '../images/microtek.png'
import libert from '../images/libert.jpg'
const clientImage = {
    height: '5rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Brands = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Brands</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Some of our Brands we Provide.</h2>
                    </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                        <div style={clientImage} className= "overflow-hidden flex justify-center transition-all ease-in-out  hover:opacity-50 w-1/6">
                            <img src={emerson} alt="client" />                           
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out hover:opacity-50">
                            <img src={exide} alt="client" />                            
                        </div> 

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out  hover:opacity-50">
                            <img src={lumniuos} alt="client" />                            
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out  hover:opacity-50">
                            <img src={eaton} alt="client" />                            
                        </div>
                
                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out  hover:opacity-50">
                            <img src={apc} alt="client" />                            
                        </div>
                                
                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out  hover:opacity-50">
                            <img src={libert} alt="client" />                            
                        </div>    
                        
                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out  hover:opacity-50">
                            <img src={amaron} alt="client" />                            
                        </div>  
                        
                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out  hover:opacity-50">
                            <img src={microtek} alt="client" />                            
                        </div>     
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Brands;