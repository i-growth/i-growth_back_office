import React from 'react'

export default function popup() {
  return (
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
        
  )
}
