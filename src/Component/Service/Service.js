import React from 'react';
import Data from "../../Data/Data.json";
import "./Service.css";

function Service() {
    console.log(Data)
    return (
        <section className='service'>
            <h1 className='text-center my-5'>Service I provide</h1>
            <div className='service-pd-container'>
                {
                    Data.map((data, index) => {
                        const {title, img, des} = data;
                        return <div key={index} className='service-pd mx-auto d-block'>
                            <div className='service-img-container'>
                                <img className='service-img' src={img} alt="" />
                            </div>
                            <h2 className='fs-5'>{title}</h2>
                            <p>{des}</p>
                            <div className="position-relative">
                            <button className='button button-1'>{title}</button>
                            </div>
                        </div>

                    })
                }
            </div>
        </section>
    )
}

export default Service;