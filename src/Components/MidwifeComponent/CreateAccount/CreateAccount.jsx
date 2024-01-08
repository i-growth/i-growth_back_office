import React from 'react'
import './CreateAccount.scss'
import { AiFillPlusSquare } from 'react-icons/ai'

export default function CreateAccount() {
    return (
        <div className='CreateAccount-container'>
            <div className='CreateAccount-left'>
                <h3>Parent Detail</h3>
                <div className='parent-section-top'>
                    <input type='text' placeholder='search...' />
                    <AiFillPlusSquare fontSize={40} className='icon' />
                </div>
                <div className='parent-section-bottom'>
                    <div className='detail-section'>
                        <table>
                            <thead>
                                <tr>
                                    <td>No</td>
                                    <td>Parent ID</td>
                                    <td>Name</td>
                                    {/* <td>Address</td> */}
                                    <td>Mobile</td>
                                    <td>More</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    {/* <td>4</td> */}
                                    <td>5</td>
                                    <td className='crud-btn'>
                                        <div className='top-detail'>View Detail</div>
                                        <div className='update'>Update</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    {/* <td>4</td> */}
                                    <td>5</td>
                                    <td className='crud-btn'>
                                        <div className='top-detail' >View Detail</div>
                                        <div className='update'>Update</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <div className='CreateAccount-right'>
                <h3>Children Detail</h3>
                <div className='body-section'>
                    <form >
                        <div className="form-group">
                            <label htmlFor="name">Parent ID:</label>
                            <input
                                type="text"
                                id="parent_id"
                                name="parent_id"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Baby's Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="birthday">Birthday:</label>
                            <input
                                type="date"
                                id="birthday"
                                name="birthday"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Month:</label>
                            <input
                                type="text"
                                id="month"
                                name="month"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender:</label>
                            <input
                                type="text"
                                id="gender"
                                name="gender"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Registration Number:</label>
                            <input
                                type="text"
                                id="registration_number"
                                name="registration_number"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="parentName">Parent's Name:</label>
                            <input
                                type="text"
                                id="parentName"
                                name="parentName"
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
