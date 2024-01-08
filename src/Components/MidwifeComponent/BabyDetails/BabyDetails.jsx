import React, { useEffect, useState } from 'react';
import './BabyDetails.scss'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function BabyDetails() {

    const month = [
        { month: '2M' },
        { month: '4M' },
        { month: '6M' },
        { month: '9M' },
        { month: '12M' },
        { month: '18M' },
        { month: '24M' },
        { month: '36M' },
        { month: '48M' },
        { month: '60M' },
    ]

    const vaccine = [
        { vaccine: 'Vaccine 1' },
        { vaccine: 'Vaccine 2' },
        { vaccine: 'Vaccine 3' },
        { vaccine: 'Vaccine 4' },
        { vaccine: 'Vaccine 5' },
        { vaccine: 'Vaccine 6' },
        { vaccine: 'Vaccine 7' },
        { vaccine: 'Vaccine 8' },
        { vaccine: 'Vaccine 9' },
        { vaccine: 'Vaccine 10' },
        { vaccine: 'Vaccine 11' },
        { vaccine: 'Vaccine 12' },
        { vaccine: 'Vaccine 13' },
        { vaccine: 'Vaccine 14' },
        { vaccine: 'Vaccine 15' },
        { vaccine: 'Vaccine 16' },
        { vaccine: 'Vaccine 17' },
        { vaccine: 'Vaccine 18' },
    ]

    const data = [
        { id: '1', no: "01", child_id: "10", childl_name: "01", age: '04', gender: '01', gurdient_name: 'father', mobile: '0123456789' },
        { id: '2', no: "02", child_id: "10", childl_name: "02", age: '04', gender: '01', gurdient_name: 'father', mobile: '0123456789' },
        { id: '3', no: "03", child_id: "10", childl_name: "03", age: '04', gender: '01', gurdient_name: 'father', mobile: '0123456789' },
        { id: '4', no: "04", child_id: "10", childl_name: "04", age: '04', gender: '01', gurdient_name: 'father', mobile: '0123456789' },
        { id: '5', no: "05", child_id: "10", childl_name: "05", age: '04', gender: '01', gurdient_name: 'father', mobile: '0123456789' },
        { id: '6', no: "06", child_id: "10", childl_name: "06", age: '04', gender: '01', gurdient_name: 'father', mobile: '0123456789' },
        { id: '7', no: "07", child_id: "10", childl_name: "07", age: '04', gender: '01', gurdient_name: 'father', mobile: '0123456789' },
        { id: '8', no: "08", child_id: "10", childl_name: "08", age: '04', gender: '01', gurdient_name: 'father', mobile: '0123456789' },
        { id: '9', no: "09", child_id: "10", childl_name: "09", age: '04', gender: '01', gurdient_name: 'father', mobile: '0123456789' },
    ]

    const [showDetail, setShowDetail] = useState(false);

    const [selectedBaby, setSelectedBaby] = useState(null);

    const handleViewDetail = (babyDetail) => {
        setSelectedBaby(babyDetail);
        setShowDetail(true);
    }

    const handleCloseViewDetail = () => {
        setSelectedBaby(null);
        setShowDetail(false);
    }


    return (
        <div className='baby-details-container'>
            <div className='babyDetail-top'>
                <div className='searchbar'>
                    <input type="text" placeholder="Search.." name="search" className='search' />
                </div>
            </div>
            <div className='babyDetail-bottom'>
                <table>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Child ID</td>
                            <td>Child Name</td>
                            <td>Age</td>
                            <td>Gender</td>
                            <td>Gardiant Name</td>
                            <td>Mobile</td>
                            <td>More</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data, index) => (
                            <tr key={index}>
                                <td>{data.no}</td>
                                <td>{data.child_id}</td>
                                <td>{data.childl_name}</td>
                                <td>{data.age}</td>
                                <td>{data.gender}</td>
                                <td>{data.gurdient_name}</td>
                                <td>{data.mobile}</td>
                                <td className='crud-btn'>
                                    <div className='top-detail' onClick={() => handleViewDetail(data)}>View Detail</div>
                                    <div className='bottom-detail'>
                                        <div className='update'>Update</div>
                                        <div className='delete'>Delete</div>
                                    </div>
                                </td>

                                {showDetail && selectedBaby && selectedBaby.no === data.no && (
                                    <div className='babyDetail-view-container'>
                                        <div className="cardView">
                                            <div className="close-icon"><AiFillCloseCircle size={25} color='red' className='icon' onClick={handleCloseViewDetail} /></div>
                                            <div className="card-section">
                                                <div className='top-section'>
                                                    <h3>Details:</h3>
                                                    <div className='detail-body'>
                                                        <div className='detail'><h4>Baby ID :</h4>001</div>
                                                        <div className='detail'><h4>Name :</h4>Tharindu</div>
                                                        <div className='detail'><h4>Age :</h4>04</div>
                                                        <div className='detail'><h4>Gender :</h4>M</div>
                                                        <div className='detail'><h4>Gudiunt Name :</h4>Father</div>
                                                        <div className='detail'><h4>Address :</h4>Polonnaruwa</div>
                                                        <div className='detail'><h4>Mobile :</h4>0123456789</div>
                                                        <div className='detail'><h4>BMI :</h4>11</div>
                                                        <div className='detail'><h4>Stage :</h4>Normal</div>
                                                    </div>
                                                </div>
                                                <hr style={{ width: '1200px' }} />
                                                <div className='bottom-section'>
                                                    <div className='bottom-left'>
                                                        <h3>Vaccine Detail</h3>
                                                        <div className='vaccine-card-fram'>
                                                            {vaccine.map((data, index) => (
                                                                <div className='vaccine-fram' key={index}>
                                                                    <p>{data.vaccine}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <hr style={{ height: '400px' }} />
                                                    <div className='bottom-right'>
                                                        <h3>Development Activites</h3>
                                                        <div className='development-activites-top'>
                                                            {month.map((data, index) => (
                                                                <div className='month-fram' key={index}>
                                                                    <p>{data.month}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className='development-activites-bottom'>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
