import React, { useState, useEffect } from 'react'
import './Vaccine.scss'
import { useNavigate } from "react-router-dom";
import instance from '../../../utility/AxiosInstance';

export default function Vaccine() {

    const Navigate = useNavigate();

    const [vaccine, setVaccine] = useState();

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
        <div className="card-container">
            {vaccine && vaccine.map((data, key) => (
                <div className="card01" key={key}>
                    <h6 className="card-title"> {data.vaccine_name} </h6>
                    <div className="card_body">
                        Details Details Details Details
                    </div>
                    <button className="btn01" onClick={() => Navigate("/Midwife/Vaccination1")}>
                        More
                    </button>

                </div>
            ))}
        </div>
    )
}
