import React, { useState } from 'react'
import './MidwifeComponent.scss'
import Cover from '../cover/cover'
import Measure from './MonthlyMeasurement/MonthlyMeasurement'

export default function MinwifeComponent() {
  const [active, setActive] = useState('measure')
  return (
    <div className='midwifeComponent-container'>
      <Cover />
      <div className='navigation-container'>
        <ul>
          <li onClick={() => setActive('measure')} style={active === 'measure' ? { background: '#fff', color: 'green', fontWeight: 'bold' } : {}}>Monthly Measure</li>
          <li onClick={() => setActive('baby_detail')} style={active === 'baby_detail' ? { background: '#fff', color: 'green', fontWeight: 'bold' } : {}}>Baby Detail</li>
          <li onClick={() => setActive('vacc_detail')} style={active === 'vacc_detail' ? { background: '#fff', color: 'green', fontWeight: 'bold' } : {}}>Vacc Detail</li>
          <li onClick={() => setActive('consult_advices')} style={active === 'consult_advices' ? { background: '#fff', color: 'green', fontWeight: 'bold' } : {}}>Consult Advices</li>
          <li onClick={() => setActive('view_development')} style={active === 'view_development' ? { background: '#fff', color: 'green', fontWeight: 'bold' } : {}}>View Development</li>
          <li onClick={() => setActive('create_account')} style={active === 'create_account' ? { background: '#fff', color: 'green', fontWeight: 'bold' } : {}}>Create Account</li>
        </ul>
      </div>
      {/* <Midwife /> */}
      {
        active === 'measure' ? <Measure /> :
          active === 'baby_detail' ? <p>Baby Detail</p> :
            active === 'vacc_detail' ? <p>Vacc Detail</p> :
              active === 'consult_advices' ? <p>Consult Advices</p> :
                active === 'view_development' ? <p>View Development</p> :
                  active === 'create_account' ? <p>Create Account</p> : null
      }
    </div>
  )
}
