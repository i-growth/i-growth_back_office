import React from 'react'
import './news.scss'
import { CiTrash } from "react-icons/ci";

const NewsCard = () => {
    return (
        <div className="news">
            <div className="image">
                <img src="https://www.newscutter.lk/wp-content/uploads/2022/10/Screenshot-2022-10-06-at-17.37.34-850x541.png" alt="sample_image" />
            </div>

            <div className="content">
                <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>Sample Title <CiTrash color='red' size={22} className='bin-icon' /></h3>
                <p className="discretion">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi pariatur alias architecto repellendus necessitatibus similique quos quisquam delectus molestiae temporibus. Autem nemo at rerum qui commodi voluptatum quo. Illum, architecto.</p>
                <p className='date'>2022-11-25</p>
            </div>
        </div>
    )
}

const NewsFeed = () => {
    return (
        <div className='newsFeed-container'>
            <div className='card-fram'>
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    )
}

export default NewsFeed