import React, { useState, useEffect } from 'react'
import './Vaccine.scss'
import { useNavigate } from "react-router-dom";
import instance from '../../../utility/AxiosInstance';
import { TbVaccine } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

export default function Vaccine() {

    const Navigate = useNavigate();

    const [vaccine, setVaccine] = useState([]);

    useEffect(() => {
        instance.get("/midwife/child/vaccine")
            .then(res => {
                if (res.data !== "No data found") {
                    setVaccine(res.data)
                    console.log(res.data)
                }
                else console.log("No data found");
            }).catch(err => console.log(err))
    }, [])

    return (
        // <div className="card-container">
        //     {vaccine && vaccine.map((data, key) => (
        //         <div className="card01" key={key}>
        //             <h6 className="card-title"> {data.vaccine_name} </h6>
        //             <div className="card_body">
        //                 {data.note}
        //             </div>
        //             <button className="btn01" onClick={() => Navigate("/Midwife/Vaccination1")}>
        //                 More
        //             </button>

        //         </div>
        //     ))}
        // </div>


        //         <div className="main-container">
        //   <div className="cards">
        //     <div className="card card-1">
        //       <div className="card__icon"><i className="fas fa-bolt"></i></div>
        //       <p className="card__exit"><i className="fas fa-times"></i></p>
        //       <h2 className="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        //       <p className="card__apply">
        //         <a className="card__link" href="#">Apply Now <i className="fas fa-arrow-right"></i></a>
        //       </p>
        //   </div>
        // </div>

        <div className='main-container'>
            <div className='cards' >
                {vaccine && vaccine.map((data, key) => (
                    <div className='card card-5' key={key}>
                        <div className='card__icon'><TbVaccine size={35} />{data.vaccine_name}</div>
                        <h2 className="card__body">{data.note}</h2>
                        <p className="card__apply">
                            <a className="card__link" href="#">See More <FaArrowRight /></a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
