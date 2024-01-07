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
                    getAllMidwifes.map((data, index) => {
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
                                            <div className="update">Update</div>
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
                                                        <h3>{selectedMidwife.categoryname}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* {showCategoryUpdate && selectedCategory && selectedCategory.category_id === data.category_id && (
                                        <div className='categoryUpdate-container'>
                                            <div className="card-container">
                                                <div className="header">
                                                    <h4>{selectedCategory.category_name}</h4>
                                                </div>
                                                <form onSubmit={submit}>
                                                    <div className="input-section">
                                                        <div className="input-wrapper">
                                                            <input type="text" name="category-name" placeholder='Enter the Category Name' className='category-name' required
                                                                id='CategoryName'
                                                                value={categoryName}
                                                                onChange={handleCategoryNameChange} />
                                                            <div className="image-holder"><input type="file" id='UpdateImage' onChange={handleImageChange} required /></div>
                                                        </div>
                                                    </div>
                                                    <div className="submission-btn">
                                                        <input className="submit-btn" type="submit" value={"Update"} />
                                                        <div className="cancel-btn" onClick={handleCloseUpdate}>Cancel</div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    )} */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
