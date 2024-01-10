import React, { useEffect, useState } from 'react';
import './CreateAccount.scss'
import { AiFillPlusSquare } from 'react-icons/ai'
import ParentDataAdd from './ParentDataAdd/ParentDataAdd'
import instance from '../../../utility/AxiosInstance';

export default function CreateAccount() {

    const [inputData, setInputData] = useState({
        child_name: "",
        child_gender: "",
        child_birthday: "",
        child_birth_certificate_no: "",
        child_born_weight: "",
        gardian_nic: ""
    })

    const [displayParentAdd, setDisplayParentAdd] = useState(false);

    const [allParent, setAllParent] = useState([]);

    const [searchValue, setSearchValue] = useState("");

    const [trigger, setTrigger] = useState(false);

    function showCode() {
        setDisplayParentAdd(true);
        console.log(displayParentAdd);
    }

    useEffect(() => {
        instance.get("/midwife/parents")
            .then(res => {
                if (res.data !== "No data found") {
                    setAllParent(res.data)
                    console.log(res.data)
                }
                else console.log("No data found");
            }).catch(err => console.log(err))
    }, [trigger])

    // const createChild = async (e) => {
    //     e.preventDefault();
    //     console.log(inputData);
    // }

    const submit = async (e) => {
        e.preventDefault();

        // const inputData = {
        //     child_name: child_name,
        //     child_gender: child_gender,
        //     child_birthday: child_birthday,
        //     child_birth_certificate_no: child_birth_certificate_no,
        //     child_born_weight: child_born_weight,
        //     gardian_nic: gardian_nic
        // }

        try {
            const res = await instance.post('/midwife/child', inputData);

            if (res.status === 200) {
                // alert('Item Added Successfully');
            }
        } catch (err) {
            console.log(err.response.data.message);
            alert(err.response.data.message);
        }
    }

    return (
        <div className='CreateAccount-container'>
            {displayParentAdd ? <ParentDataAdd setDisplayParentAdd={setDisplayParentAdd} setTrigger={setTrigger} /> : null}
            <div className='CreateAccount-left'>
                <h3>Parent Detail</h3>
                <div className='parent-section-top'>
                    <input type='text' placeholder='search...' onChange={(e) => setSearchValue(e.target.value)} />
                    <AiFillPlusSquare fontSize={40} className='icon' onClick={showCode} />
                </div>
                <div className='parent-section-bottom'>
                    <div className='detail-section'>
                        <table>
                            <thead>
                                <tr>
                                    <td>No</td>
                                    <td>Guardian NIC</td>
                                    <td>Name</td>
                                    {/* <td>Address</td> */}
                                    <td>Mobile</td>
                                    <td>More</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    searchValue === "" ? allParent.map((data, key) => {
                                        console.log(data);
                                        return (
                                            <tr key={key}>
                                                <td>{key + 1}</td>
                                                <td>{data.guardian_nic}</td>
                                                <td>{data.guardian_name}</td>
                                                {/* <td>4</td> */}
                                                <td>{data.phone}</td>
                                                <td className='crud-btn'>
                                                    <div className='top-detail'>View Detail</div>
                                                    <div className='update'>Update</div>
                                                </td>
                                            </tr>
                                        )
                                    }) : allParent.map((data, key) => {
                                        if (data.guardian_nic.includes(searchValue.toLocaleLowerCase()) || data.guardian_name.includes(searchValue.toLocaleLowerCase()) || data.phone.includes(searchValue.toLocaleLowerCase())) return (
                                            <tr key={key}>
                                                <td>{key + 1}</td>
                                                <td>{data.guardian_nic}</td>
                                                <td>{data.guardian_name}</td>
                                                {/* <td>4</td> */}
                                                <td>{data.phone}</td>
                                                <td className='crud-btn'>
                                                    <div className='top-detail'>View Detail</div>
                                                    <div className='update'>Update</div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <div className='CreateAccount-right'>
                <h3>Children Detail</h3>
                <div className='body-section'>
                    {/* <form onSubmit={createChild} > */}
                    <form onSubmit={submit} >
                        <div className="form-group">
                            <label htmlFor="name">Guardian NIC:</label>
                            <input
                                required={true}
                                type="text"
                                id="guardian_id"
                                name="guardian_id"
                                onChange={(e) => setInputData({ ...inputData, gardian_nic: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Baby's Name:</label>
                            <input
                                required={true}
                                type="text"
                                id="name"
                                name="name"
                                onChange={(e) => setInputData({ ...inputData, child_name: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="birthday">Birthday:</label>
                            <input
                                required={true}
                                type="date"
                                id="birthday"
                                name="birthday"
                                onChange={(e) => setInputData({ ...inputData, child_birthday: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="birthday">Birth Weight:</label>
                            <input
                                required={true}
                                type="number"
                                id="birth_weight"
                                name="birth_weight"
                                onChange={(e) => setInputData({ ...inputData, child_born_weight: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="gender">Gender:</label>
                            <input
                                required={true}
                                type="text"
                                id="gender"
                                name="gender"
                                onChange={e => setInputData({ ...inputData, child_gender: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Registration Number:</label>
                            <input
                                required={true}
                                type="text"
                                id="registration_number"
                                name="registration_number"
                                onChange={e => setInputData({ ...inputData, child_birth_certificate_no: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="parentName">Parent's Name:</label>
                            <input
                                required={true}
                                type="text"
                                id="parentName"
                                name="parentName"
                                onChange={e => setInputData({ ...inputData, parent_name: e.target.value })}
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
