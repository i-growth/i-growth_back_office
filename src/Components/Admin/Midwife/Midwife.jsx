import React, { useEffect, useState } from 'react';
import './Midwife.scss'
import MidwifeAdd from './MidwifeAdd/MidwifeAdd';
import { AiFillPlusSquare, AiFillCloseCircle } from 'react-icons/ai'
import instance from '../../../utility/AxiosInstance'

export default function Mifwife() {

    const data = [
        { name: "Name", value: "Kagalugama", type: "text" },
        { name: "Email", value: "Thambala", type: "email" },
    ]

    const [displayMidwifeAdd, setDisplayMidwifeAdd] = useState(false);

    const [selectedMidwife, setSelectedMidwife] = useState(null);

    const [showDetail, setShowDetail] = useState(false);

    const [getArea, setGetArea] = useState([]);

    const [getAllMidwifes, setGetAllMidwifes] = useState([]);

    const [showMidwifeUpdate, setShowMidwifeUpdate] = useState(false);

    function showCode() {
        setDisplayMidwifeAdd(true);
    }

    const handleViewDetail = (midwifes) => {
        setSelectedMidwife(midwifes);
        setShowDetail(true);
    }

    const handleCloseViewDetail = () => {
        setSelectedMidwife(null);
        setShowDetail(false);
    }

    const handleUpdateWindow = (midwifes) => {
        setSelectedMidwife(midwifes);
        setShowMidwifeUpdate(true)
    }

    const handleCloseUpdateWindow = () => {
        setSelectedMidwife(null);
        setShowMidwifeUpdate(false);
    }

    useEffect(() => {
        instance.get("/public/areas")
            .then(res => {
                if (res.data !== "No data found") {
                    setGetArea(res.data)
                    console.log(getArea)
                }
                else console.log("No data found");
            }).catch(err => console.log(err))
    }, [])

    useEffect(() => {
        instance.get("/admin/midwifes")
            .then(res => {
                if (res.data !== "No data found") {
                    setGetAllMidwifes(res.data)
                    console.log(getAllMidwifes)
                }
                else console.log("No data found");
            }).catch(err => console.log(err))
    }, [])

    return (
        <div className='midwife-container'>
            {displayMidwifeAdd ? <MidwifeAdd setDisplayMidwifeAdd={setDisplayMidwifeAdd} /> : null}
            <div className="head">
                <div className="name"><h2>Midwife</h2></div>
                <AiFillPlusSquare fontSize={50} className='icon' onClick={showCode} />
            </div>
            <div className='body'>
                {
                    data.map((data, index) => {
                        return (
                            <div className="card-fram" key={index}>
                                <div className="image-container">
                                    <div className='detail'>
                                        <h3>{data.value}</h3>
                                    </div>
                                </div>
                                <div className="nameOfCard"><h3>{data.name}</h3></div>
                                <div className="crud-function">
                                    <div className="crud-btns">
                                        <div className="top">
                                            <div className="view-btn" onClick={() => handleViewDetail(data)}>View Details</div>
                                        </div>
                                        <div className="bottom">
                                            <div className="update" onClick={() => handleUpdateWindow(data)}>Update</div>
                                            <div className="delete">Delete</div>
                                        </div>
                                    </div>
                                </div>

                                {showDetail && selectedMidwife && selectedMidwife.midwife_id === data.midwife_id && (
                                    <div className='cardView-container'>
                                        <div className="cardView">
                                            <div className="close-icon"><AiFillCloseCircle size={25} color='red' className='icon' onClick={handleCloseViewDetail} /></div>
                                            <div className="card-section">
                                                <div className="view-card-fram">
                                                    <div className="image-section">
                                                        {/* <img src={`http://localhost:3001/image/${selectedCategory.image}`} alt="" /> */}
                                                    </div>
                                                    <div className="name-section">
                                                        <h3>{selectedMidwife.name}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {showMidwifeUpdate && selectedMidwife && selectedMidwife.midwife_id === data.midwife_id && (
                                    // <div className='categoryUpdate-container'>
                                    //     <div className="card-container">
                                    //         <div className="header">
                                    //             <h4>{selectedMidwife.name}</h4>
                                    //         </div>
                                    //         <form >
                                    //             <div className="input-section">
                                    //                 <div className="input-wrapper">
                                    //                     <input type="text" name="category-name" placeholder='Enter the Category Name' className='category-name' required
                                    //                         id='CategoryName'
                                    //                     // value={categoryName}
                                    //                     // onChange={handleCategoryNameChange} 
                                    //                     />
                                    //                     <div className="image-holder"><input type="file" id='UpdateImage' required /></div>
                                    //                 </div>
                                    //             </div>
                                    //             <div className="submission-btn">
                                    //                 <input className="submit-btn" type="submit" value={"Update"} />
                                    //                 <div className="cancel-btn" onClick={handleCloseUpdateWindow}>Cancel</div>
                                    //             </div>
                                    //         </form>
                                    //     </div>
                                    // </div>
                                    <div className='midwifeAdd-container'>
                                        <div className="card-container">
                                            <div className="header">
                                                <h4>Update the Midwife</h4>
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
                                                    <div className="cancel-btn" onClick={handleCloseUpdateWindow}>Cancel</div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
