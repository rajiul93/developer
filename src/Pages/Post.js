import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import Navbar from '../Component/Navbar/Navbar';
import Data from "../Data/Data.json";

function Post() {
    const { id } = useParams();
    const content = Data.filter((data) => data.id === parseInt(id))


    return (
        <div>
            <Navbar />
            <div style={{ maxWidth: "900px", margin: "0 auto" ,padding:"0 15px" }} className='my-5'>
                {
                    content.map((pd, ind) => {
                        const { img, title, des, description_1, description_2, description_3, description_4, description_5, description_6 } = pd
                        return <div key={ind}>
                            <div className='d-flex justify-content-between my-4'>

                                <div >
                                    <h2>{title}</h2>
                                    <h6>{des}</h6>
                                </div>
                                <img src={img} width={90} alt="" />
                            </div>
                            <article>
                                {description_1}
                            </article>
                            <br />
                            <article>
                                {description_2}
                            </article>
                            <br />
                            <article>
                                {description_3}
                            </article>
                            <br />
                            <article>
                                {description_4}
                            </article>
                            <br />
                            <article>
                                {description_5}
                            </article>
                            <br />
                            <article>
                                {description_6}
                            </article>
                        </div>
                    })
                }
            </div>
            <Footer />
        </div>
    )
}

export default Post