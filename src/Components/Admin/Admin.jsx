import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Admin.scss'
import Cover from '../cover/cover'
import Midwife from '../Admin/Midwife/Midwife'
import MedicalOfficer from './MedicalOfficer/MedicalOfficer'
import AddNews from '../public/AddNews'
import NewsFeed from '../public/NewsFeed'
import instance from '../../utility/AxiosInstance'

export default function Admin() {
    const navigation = useNavigate()
    const [active, setActive] = useState('midwife')
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(()=> {
        const checkAuth = async() => {
            try{
                const res = await instance.get('/admin/check-auth')
                console.log(res.data)
                setAuthenticated(true)
            }
            catch(err){
                setAuthenticated(false)
                console.log({error: err})
                navigation('/auth')
            }
        }
        checkAuth()
    },[active])

    if(authenticated) return (
        <div className='admin-container'>
            <Cover />
            <div className='navigation-container'>
                <ul>
                    <li onClick={() => setActive('midwife')} style={active === 'midwife' ? { background: '#fff', color: 'green', fontWeight: 'bold' } : {}}>Midwife</li>
                    <li onClick={() => setActive('medical_officers')} style={active === 'medical_officers' ? { background: '#fff', color: 'green', fontWeight: 'bold' } : {}}>Medical officers</li>
                    <li onClick={() => setActive('addNews')} style={active === 'addNews' ? { background: '#fff', color: 'green', fontWeight: 'bold' } : {}}>Add News Feeds</li>
                    <li onClick={() => setActive('news')} style={active === 'news' ? { background: '#fff', color: 'green', fontWeight: 'bold' } : {}}>News Feeds</li>
                    <li onClick={() => setActive('baby_details')} style={active === 'baby_details' ? { background: '#fff', color: 'green', fontWeight: 'bold' } : {}}>Baby Details</li>
                </ul>
            </div>
            {/* <Midwife /> */}
            {
                active === 'midwife' ? <Midwife /> :
                    active === 'medical_officers' ? <MedicalOfficer /> :
                        active === 'addNews' ? <AddNews /> :
                            active === 'news' ? <NewsFeed /> :
                                active === 'baby_details' ? <p>baby_details</p> : null
            }
        </div>
    )
}
