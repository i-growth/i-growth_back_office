import React from 'react'
import './Login.css'
import instance from '../../utility/AxiosInstance'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigation = useNavigate()

    const submitForm = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        if (username && password) {
            instance.post('/admin/login', {
                username: username,
                password: password
            }).then(res => {
                console.log(res.data);
                navigation('/admin');
            })
                .catch(err => {
                    alert("Please Enter the Corrected Username and Password")
                    console.log(err);
                })
        }
    }

    return (
        <div className='login-container'>
            <div className="login-card-container">
                <div className="card-header">
                    <h1 style={{ color: 'red' }}>i-Growth</h1>
                </div>
                <div className="body-section">

                    <form onSubmit={submitForm}>
                        <div className="title">
                            {/* <h2>Admin Login</h2> */}
                            <select >
                                <option value="someOption">Login As a Admin</option>
                                <option value="otherOption">Login As a Midwife</option>
                                <option value="otherOption">Login As a Medical Officer</option>
                            </select>
                        </div>
                        <div className="input-feild-container">
                            <div className='label-container'><label>NIC Number</label></div>
                            <input type="text" name="username" placeholder='Enter the user name' id='username' />
                        </div>
                        <div className="input-feild-container">
                            <div className='label-container'><label>Password</label></div>
                            <input type="password" name="password" id="password" placeholder='Enter the password' />
                        </div>
                        <div className='error-massage' style={{ opacity: '0' }}>Enter the correct user name and password</div>
                        <div className="submitButton"><input type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
