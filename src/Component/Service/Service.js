import React from 'react';
import Data from "../../Data/Data.json";
import "./Service.css";

function Service() {
    return (
        <section className='service'>
            <h1 className='text-center my-5'>Service I provide</h1>


            <div className="categories">
                <div className="row">
                    {
                        Data.map((data, index) => {
                            const { title, img, des } = data;

                            return <div className="col-md-4 pd-container col-sm-6 mb-4 overflow-hidden  text-center ">
                                <div className='bg-light'>
                                    <div className='service-img-container'>
                                        <img className='service-img img-fluid' src={img} alt="" />
                                    </div>
                                    <h1 className='fs-5 mt-2'>{title}</h1>
                                    <p>{des}</p>
                                    <div className="position-relative">
                                        <button className='button'>{title}</button>
                                    </div>

                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Service;