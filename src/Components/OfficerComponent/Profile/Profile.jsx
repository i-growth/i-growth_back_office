import React, { useEffect, useState } from 'react'
import './Profile.scss';
import instance from '../../../utility/AxiosInstance';
import { useNavigate } from 'react-router-dom'

export default function Profile() {

    const navigation = useNavigate()

    const [authenticated, setAuthenticated] = useState(false)

    const [trigger, setTrigger] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        const formData = {
            officer_name: e.target['medicalOfficer-name'].value,
            service_start_date: e.target['medicalOfficer-service-start-date'].value,
            nic: e.target['medicalOfficer-nic'].value,
            email: e.target['medicalOfficer-email'].value,
            phone: e.target['medicalOfficer-mobile'].value,
            service_id: e.target['medicalOfficer-service-id'].value,
            area_id: e.target['area'].value
        }

        try {
            // Make PATCH request to update category
            await instance.put(`/admin/officer/`, formData);

            // Close the update popup
            setTrigger(!trigger);

        } catch (error) {
            console.error("Error updating Midwife: ", error);
        }
    };


    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await instance.get('/officer/check-auth')
                console.log(res.data)
                setAuthenticated(true)
            }
            catch (err) {
                setAuthenticated(false)
                console.log({ error: err })
                navigation('/auth')
            }
        }
        checkAuth()
    }, [])

    if (authenticated) return (
        // <div className='body'>
        //     <h2 className='main_title'>My Profile</h2>
        //     <div className='static_textbox'>
        //         <div className='sectord1'>
        //             <h4>Officer ID</h4>
        //             <div className='input'>
        //                 <input type="text" name='name' />
        //             </div>
        //         </div>
        //         <div className='sectord2'>
        //             <h4>Service ID</h4>
        //             <div className='input'>
        //                 <input type="text" name='name' />
        //             </div>
        //         </div>
        //         <div className='sectord3'>
        //             <h4>Area</h4>
        //             <div className='input'>
        //                 <input type="text" name='name' />
        //             </div>
        //         </div>
        //     </div>

        //     <div className='update_unit'>
        //         <div className='unit'>
        //             <h4>Name</h4>
        //             <div className='input'>
        //                 <input type="text" name='name' />
        //             </div>

        //         </div>
        //         <div className='unit'>
        //             <h4>NIC</h4>
        //             <div className='input'>
        //                 <input type="text" name='NIC' />
        //             </div>

        //         </div>
        //         <div className='unit'>
        //             <h4>Email</h4>
        //             <div className='input'>
        //                 <input type="email" name='email' />
        //             </div>

        //         </div>
        //         <div className='unit'>
        //             <h4>Phone</h4>
        //             <div className='input'>
        //                 <input type="text" name='phone' />
        //             </div>

        //         </div>
        //         <div className='unit'>
        //             <h4>Current Password</h4>
        //             <div className='input'>
        //                 <input type="password" name='current_pass' />
        //             </div>

        //         </div>
        //         <div className='unit'>
        //             <h4>New Password</h4>
        //             <div className='input'>
        //                 <input type="password" name='new_password' />
        //             </div>

        //         </div>
        //         <div id='update_button'>
        //             <input type="submit" name='update' value='UPDATE' />
        //         </div>
        //     </div>



        // </div>

        <div className='profile-container'>
            <div className='profile-top'><span>Medical Officer Profile</span></div>
            <div className='profile-bottom'>
                <div className='buttom-left'>
                    <div className='left-header'>
                        <div className='inputField-cover'><label>Officer ID : </label><input type="text" placeholder='Officer ID' disabled={true} /></div>
                        <div className='inputField-cover'><label>Service ID : </label><input type="text" placeholder='Service ID' disabled={true} /></div>
                        <div className='inputField-cover'><label>Area : </label><input className='area' type="text" placeholder='Area' disabled={true} /></div>
                    </div>
                    <div className='left-body'>
                        <form onSubmit={submit}>
                            <div className='inputField-cover'><label>Name :</label><input type='text' placeholder='Name' /></div>
                            <div className='inputField-cover'><label>NIC :</label><input type='text' placeholder='NIC' /></div>
                            <div className='inputField-cover'><label>Email :</label><input type='text' placeholder='Email' /></div>
                            <div className='inputField-cover'><label>Phone number :</label><input type='text' placeholder='Phone' /></div>
                            <div className='inputField-cover'><label>Current Password :</label><input type='text' placeholder='Current Password' disabled={true} /></div>
                            <div className='inputField-cover'><label>New Password :</label><input type='text' placeholder='New Password' /></div>
                            <div className='profile-update-btn'>
                                <input type="submit" value={"Update"} />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='butom-right'>
                    <div className='right_box'>
                        <div className='summery_title'>
                            <h2>Summery Report</h2>
                        </div>
                        <div className='tot'>
                            <div className='parent_tot'>
                                <h3>Totel Parents</h3>
                                <div className='count'>
                                    <span><u>200</u></span>
                                </div>
                            </div>
                            <div className='child_tot'>
                                <h3>Totel Child</h3>
                                <div className='count'>
                                    <span><u>200</u></span>
                                </div>
                            </div>
                        </div>
                        <div className='tot'>
                            <h3>Totel Measurement's</h3>
                            <div className='tot_title'>
                                <h4>Over Weight</h4>
                                <div className='count'>
                                    <span><u>200</u></span>
                                </div>
                            </div>
                            <div className='tot_title'>
                                <h4>Proper Weight</h4>
                                <div className='count'>
                                    <span><u>200</u></span>
                                </div>
                            </div>
                            <div className='tot_title'>
                                <h4>Risk For Under Weight</h4>
                                <div className='count'>
                                    <span><u>200</u></span>
                                </div>
                            </div>
                            <div className='tot_title'>
                                <h4>Medium Under Weight</h4>
                                <div className='count'>
                                    <span><u>200</u></span>
                                </div>
                            </div>
                            <div className='tot_title'>
                                <h4>Sever Under Weight</h4>
                                <div className='count'>
                                    <span><u>200</u></span>
                                </div>
                            </div>
                        </div>
                        <div className='button'>
                            <input type="submit" name='submit' value='Download' id='button' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
