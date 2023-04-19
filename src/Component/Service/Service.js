import React from 'react';
import { Link } from 'react-router-dom';
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
                            const { title, img, des,id } = data;

                            return <div key={index} className="col-md-4 pd-container col-sm-6 mb-4 overflow-hidden  text-center ">
                                <div className='bg-light'>
                                    <div className='service-img-container'>
                                        <img className='service-img img-fluid' src={img} alt="" />
                                    </div>
                                    <h1 className='fs-5 mt-2'>{title}</h1>
                                    <p>{des}</p>
                                    <div className="position-relative">
                                        <Link to={`/post/${id}`}><button className='button'>{title}</button></Link>
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