import React, { useState, useEffect } from 'react'
import './Vaccine.scss'
import { Link, useNavigate } from "react-router-dom";
import instance from '../../../utility/AxiosInstance';

export default function Vaccine() {

    const Navigate = useNavigate();

    // const [vaccine, setVaccine] = useState();

    // useEffect(() => {
    //     instance.get("/midwife/child/vaccine/15")
    //         .then(res => {
    //             if (res.data !== "No data found") {
    //                 setVaccine(res.data)
    //                 console.log(res.data)
    //             }
    //             else console.log("No data found");
    //         }).catch(err => console.log(err))
    // }, [])

    return (
        // <div className='vaccine-container'>
        //     <div className='card-fram'>
        //         <div className='card'>
        //             <h2>Vaccine Name 1</h2>
        //         </div>
        //         <div className='card'>
        //             <h2>Vaccine Name 1</h2>
        //         </div>
        //         <div className='card'>
        //             <h2>Vaccine Name 1</h2>
        //         </div>
        //         <div className='card'>
        //             <h2>Vaccine Name 1</h2>
        //         </div>
        //         <div className='card'>
        //             <h2>Vaccine Name 1</h2>
        //         </div>
        //         <div className='card'>
        //             <h2>Vaccine Name 1</h2>
        //         </div>
        //         <div className='card'>
        //             <h2>Vaccine Name 1</h2>
        //         </div>
        //         <div className='card'>
        //             <h2>Vaccine Name 1</h2>
        //         </div>
        //         <div className='card'>
        //             <h2>Vaccine Name 1</h2>
        //         </div>
        //         <div className='card'>
        //             <h2>Vaccine Name 1</h2>
        //         </div>
        //         <div className='card'>
        //             <h2>Vaccine Name 1</h2>
        //         </div>
        //         <div className='card'>
        //             <h2>Vaccine Name 1</h2>
        //         </div>
        //         <div className='card'>
        //             <h2>Vaccine Name 1</h2>
        //         </div>
        //         <div className='card'>
        //             <h2>Vaccine Name 1</h2>
        //         </div>
        //         <div className='card'>
        //             <h2>Vaccine Name 1</h2>
        //         </div>
        //         <div className='card'>
        //             <h2>Vaccine Name 1</h2>
        //         </div>
        //     </div>
        // </div>
        <div className="card-container">
            {/* {vaccine.map((data, key) => ( */}
            <div className="card01" >
                <h6 className="card-title"> Vaccination 1</h6>
                <div className="card_body">
                    Details Details Details Details
                </div>
                <button className="btn01" onClick={() => Navigate("/Midwife/Vaccination1")}>
                    More
                </button>

            </div>
            {/* ))} */}

            <div className="card01">
                <h6 className="card-title"> Vaccination 2</h6>
                <div className="card_body">
                    Details Details Details Details
                </div>
                <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
                    More
                </button>
            </div>

            <div className="card01">
                <h6 className="card-title"> Vaccination 3</h6>
                <div className="card_body">
                    Details Details Details Details
                </div>
                <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
                    More
                </button>
            </div>

            <div className="card01">
                <h6 className="card-title"> Vaccination 4</h6>
                <div className="card_body">
                    Details Details Details Details
                </div>
                <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
                    More
                </button>
            </div>

            <div className="card01">
                <h6 className="card-title"> Vaccination 5</h6>
                <div className="card_body">
                    Details Details Details Details
                </div>
                <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
                    More
                </button>
            </div>
            <div className="card01">
                <h6 className="card-title"> Vaccination 6</h6>
                <div className="card_body">
                    Details Details Details Details
                </div>
                <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
                    More
                </button>
            </div>

            <div className="card01">
                <h6 className="card-title"> Vaccination 7</h6>
                <div className="card_body">
                    Details Details Details Details Details Details
                </div>
                <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
                    More
                </button>
            </div>
            <div className="card01">
                <h6 className="card-title"> Vaccination 8</h6>
                <div className="card_body">
                    Details Details Details Details Details Details
                </div>
                <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
                    More
                </button>
            </div>
            <div className="card01">
                <h6 className="card-title"> Vaccination 9</h6>
                <div className="card_body">
                    Details Details Details Details Details Details
                </div>
                <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
                    More
                </button>
            </div>
            <div className="card01">
                <h6 className="card-title"> Vaccination 10</h6>
                <div className="card_body">
                    Details Details Details Details Details Details
                </div>
                <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
                    More
                </button>
            </div>
            <div className="card01">
                <h6 className="card-title"> Vaccination 11</h6>
                <div className="card_body">
                    Details Details Details Details Details Details
                </div>
                <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
                    More
                </button>
            </div>
            <div className="card01">
                <h6 className="card-title"> Vaccination 12</h6>
                <div className="card_body">
                    Details Details Details Details Details Details
                </div>
                <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
                    More
                </button>
            </div>
            <div className="card01">
                <h6 className="card-title"> Vaccination 13</h6>
                <div className="card_body">
                    Details Details Details Details Details Details
                </div>
                <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
                    More
                </button>
            </div>
            <div className="card01">
                <h6 className="card-title"> Vaccination 14</h6>
                <div className="card_body">
                    Details Details Details Details Details Details
                </div>
                <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
                    More
                </button>
            </div>
            <div className="card01">
                <h6 className="card-title"> Vaccination 15</h6>
                <div className="card_body">
                    Details Details Details Details Details Details
                </div>
                <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
                    More
                </button>
            </div>
            <div className="card01">
                <h6 className="card-title"> Vaccination 16</h6>
                <div className="card_body">
                    Details Details Details Details Details Details
                </div>
                <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
                    More
                </button>
            </div>
            <div className="card01">
                <h6 className="card-title"> Vaccination 17</h6>
                <div className="card_body">
                    Details Details Details Details Details Details
                </div>
                <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
                    More
                </button>
            </div>
            <div className="card01">
                <h6 className="card-title"> Vaccination 18</h6>
                <div className="card_body">
                    Details Details Details Details Details Details
                </div>
                <button className="btn01" onClick={() => Navigate("/Midwife/Baby_Detail")}>
                    More
                </button>
            </div>
        </div>
    )
}
