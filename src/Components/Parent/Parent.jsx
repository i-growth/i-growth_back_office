import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai'
import './Parent.scss'

const GetVaccine = () => {

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
    ]

    return (
        <div className='vaccine-card-fram'>
            {vaccine.map((data, index) => (
                <div className='vaccine-fram' key={index}>
                    <p className='vaccine_name'>{data.vaccine}</p>
                </div>
            ))}
        </div>

    )
}

export default function Parent() {

    const month = [
        { month: '2M', no: 2 },
        { month: '4M', no: 4 },
        { month: '6M', no: 6 },
        { month: '9M', no: 9 },
        { month: '12M', no: 12 },
        { month: '18M', no: 18 },
        { month: '24M', no: 24 },
        { month: '36M', no: 36 },
        { month: '48M', no: 48 },
        { month: '60M', no: 60 },
    ]

    const [selectedMonth, setSelectedMonth] = useState(2);


    return (
        <div className='baby-details-container'>
            <div className='babyDetail-bottom'>
                <table>
                    <tbody>
                        <tr>
                            <div className='babyDetail-view-container'>
                                <div className="cardView">
                                    <div className="close-icon"><AiFillCloseCircle size={25} color='red' className='icon' /></div>
                                    <div className="card-section">
                                        <div className='bottom-section'>
                                            <div className='bottom-left'>
                                                <h3>Vaccine Detail</h3>
                                                <GetVaccine />
                                            </div>
                                            <hr style={{ height: '400px' }} />
                                            <div className='bottom-right'>
                                                <h3>Development Activites</h3>
                                                <div className='development-activites-top'>
                                                    {month.map((data, index) => (
                                                        <div className={selectedMonth === data.no ? 'month-fram active' : 'month-fram'} key={index} onClick={() => setSelectedMonth(data.no)}>
                                                            <p>{data.month}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className='development-activites-bottom'>
                                                    <DevelopmentActivityTable />
                                                    <div className='button'>
                                                        <input className='input-field' type='text' name='comment' placeholder='Enter Comment Here' />
                                                        <input className='submit-btn' type="submit" value="Send" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const DevelopmentActivityTable = () => {
    return (
        <table style={{ width: '80%', height: '20px' }}>
            <tr >
                <td className='number'>1</td>
                <td>activity name</td>
            </tr>
        </table>
    )
}
