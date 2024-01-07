import React from 'react'
import './MidwifeAdd.scss'
export default function MidwifeAdd(props) {

    return (
        <div className='midwifeAdd-container'>
            <div className="card-container">
                <div className="header">
                    <h4>Adding the Midwife</h4>
                </div>
                <form>
                    <div className="input-section">
                        <div className="input-wrapper">
                            {/* <input type="text" name="category-name" placeholder='Enter the Select Area'  required /> */}
                            <select className='inputfieds' style={{ height: '35px', width: '91%' }}>
                                <option value="someOption">Login As a Admin</option>
                                <option value="otherOption">Login As a Midwife</option>
                                <option value="otherOption">Login As a Medical Officer</option>
                            </select>
                            <input type="text" name="midwife-name" placeholder='Enter the Midwife Name' className='inputfieds' required />
                            <input type="text" name="midwife-nic" placeholder='Enter the NIC' className='inputfieds' required />
                            <input type="text" name="midwife-service-start-date" placeholder='Enter the Service Start Date' className='inputfieds' required />
                            <input type="text" name="midwife-service-id" placeholder='Enter the Service_Id' className='inputfieds' required />
                            <input type="text" name="midwife-email" placeholder='Enter the Email' className='inputfieds' required />
                            <input type="text" name="midwife-mobile" placeholder='Enter the Mobile Number' className='inputfieds' required />
                        </div>
                    </div>
                    <div className="submission-btn">
                        {/* <div  type="submit">Submit</div> */}
                        <input className="submit-btn" type="submit" />
                        <div className="cancel-btn" onClick={() => props.setDisplayMidwifeAdd(false)}>Cancel</div>
                    </div>
                </form>
            </div>
        </div>
    )
}
