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

    const [getAllMidwifes, setGetAllMidwifes] = useState([]);

    const [showMidwifeUpdate, setShowMidwifeUpdate] = useState(false);

    const [midwifeName, setMidwifeName] = useState("");

    const [nic, setNic] = useState("");

    const [serviceStartDate, setServiceStartDate] = useState("");

    const [email, setEmail] = useState("");

    const [phone, setPhone] = useState("");

    const [serviceId, setServiceId] = useState("");

    const handleMidwifeNameChange = (e) => {
        setMidwifeName(e.target.value);
    };

    const handleNicChange = (e) => {
        setNic(e.target.value);
    }

    const handleserviceStartDatehange = (e) => {
        setServiceStartDate(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleMobileChange = (e) => {
        setPhone(e.target.value);
    }

    const handleServiceIdChange = (e) => {
        setServiceId(e.target.value);
    }
    // formData.append('area_id', selectedArea);

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
        setMidwifeName(midwifes.name);
        setNic(midwifes.nic);
        setServiceStartDate(midwifes.service_start_date);
        setEmail(midwifes.email);
        setPhone(midwifes.phone);
        setServiceId(midwifes.service_id);
        setSelectedMidwife(midwifes);
        setShowMidwifeUpdate(true)
    }

    const handleCloseUpdateWindow = () => {
        setSelectedMidwife(null);
        setShowMidwifeUpdate(false);
    }

    useEffect(() => {
        instance.get("/admin/midwifes")
            .then(res => {
                if (res.data !== "No data found") {
                    setGetAllMidwifes(res.data)
                    console.log(res.data)
                }
                else console.log("No data found");
            }).catch(err => console.log(err))
    }, [])

    const submit = async (e) => {
        e.preventDefault();

        // Prepare form data
        const formData = new FormData();

        formData.append('name', midwifeName);
        formData.append('service_start_date', serviceStartDate)
        formData.append('nic', nic);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('service_id', serviceId);
        formData.append('area_id',);

        try {
            // Make PATCH request to update category
            await instance.patch(`/items/`, formData);

            // Close the update popup
            setShowMidwifeUpdate(false);
            // setTrigger(!trigger);

        } catch (error) {
            console.error("Error updating Item: ", error);
        }
    };

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
                                                    <div className='header'><h2>Midwife Detail</h2></div>
                                                    <div className='detail-body'>
                                                        <div className='detail'><h4>Midwife ID :</h4>001</div>
                                                        <div className='detail'><h4>Name :</h4>Tharindu</div>
                                                        <div className='detail'><h4>Service ID :</h4>111</div>
                                                        <div className='detail'><h4>NIC :</h4>123456789</div>
                                                        <div className='detail'><h4>Service Start Date :</h4>2024.01.05</div>
                                                        <div className='detail'><h4>Gmail :</h4>hck6005814@gmail.com</div>
                                                        <div className='detail'><h4>Mobile :</h4>0123456789</div>
                                                        <div className='detail'><h4>Admin Name :</h4>Saman</div>
                                                        <div className='detail'><h4>User Name :</h4>Tharindu</div>
                                                        <div className='detail'><h4>Password :</h4>1234</div>
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
                                            <form onSubmit={submit}>
                                                <div className="input-section">
                                                    <div className="input-wrapper">
                                                        {/* <input type="text" name="category-name" placeholder='Enter the Select Area'  required /> */}
                                                        <select className='inputfieds' style={{ height: '35px', width: '91%' }}>
                                                            <option value="someOption">Login As a Admin</option>
                                                            <option value="otherOption">Login As a Midwife</option>
                                                            <option value="otherOption">Login As a Medical Officer</option>
                                                        </select>
                                                        <input type="text" name="midwife-name" id='midwife-name' placeholder='Enter the Midwife Name' className='inputfieds' required value={midwifeName} onChange={handleMidwifeNameChange} />
                                                        <input type="text" name="midwife-nic" id='midwife-nic' placeholder='Enter the NIC' className='inputfieds' required value={nic} onChange={handleNicChange} />
                                                        <input type="text" name="midwife-service-start-date" id='midwife-service-start-date' placeholder='Enter the Service Start Date' className='inputfieds' required value={serviceStartDate} onChange={handleserviceStartDatehange} />
                                                        <input type="text" name="midwife-service-id" id='midwife-service-id' placeholder='Enter the Service_Id' className='inputfieds' required value={serviceId} onChange={handleServiceIdChange} />
                                                        <input type="text" name="midwife-email" id='midwife-email' placeholder='Enter the Email' className='inputfieds' required value={email} onChange={handleEmailChange} />
                                                        <input type="text" name="midwife-mobile" id='midwife-mobile' placeholder='Enter the Mobile Number' className='inputfieds' required value={phone} onChange={handleMobileChange} />
                                                    </div>
                                                </div>
                                                <div className="submission-btn">
                                                    {/* <div  type="submit">Submit</div> */}
                                                    <input className="submit-btn" type="submit" value={"Update"} />
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
